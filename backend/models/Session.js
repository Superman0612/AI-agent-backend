// models/Session.js — Interview Session Schema
const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: { type: String, required: true },
  questionText: { type: String, required: true },
  answerText: { type: String, default: "" },
  timeSpent: { type: Number, default: 0 }, // seconds
  interruptions: [
    {
      text: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
  evaluation: {
    clarity: { type: Number, min: 0, max: 10 },
    structure: { type: Number, min: 0, max: 10 },
    empathy: { type: Number, min: 0, max: 10 },
    reasoning: { type: Number, min: 0, max: 10 },
    nhsRelevance: { type: Number, min: 0, max: 10 },
    totalScore: { type: Number, min: 0, max: 10 },
    feedback: { type: String },
  },
});

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mode: {
      type: String,
      required: true,
      enum: ["canada", "uk", "australia", "asia"],
    },
    status: {
      type: String,
      enum: ["active", "completed", "abandoned"],
      default: "active",
    },
    answers: [answerSchema],
    overallScore: { type: Number, min: 0, max: 10 },
    overallFeedback: { type: String },
    startedAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);
