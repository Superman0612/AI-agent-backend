"use client";
// src/app/page.tsx — Landing Page
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const MODES = [
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Canada",
    tagline: "Deep Ethical Reasoning",
    desc: "Unpredictable scenarios, follow-up questions, 6-min responses.",
    readTime: "2 min reading",
    respTime: "6 min response",
    color: "#DC143C",
    bg: "from-red-900/20 to-red-950/10",
    border: "border-red-800/30 hover:border-red-500/60",
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "United Kingdom",
    tagline: "NHS Structured Format",
    desc: "Fast-paced with AI clarification interruptions. Clarity is key.",
    readTime: "45 sec reading",
    respTime: "5 min response",
    color: "#003087",
    bg: "from-blue-900/20 to-blue-950/10",
    border: "border-blue-800/30 hover:border-blue-500/60",
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australia",
    tagline: "Empathy & Roleplay",
    desc: "Simulate angry/anxious patients. Test emotional intelligence.",
    readTime: "1 min reading",
    respTime: "6 min response",
    color: "#00843D",
    bg: "from-green-900/20 to-green-950/10",
    border: "border-green-800/30 hover:border-green-500/60",
  },
  {
    id: "asia",
    flag: "🇸🇬",
    name: "Asia (Singapore)",
    tagline: "Academic & Bioethics",
    desc: "Structured academic responses with ethical framework analysis.",
    readTime: "1 min reading",
    respTime: "5 min response",
    color: "#EF3340",
    bg: "from-rose-900/20 to-rose-950/10",
    border: "border-rose-800/30 hover:border-rose-500/60",
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleStart() {
    if (!name.trim() || !email.trim() || !selectedMode) {
      setError("Please fill in all fields and select a mode.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(`${API}/api/interview/start`, {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        mode: selectedMode,
      });
      const { sessionId, userId, questions, modeConfig } = res.data;
      // Store in sessionStorage for the interview page
      sessionStorage.setItem(
        "eduquest_session",
        JSON.stringify({ sessionId, userId, questions, modeConfig, mode: selectedMode, userName: name })
      );
      router.push("/interview");
    } catch (err: any) {
      setError(err?.response?.data?.error || "Failed to start session. Is the backend running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-obsidian relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 text-brand-gold-light text-sm font-body mb-6">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse-slow" />
            AI-Powered MMI Simulation Platform
          </div>
          <h1 className="font-display text-6xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">EduQuest</span>{" "}
            <span className="text-gold-gradient">AI</span>
          </h1>
          <p className="text-xl text-gray-400 font-body max-w-xl mx-auto leading-relaxed">
            The most realistic Multiple Mini Interview simulator for global medical school admissions.
          </p>
        </div>

        {/* Mode Selection */}
        <div className="mb-10">
          <h2 className="font-display text-2xl text-white mb-6 text-center">
            Choose Your <span className="text-gold-gradient">Interview Mode</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`relative group text-left p-5 rounded-2xl border bg-gradient-to-br ${mode.bg} ${mode.border} transition-all duration-300 ${
                  selectedMode === mode.id
                    ? "ring-2 ring-brand-gold scale-[1.02] shadow-lg shadow-brand-gold/10"
                    : "hover:scale-[1.01]"
                }`}
              >
                {selectedMode === mode.id && (
                  <div className="absolute top-3 right-3 w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-obsidian" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
                <div className="text-3xl mb-3">{mode.flag}</div>
                <div className="font-display text-base font-semibold text-white mb-1">{mode.name}</div>
                <div className="text-brand-gold-light text-xs font-body mb-2">{mode.tagline}</div>
                <p className="text-gray-400 text-xs leading-relaxed mb-3">{mode.desc}</p>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500">⏱ {mode.readTime}</span>
                  <span className="text-xs text-gray-500">🎤 {mode.respTime}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
          <h3 className="font-display text-xl text-white mb-6">
            Enter Your Details
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5 font-body">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dr. Jane Smith"
                className="w-full bg-obsidian border border-slate-light rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10 transition-all font-body"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1.5 font-body">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@university.edu"
                className="w-full bg-obsidian border border-slate-light rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-gold/50 focus:ring-2 focus:ring-brand-gold/10 transition-all font-body"
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-danger-red/10 border border-danger-red/30 rounded-xl px-4 py-3">
                <span className="text-danger-red text-sm">⚠</span>
                <p className="text-danger-red text-sm font-body">{error}</p>
              </div>
            )}

            {!selectedMode && (
              <p className="text-warn-amber text-sm font-body">
                ↑ Please select an interview mode above
              </p>
            )}

            <button
              onClick={handleStart}
              disabled={loading || !selectedMode}
              className={`w-full py-4 rounded-xl font-body font-semibold text-base transition-all duration-300 ${
                loading || !selectedMode
                  ? "bg-slate-light text-gray-500 cursor-not-allowed"
                  : "bg-brand-gold hover:bg-brand-gold-light text-obsidian shadow-lg hover:shadow-brand-gold/25 hover:scale-[1.01] active:scale-[0.99]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Starting Session...
                </span>
              ) : (
                "Begin Interview →"
              )}
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { value: "4", label: "Interview Modes" },
            { value: "AI", label: "Powered Evaluation" },
            { value: "Real-time", label: "Feedback & Scoring" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl text-brand-gold font-bold">{stat.value}</div>
              <div className="text-gray-500 text-xs font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
