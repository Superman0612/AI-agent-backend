// routes/interviewRoutes.js — Core Interview API Routes
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Session = require("../models/Session");
const QUESTION_BANK = require("../config/questionBank");
const MODE_CONFIG = require("../config/modeConfig");

/**
 * POST /api/interview/start
 * Creates user + session, returns questions and mode config
 */
router.post("/start", async (req, res) => {
  try {
    const { name, email, mode } = req.body;

    if (!name || !email || !mode) {
      return res.status(400).json({ error: "name, email, and mode are required" });
    }

    if (!["canada", "uk", "australia", "asia"].includes(mode)) {
      return res.status(400).json({ error: "Invalid mode. Choose: canada, uk, australia, asia" });
    }

    // Upsert user by email
    let user = await User.findOneAndUpdate(
      { email },
      { name, mode },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // Select questions
    let selectedQuestions = [];
    if (mode === "uk") {
      // Pick exactly 8 stations, one per category, no repeats
      const allQuestions = QUESTION_BANK[mode];
      const categories = [...new Set(allQuestions.map(q => q.category))];
      categories.slice(0, 8).forEach(cat => {
        const catQuestions = allQuestions.filter(q => q.category === cat);
        const randomQ = catQuestions[Math.floor(Math.random() * catQuestions.length)];
        selectedQuestions.push(randomQ);
      });
    }  else {
  // Pick exactly 8 stations, one per category, no repeats
  const allQuestions = QUESTION_BANK[mode];

  const categories = [...new Set(allQuestions.map(q => q.category))];

  categories.slice(0, 8).forEach(cat => {
    const catQuestions = allQuestions.filter(
      q => q.category === cat
    );

    const randomQ =
      catQuestions[
        Math.floor(Math.random() * catQuestions.length)
      ];

    selectedQuestions.push(randomQ);
  });
}

    // Build answer skeleton for session
    const answerSkeletons = selectedQuestions.map((q) => ({
      questionId: q.id,
      questionText: q.text,
      answerText: "",
      timeSpent: 0,
      interruptions: [],
    }));

    // Create session
    const session = await Session.create({
      userId: user._id,
      mode,
      answers: answerSkeletons,
    });

    res.status(201).json({
      sessionId: session._id,
      userId: user._id,
      mode,
      modeConfig: {
        name: MODE_CONFIG[mode].name,
        readingTime: MODE_CONFIG[mode].readingTime,
        responseTime: MODE_CONFIG[mode].responseTime,
        warningTime: MODE_CONFIG[mode].warningTime,
        interruptionEnabled: MODE_CONFIG[mode].interruptionEnabled,
        interruptionDelay: MODE_CONFIG[mode].interruptionDelay,
        color: MODE_CONFIG[mode].color,
        flag: MODE_CONFIG[mode].flag,
      },
      questions: selectedQuestions.map((q) => ({
        id: q.id,
        text: q.text,
        category: q.category,
        persona: q.persona || null,
      })),
    });
  } catch (err) {
    console.error("POST /start error:", err);
    res.status(500).json({ error: "Failed to start interview session" });
  }
});

/**
 * POST /api/interview/answer
 * Save a single answer to the session
 */
router.post("/answer", async (req, res) => {
  try {
    const { sessionId, questionId, answerText, timeSpent, interruptionAsked } = req.body;

    if (!sessionId || !questionId) {
      return res.status(400).json({ error: "sessionId and questionId are required" });
    }

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: "Session not found" });
    if (session.status !== "active") return res.status(400).json({ error: "Session is not active" });

    // Find the answer slot and update it
    const answerIndex = session.answers.findIndex((a) => a.questionId === questionId);
    if (answerIndex === -1) return res.status(404).json({ error: "Question not found in session" });

    session.answers[answerIndex].answerText = answerText || "";
    session.answers[answerIndex].timeSpent = timeSpent || 0;
    
    if (interruptionAsked) {
      session.answers[answerIndex].interruptions.push({ text: interruptionAsked });
    }

    await session.save();

    res.json({ message: "Answer saved", questionId });
  } catch (err) {
    console.error("POST /answer error:", err);
    res.status(500).json({ error: "Failed to save answer" });
  }
});

/**
 * POST /api/interview/complete
 * Mark session as completed
 */
router.post("/complete", async (req, res) => {
  try {
    const { sessionId } = req.body;

    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ error: "Session not found" });

    session.status = "completed";
    session.completedAt = new Date();
    await session.save();

    res.json({ message: "Session marked complete", sessionId });
  } catch (err) {
    console.error("POST /complete error:", err);
    res.status(500).json({ error: "Failed to complete session" });
  }
});

/**
 * GET /api/interview/result/:sessionId
 * Fetch full session results
 */
router.get("/result/:sessionId", async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId).populate("userId", "name email");
    if (!session) return res.status(404).json({ error: "Session not found" });

    res.json(session);
  } catch (err) {
    console.error("GET /result error:", err);
    res.status(500).json({ error: "Failed to fetch results" });
  }
});

module.exports = router;
