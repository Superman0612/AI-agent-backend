// src/lib/api.ts — Centralised API Helper
import axios from "axios";

const BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: BASE,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});

// ── Interview ────────────────────────────────────────────────────
export async function startSession(name: string, email: string, mode: string) {
  const res = await api.post("/api/interview/start", { name, email, mode });
  return res.data;
}

export async function saveAnswer(sessionId: string, questionId: string, answerText: string, timeSpent: number, interruptionAsked?: string) {
  const res = await api.post("/api/interview/answer", { sessionId, questionId, answerText, timeSpent, interruptionAsked });
  return res.data;
}

export async function completeSession(sessionId: string) {
  const res = await api.post("/api/interview/complete", { sessionId });
  return res.data;
}

export async function getResult(sessionId: string) {
  const res = await api.get(`/api/interview/result/${sessionId}`);
  return res.data;
}

// ── Evaluation ───────────────────────────────────────────────────
export async function evaluateSession(sessionId: string) {
  const res = await api.post("/api/evaluate/session", { sessionId });
  return res.data;
}

export async function requestInterruption(sessionId: string, partialAnswer: string, mode: string) {
  const res = await api.post("/api/evaluate/interrupt", { sessionId, partialAnswer, mode });
  return res.data;
}
