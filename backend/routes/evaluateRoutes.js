// routes/evaluateRoutes.js — AI Evaluation API Routes
const express = require("express");
const router = express.Router();
const Session = require("../models/Session");
const llmService = require("../services/llmService");
const scoringService = require("../services/scoringService");
const QUESTION_BANK = require("../config/questionBank");

/**
 * POST /api/evaluate/answer
 * Evaluate a single answer using OpenAI
 */
router.post("/answer", async (req, res) => {
  try {
    const { sessionId, questionId } = req.body;

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: "Session not found" });

    const answer = session.answers.find((a) => a.questionId === questionId);
    if (!answer) return res.status(404).json({ error: "Answer not found" });

    if (!answer.answerText || answer.answerText.trim().length < 10) {
      return res.status(400).json({ error: "Answer too short to evaluate" });
    }

    // Find question in bank to get idealAnswerFramework
    const modeQuestions = QUESTION_BANK[session.mode] || [];
    const questionObj = modeQuestions.find(q => q.id === questionId);
    const idealFramework = questionObj ? questionObj.idealAnswerFramework : null;

    // Call OpenAI for evaluation
    const evaluation = await llmService.evaluateAnswer(answer.questionText, answer.answerText, session.mode, idealFramework);

    // Store evaluation in session
    const answerIndex = session.answers.findIndex((a) => a.questionId === questionId);
    session.answers[answerIndex].evaluation = evaluation;
    await session.save();

    res.json({ questionId, evaluation });
  } catch (err) {
    console.error("POST /evaluate/answer error:", err);
    res.status(500).json({ error: "Evaluation failed. Check OpenAI API key and connectivity." });
  }
});

/**
 * POST /api/evaluate/session
 * Evaluate ALL answers in a session + generate overall feedback
 */
router.post("/session", async (req, res) => {
  try {
    const { sessionId } = req.body;

    const session = await Session.findById(sessionId).populate("userId", "name email");
    if (!session) return res.status(404).json({ error: "Session not found" });

    // Evaluate each non-empty answer
    const evaluationPromises = session.answers
      .filter((a) => a.answerText && a.answerText.trim().length >= 10)
      .map(async (answer) => {
        const modeQuestions = QUESTION_BANK[session.mode] || [];
        const questionObj = modeQuestions.find(q => q.id === answer.questionId);
        const idealFramework = questionObj ? questionObj.idealAnswerFramework : null;

        const evaluation = await llmService.evaluateAnswer(answer.questionText, answer.answerText, session.mode, idealFramework);
        const idx = session.answers.findIndex((a) => a.questionId === answer.questionId);
        session.answers[idx].evaluation = evaluation;
        return evaluation;
      });

    await Promise.all(evaluationPromises);

    // Generate overall session feedback
    const overallAI = await llmService.generateOverallFeedback(session.answers, session.mode);

    // Calculate aggregated scores
    const aggregated = scoringService.aggregateSessionScores(session.answers, session.mode);
    const tier = scoringService.getPerformanceTier(aggregated?.weightedOverall || 0);

    session.overallScore = aggregated?.weightedOverall;
    session.overallFeedback = overallAI.overallFeedback;
    session.status = "completed";
    session.completedAt = new Date();
    await session.save();

    res.json({
      sessionId,
      user: session.userId,
      mode: session.mode,
      aggregated,
      tier,
      overallFeedback: overallAI,
      answers: session.answers,
    });
  } catch (err) {
    console.error("POST /evaluate/session error:", err);
    res.status(500).json({ error: "Session evaluation failed" });
  }
});

/**
 * POST /api/evaluate/interrupt
 * Generate an AI interruption for the current answer
 */
router.post("/interrupt", async (req, res) => {
  try {
    const { sessionId, partialAnswer, mode } = req.body;

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: "Session not found" });

    const modeConfig = require("../config/modeConfig")[mode];
    if (!modeConfig.interruptionEnabled) {
      return res.json({ interruption: null, message: "Interruptions not enabled for this mode" });
    }

    let interruption = "";
    if (mode === "uk") {
      const ukModule = require("../modules/uk/ukModule");
      interruption = ukModule.getClarificationPrompt(partialAnswer);
    } else {
      interruption = await llmService.generateInterruption(
        partialAnswer,
        mode,
        modeConfig.interruptionStyle
      );
    }

    res.json({ interruption });
  } catch (err) {
    console.error("POST /evaluate/interrupt error:", err);
    res.status(500).json({ error: "Failed to generate interruption" });
  }
});

module.exports = router;
