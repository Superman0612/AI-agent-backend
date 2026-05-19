// src/types/index.ts — Shared TypeScript Types

export type Mode = "canada" | "uk" | "australia" | "asia";

export interface ModeConfig {
  name: string;
  flag: string;
  color: string;
  readingTime: number;
  responseTime: number;
  warningTime: number;
  interruptionEnabled: boolean;
  interruptionDelay?: number;
}

export interface Question {
  id: string;
  text: string;
  category: string;
  persona?: string;
}

export interface SessionData {
  sessionId: string;
  userId: string;
  mode: Mode;
  userName: string;
  modeConfig: ModeConfig;
  questions: Question[];
  _progress?: {
    currentQ: number;
    answers: Record<string, string>;
    phase: InterviewPhase;
  };
}

export interface Evaluation {
  clarity: number;
  structure: number;
  empathy: number;
  reasoning: number;
  totalScore: number;
  feedback: string;
  strengths?: string;
  improvement?: string;
}

export interface Answer {
  questionId: string;
  questionText: string;
  answerText: string;
  timeSpent: number;
  evaluation?: Evaluation;
}

export interface InterviewResult {
  sessionId: string;
  mode: Mode;
  aggregated: {
    averageScores: { clarity: number; structure: number; empathy: number; reasoning: number };
    weightedOverall: number;
    questionsAttempted: number;
    totalQuestions: number;
  };
  tier: string;
  overallFeedback: {
    overallFeedback: string;
    topStrength: string;
    priorityImprovement: string;
    readinessLevel: string;
    recommendedPractice: string;
  };
  answers: Answer[];
  user: { name: string; email: string };
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export {};

export type InterviewPhase = "reading" | "responding";
