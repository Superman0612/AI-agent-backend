"use client";
// src/app/interview/page.tsx — Main Interview Screen
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { saveAnswer, requestInterruption } from "@/lib/api";
import { useMedia } from "@/lib/useMedia";
import { useTimer } from "@/lib/useTimer";
import type { SessionData, InterviewPhase } from "@/types";
import QuestionCard from "@/components/interview/QuestionCard";
import TimerDisplay from "@/components/interview/TimerDisplay";
import InterruptionBanner from "@/components/interview/InterruptionBanner";
import ProgressStepper from "@/components/interview/ProgressStepper";
import CameraPanel from "@/components/media/CameraPanel";
import PermissionPrompt from "@/components/media/PermissionPrompt";

export default function InterviewPage() {
  const router = useRouter();
  const [session, setSession] = useState<SessionData | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [phase, setPhase] = useState<InterviewPhase>("reading");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [answered, setAnswered] = useState<boolean[]>([]);
  const [interruption, setInterruption] = useState<string>("");
  const [showInterruption, setShowInterruption] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(true);
  const [permLoading, setPermLoading] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);

  const media = useMedia();
  const textRef = useRef<HTMLTextAreaElement>(null);
  const interruptionFiredRef = useRef(false);

  // Load session from sessionStorage
  useEffect(() => {
    if (!session) return;
    const raw = sessionStorage.getItem("eduquest_session");
    if (!raw) return;
    const s = JSON.parse(raw);
    sessionStorage.setItem("eduquest_session", JSON.stringify({
      ...s,
      _progress: { currentQ, answers, phase }
    }));
  }, [currentQ, answers, phase]);

  useEffect(() => {
    const raw = sessionStorage.getItem("eduquest_session");
    if (!raw) { router.replace("/"); return; }
    const s: SessionData = JSON.parse(raw);
    setSession(s);
    setAnswered(new Array(s.questions.length).fill(false));

    // Yeh add karo ↓
    if (s._progress) {
      setCurrentQ(s._progress.currentQ);
      setAnswers(s._progress.answers);
      setPhase(s._progress.phase);
    }
  }, [router]);

  // Back button lock
  useEffect(() => {
    if (!session) return;

    window.history.pushState(null, "", window.location.href);

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      window.history.pushState(null, "", window.location.href);
      window.history.pushState(null, "", window.location.href);
    };  

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [session]);

  // Reading timer
  const readingTimer = useTimer({
    duration: session?.modeConfig?.readingTime ?? session?.modeConfig?.readingTime ?? 120,
    warningAt: 15,
    onExpire: () => {
      setPhase("responding");
      setStartTime(Date.now());
      responseTimer.reset(session?.modeConfig.responseTime ?? 360);
      responseTimer.start();
      interruptionFiredRef.current = false;
      setTimeout(() => textRef.current?.focus(), 100);
    },
  });

  // Response timer
  const responseTimer = useTimer({
    duration: session?.modeConfig?.responseTime ?? session?.modeConfig?.responseTime ?? 360,
    warningAt: session?.modeConfig.warningTime ?? 60,
    onExpire: () => handleNextQuestion(true),
    onWarning: () => {}, // CSS handles warning pulse
  });

  // Start reading when session loads
  useEffect(() => {
    if (session && !readingTimer.running && phase === "reading"){
      readingTimer.reset(session.modeConfig.readingTime); 
      readingTimer.start();
    }
  }, [session]); // eslint-disable-line

  // AI interruption logic
  useEffect(() => {
    if (!session || phase !== "responding" || !session.modeConfig.interruptionEnabled) return;
    const delay = session.modeConfig.interruptionDelay ?? 180;
    if (
      responseTimer.running &&
      !interruptionFiredRef.current &&
      (session.modeConfig.responseTime - responseTimer.timeLeft) >= delay
    ) {
      interruptionFiredRef.current = true;
      fireInterruption();
    }
  }, [responseTimer.timeLeft]); // eslint-disable-line

  async function fireInterruption() {
    if (!session) return;
    try {
      const currentAnswer = answers[session.questions[currentQ].id] || "";
      const { interruption: text } = await requestInterruption(
        session.sessionId,
        currentAnswer,
        session.mode
      );
      if (text) {
        setInterruption(text);
        setShowInterruption(true);
      }
    } catch { /* Non-critical */ }
  }

  async function handleNextQuestion(autoSubmit = false) {
    if (!session) return;
    const q = session.questions[currentQ];
    const answer = answers[q.id] || "";
    const timeSpent = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;

    setSubmitting(true);
    try {
      await saveAnswer(session.sessionId, q.id, answer, timeSpent);
    } catch { /* Non-critical — answer cached locally */ }
    setSubmitting(false);

    const newAnswered = [...answered];
    newAnswered[currentQ] = true;
    setAnswered(newAnswered);

    if (currentQ < session.questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
      setPhase("reading");
      setShowInterruption(false);
      interruptionFiredRef.current = false;

      readingTimer.reset(session.modeConfig.readingTime);
      responseTimer.reset(session.modeConfig.responseTime);
      setTimeout(() => readingTimer.start(), 100);
    } else {
      // All questions done — go to evaluation
      router.push(`/result?session=${session.sessionId}`);
    }
  }

  function skipReading() {
    readingTimer.pause();
    setPhase("responding");
    setStartTime(Date.now());
    responseTimer.reset(session?.modeConfig.responseTime ?? 360);
    responseTimer.start();
    interruptionFiredRef.current = false;
    setTimeout(() => textRef.current?.focus(), 100);
  }

  async function handlePermAllow() {
    setPermLoading(true);
    await media.startMedia();
    setPermLoading(false);
    setShowPermissionPrompt(false);
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="flex gap-2 items-center text-gray-400">
          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
          Loading session…
        </div>
      </div>
    );
  }

  const q = session.questions[currentQ];
  const currentAnswer = answers[q.id] || "";
  const activeTimer = phase === "reading" ? readingTimer : responseTimer;

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Permission Prompt */}
      {showPermissionPrompt && (
        <PermissionPrompt
          onAllow={handlePermAllow}
          onSkip={() => setShowPermissionPrompt(false)}
          loading={permLoading}
          error={media.permissionError}
        />
      )}

      {/* Header Bar */}
      <header className="border-b border-slate-light bg-charcoal/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-lg text-white">EduQuest</span>
            <span className="text-gray-600">|</span>
            <span className="text-sm text-gray-400 font-body">
              {session.modeConfig.flag || ""} {session.modeConfig.name}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ProgressStepper total={session.questions.length} current={currentQ} answered={answered} />
            <span className="text-xs text-gray-500 font-body hidden sm:block">
              Q{currentQ + 1}/{session.questions.length}
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6 items-start">
          {/* Main Interview Area */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Question */}
            {!showPermissionPrompt && (
            <QuestionCard
              question={q}
              index={currentQ}
              total={session.questions.length}
              mode={session.mode}
              phase={phase}
              onSaveAnswer={(id, answer) => setAnswers((prev) => ({ ...prev, [id]: answer}))}
            />
            )}

            {/* Interruption Banner */}
            {showInterruption && interruption && (
              <InterruptionBanner
                text={interruption}
                mode={session.mode}
                onDismiss={() => setShowInterruption(false)}
              />
            )}

            {/* Answer Area */}
            {/* <div className={`glass rounded-2xl p-6 transition-all ${phase === "reading" ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm text-gray-400 font-body">Your Response</label>
                <span className="text-xs text-gray-600 font-mono">{currentAnswer.length} chars</span>
              </div>
              <textarea
                ref={textRef}
                value={currentAnswer}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))}
                disabled={phase === "reading"}
                placeholder={
                  phase === "reading"
                    ? "Read the question carefully. The text area will activate when reading time ends…"
                    : "Begin your response here. Structure your thoughts clearly and speak naturally…"
                }
                className="interview-textarea w-full rounded-xl px-4 py-3 min-h-[240px]"
              />

              <div className="flex items-center justify-between mt-4">
                {phase === "reading" ? (
                  <button
                    onClick={skipReading}
                    className="text-sm text-gray-500 hover:text-brand-gold font-body transition-colors underline underline-offset-4"
                  >
                    Skip reading time →
                  </button>
                ) : (
                  <p className="text-xs text-gray-600 font-body">
                    ⌨ Type your answer or dictate your thoughts
                  </p>
                )}
                <button
                  onClick={() => handleNextQuestion(false)}
                  disabled={submitting || phase === "reading"}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all ${
                    submitting || phase === "reading"
                      ? "bg-slate-light text-gray-500 cursor-not-allowed"
                      : "bg-brand-gold hover:bg-brand-gold-light text-obsidian hover:shadow-lg hover:shadow-brand-gold/20"
                  }`}
                >
                  {submitting ? (
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  ) : null}
                  {currentQ < session.questions.length - 1 ? "Next Question →" : "Submit & Finish"}
                </button>
              </div>
            </div> */}
          </div>
 <button
                  onClick={() => handleNextQuestion(false)}
                  disabled={submitting || phase === "reading"}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-sm transition-all ${
                    submitting || phase === "reading"
                      ? "bg-slate-light text-gray-500 cursor-not-allowed"
                      : "bg-brand-gold hover:bg-brand-gold-light text-obsidian hover:shadow-lg hover:shadow-brand-gold/20"
                  }`}
                >
                  {submitting ? (
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  ) : null}
                  {currentQ < session.questions.length - 1 ? "Next Question →" : "Submit & Finish"}
                </button>
          {/* Right Sidebar */}
          <div className="hidden lg:flex flex-col gap-4 w-56 flex-shrink-0">
            {/* Timer */}
            <div className="glass rounded-2xl p-4 flex flex-col items-center gap-2">
              <TimerDisplay
                timeLeft={activeTimer.timeLeft}
                duration={phase === "reading" ? session.modeConfig.readingTime : session.modeConfig.responseTime}
                phase={phase}
                isWarning={activeTimer.isWarning}
                format={activeTimer.format}
              />
            </div>

            {/* Camera */}
            <div className="glass rounded-2xl p-4">
              <CameraPanel media={media} compact />
            </div>

            {/* Mode Info */}
            <div className="glass rounded-2xl p-4">
              <p className="text-xs text-gray-500 font-body mb-2">Interview Mode</p>
              <p className="text-white font-body font-medium text-sm">{session.modeConfig.name}</p>
              <p className="text-gray-500 text-xs font-body mt-1">
                {session.modeConfig.interruptionEnabled ? "⚡ AI interruptions active" : "✓ No interruptions"}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile timer bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-charcoal border-t border-slate-light px-4 py-2 flex items-center justify-between z-20">
          <span className={`font-mono text-sm font-bold ${activeTimer.isWarning ? "timer-warning" : "text-white"}`}>
            {activeTimer.format(activeTimer.timeLeft)}
          </span>
          <span className="text-xs text-gray-500 font-body capitalize">{phase === "reading" ? "Reading" : "Responding"}</span>
        </div>
      </div>
    </div>
  );
}
