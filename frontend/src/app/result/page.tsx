"use client";
// src/app/result/page.tsx — Results & AI Evaluation Page
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { evaluateSession } from "@/lib/api";
import type { InterviewResult } from "@/types";
import ScoreChart from "@/components/ui/ScoreChart";
import ScoreMeter from "@/components/ui/ScoreMeter";

const TIER_COLORS: Record<string, string> = {
  Exceptional: "#2ED573",
  Strong: "#C9A84C",
  Competent: "#4ECDC4",
  Developing: "#FFA502",
  "Needs Improvement": "#FF4757",
  "Not Ready": "#FF4757",
};

const READINESS_COLORS: Record<string, string> = {
  Exceptional: "#2ED573",
  Strong: "#C9A84C",
  Competent: "#4ECDC4",
  Developing: "#FFA502",
  "Not Ready": "#FF4757",
};

function ResultContent() {
  const router = useRouter();
  const params = useSearchParams();
  const sessionId = params.get("session");

  const [result, setResult] = useState<InterviewResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [chartMode, setChartMode] = useState<"radar" | "bar">("radar");

  useEffect(() => {
    if (!sessionId) { router.replace("/"); return; }
    runEvaluation();
  }, [sessionId]); // eslint-disable-line

  async function runEvaluation() {
    try {
      const data = await evaluateSession(sessionId!);
      setResult(data);
    } catch (err: any) {
      setError(err?.response?.data?.error || "Evaluation failed. Please check your OpenAI API key.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full border-4 border-slate-light animate-spin border-t-brand-gold" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">🧠</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white font-display text-xl mb-1">AI is evaluating your performance…</p>
          <p className="text-gray-500 text-sm font-body">Analysing clarity, structure, empathy, and reasoning</p>
        </div>
        <div className="flex gap-1 mt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 bg-brand-gold rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center p-4">
        <div className="glass rounded-2xl p-8 max-w-md text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <h2 className="font-display text-xl text-white mb-2">Evaluation Failed</h2>
          <p className="text-gray-400 text-sm font-body mb-6">{error}</p>
          <button onClick={() => router.push("/")} className="px-6 py-2.5 bg-brand-gold text-obsidian rounded-xl font-body font-semibold text-sm">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  if (!result) return null;

  const tierColor = TIER_COLORS[result.tier] || "#C9A84C";
  const readinessColor = READINESS_COLORS[result.overallFeedback?.readinessLevel] || "#C9A84C";

  return (
    <div className="min-h-screen bg-obsidian">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px]" style={{ background: `${tierColor}08` }} />
      </div>

      {/* Header */}
      <header className="border-b border-slate-light bg-charcoal/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-display text-xl text-white">EduQuest <span className="text-gold-gradient">AI</span></span>
          <button onClick={() => router.push("/")} className="text-sm text-gray-400 hover:text-white font-body transition-colors">
            ← New Interview
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Score Block */}
        <div className="glass rounded-3xl p-8 mb-8 animate-fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Big score */}
            <div className="flex-shrink-0">
              <ScoreMeter score={result.aggregated.weightedOverall} size="lg" />
            </div>

            {/* Summary */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span
                  className="px-3 py-1 rounded-full text-sm font-body font-semibold"
                  style={{ background: `${tierColor}20`, color: tierColor, border: `1px solid ${tierColor}40` }}
                >
                  {result.tier}
                </span>
                <span className="text-gray-500 text-sm font-body capitalize">{result.mode} Mode</span>
              </div>
              <h1 className="font-display text-3xl text-white mb-1">
                {result.user?.name || "Candidate"}
              </h1>
              <p className="text-gray-400 font-body text-sm mb-4">
                {result.aggregated.questionsAttempted} of {result.aggregated.totalQuestions} questions evaluated
              </p>

              {result.overallFeedback && (
                <>
                  <p className="text-gray-300 font-body leading-relaxed text-sm mb-4">
                    {result.overallFeedback.overallFeedback}
                  </p>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-body font-medium"
                    style={{ background: `${readinessColor}15`, color: readinessColor, border: `1px solid ${readinessColor}30` }}
                  >
                    Readiness: {result.overallFeedback.readinessLevel}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Score breakdown */}
          <div className="lg:col-span-2 glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl text-white">Score Breakdown</h2>
              <div className="flex gap-1 bg-charcoal rounded-lg p-1">
                {(["radar", "bar"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setChartMode(m)}
                    className={`px-3 py-1 rounded-md text-xs font-body capitalize transition-all ${
                      chartMode === m ? "bg-brand-gold text-obsidian font-semibold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <ScoreChart scores={result.aggregated.averageScores} mode={chartMode} />

            {/* Score tiles */}
            <div className="grid grid-cols-4 gap-3 mt-6">
              {Object.entries(result.aggregated.averageScores).map(([key, val]) => (
                <ScoreMeter key={key} score={val} label={key.charAt(0).toUpperCase() + key.slice(1)} />
              ))}
            </div>
          </div>

          {/* Insights panel */}
          <div className="flex flex-col gap-4">
            {result.overallFeedback && (
              <>
                <div className="glass rounded-2xl p-5">
                  <p className="text-success-green text-xs font-body font-semibold mb-2">💪 Top Strength</p>
                  <p className="text-white text-sm font-body leading-relaxed">{result.overallFeedback.topStrength}</p>
                </div>
                <div className="glass rounded-2xl p-5">
                  <p className="text-warn-amber text-xs font-body font-semibold mb-2">🎯 Priority Focus</p>
                  <p className="text-white text-sm font-body leading-relaxed">{result.overallFeedback.priorityImprovement}</p>
                </div>
                <div className="glass rounded-2xl p-5">
                  <p className="text-brand-teal text-xs font-body font-semibold mb-2">📚 Recommended Practice</p>
                  <p className="text-white text-sm font-body leading-relaxed">{result.overallFeedback.recommendedPractice}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Per-Question Breakdown */}
        <div className="glass rounded-2xl p-6">
          <h2 className="font-display text-xl text-white mb-6">Question-by-Question Feedback</h2>
          <div className="space-y-6">
            {result.answers.map((answer, idx) => (
              <div key={answer.questionId} className="border border-slate-light rounded-2xl p-5">
                {/* Question */}
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-7 h-7 bg-brand-gold/15 text-brand-gold rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5">
                    Q{idx + 1}
                  </span>
                  <p className="text-gray-300 font-body text-sm leading-relaxed">{answer.questionText}</p>
                </div>

                {/* Answer excerpt */}
                {answer.answerText && (
                  <div className="bg-charcoal rounded-xl p-4 mb-4 border-l-2 border-brand-gold/30">
                    <p className="text-xs text-gray-500 font-body mb-2">Your Response</p>
                    <p className="text-gray-300 text-sm font-body leading-relaxed line-clamp-3">{answer.answerText}</p>
                  </div>
                )}

                {/* Scores */}
                {answer.evaluation ? (
                  <>
                    <div className={`grid gap-3 mb-4 ${result.mode === 'uk' ? 'grid-cols-2 md:grid-cols-5' : 'grid-cols-2 md:grid-cols-4'}`}>
                      {(result.mode === 'uk' ? ["clarity", "structure", "empathy", "reasoning", "nhsRelevance"] : ["clarity", "structure", "empathy", "reasoning"]).map((dim) => (
                        <ScoreMeter
                          key={dim}
                          score={(answer.evaluation as any)[dim] || 0}
                          label={dim === "nhsRelevance" ? "NHS Relevance" : dim.charAt(0).toUpperCase() + dim.slice(1)}
                        />
                      ))}
                    </div>
                    <div className="bg-brand-gold/5 border border-brand-gold/15 rounded-xl p-4">
                      <p className="text-brand-gold-light text-xs font-body font-semibold mb-1.5">AI Feedback</p>
                      <p className="text-gray-300 text-sm font-body leading-relaxed">{answer.evaluation.feedback}</p>
                      {answer.evaluation.improvement && (
                        <p className="text-warn-amber text-xs font-body mt-2">
                          <span className="font-semibold">Improve:</span> {answer.evaluation.improvement}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="text-gray-600 text-sm font-body italic">No answer submitted for this question.</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center flex gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-3 bg-brand-gold hover:bg-brand-gold-light text-obsidian rounded-xl font-body font-semibold transition-all hover:shadow-lg hover:shadow-brand-gold/20"
          >
            Practice Again →
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 border border-slate-light text-gray-400 hover:text-white rounded-xl font-body transition-all"
          >
            Print Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-obsidian" />}>
      <ResultContent />
    </Suspense>
  );
}
