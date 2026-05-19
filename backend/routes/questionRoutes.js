// routes/questionRoutes.js — Question Bank + AI Generation Routes
const express = require("express");
const router = express.Router();
const QUESTION_BANK = require("../config/questionBank");
const llmService = require("../services/llmService");

/**
 * GET /api/questions/:mode
 * Return static question bank for a mode
 */
router.get("/:mode", (req, res) => {
  const { mode } = req.params;
  const questions = QUESTION_BANK[mode];
  if (!questions) return res.status(404).json({ error: "Mode not found" });
  res.json({ mode, questions });
});

/**
 * POST /api/questions/generate
 * AI-generate a question variant based on mode
 */
router.post("/generate", async (req, res) => {
  try {
    const { mode, baseQuestionId } = req.body;
    const questions = QUESTION_BANK[mode];
    if (!questions) return res.status(400).json({ error: "Invalid mode" });

    const base = questions.find((q) => q.id === baseQuestionId) || questions[0];
    const generated = await llmService.generateQuestionVariant(base.text, mode);

    res.json({
      mode,
      baseQuestion: base.text,
      generatedQuestion: generated,
    });
  } catch (err) {
    console.error("POST /questions/generate error:", err);
    res.status(500).json({ error: "Failed to generate question" });
  }
});

module.exports = router;
