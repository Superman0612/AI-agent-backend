"use client";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Question {
  id: string;
  text: string;
  category: string;
  persona?: string;
}

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  mode: string;
  phase: "reading" | "responding";
  onSaveAnswer?: (questionId: string, answer: string) => void;
}

// ─── Mode accent colours ───────────────────────────────────────────────────────
const modeAccents: Record<string, string> = {
  canada: "text-red-400 border-red-500/20 bg-red-900/10",
  uk: "text-blue-400 border-blue-500/20 bg-blue-900/10",
  australia: "text-green-400 border-green-500/20 bg-green-900/10",
  asia: "text-rose-400 border-rose-500/20 bg-rose-900/10",
};

// ─── TTS helper ───────────────────────────────────────────────────────────────
const speakText = (text: string) => {
  window.speechSynthesis.cancel(); // stop anything already playing
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.95;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
};

// ─── VoiceInput (inline, no separate file needed) ─────────────────────────────
function VoiceInput({ onTranscript }: { onTranscript: (t: string) => void }) {
  const [listening, setListening] = useState(false);
  const [liveText, setLiveText] = useState("");
  // const recognitionRef = useRef<SpeechRecognition | null>(null);
  const recognitionRef = useRef<any>(null);

  const startListening = () => {
    const SR =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert("Your browser does not support speech recognition.");
      return;
    }
    
    // const recognition: SpeechRecognition = new SR();
    const recognition = new SR();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let final = "";
      let interim = "";
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          final += result[0].transcript;
        } else {
          interim += result[0].transcript;
        }
      }
      setLiveText(final + interim);
      onTranscript(final + interim);
    };

    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);

    recognition.start();
    recognitionRef.current = recognition;
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  return (
    <div className="space-y-3">
      {/* Live transcript preview */}
      {liveText && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 min-h-[60px]">
          <p className="text-gray-300 text-sm font-body leading-relaxed">
            {liveText}
            {listening && (
              <span className="inline-block w-0.5 h-4 bg-brand-teal ml-0.5 animate-pulse align-middle" />
            )}
          </p>
        </div>
      )}

      {/* Mic button */}
      <button
        onClick={listening ? stopListening : startListening}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-200 ${
          listening
            ? "bg-red-500/20 text-red-400 border border-red-500/40 hover:bg-red-500/30"
            : "bg-brand-teal/20 text-brand-teal border border-brand-teal/40 hover:bg-brand-teal/30"
        }`}
      >
        {listening ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            Stop Recording
          </>
        ) : (
          <>
            🎤 Start Speaking
          </>
        )}
      </button>
    </div>
  );
}

// ─── Main QuestionCard ─────────────────────────────────────────────────────────
export default function QuestionCard({
  question,
  index,
  total,
  mode,
  phase,
  onSaveAnswer,
}: QuestionCardProps) {
  const accentClass = modeAccents[mode] || modeAccents.canada;

  // Answer state
  const [answer, setAnswer] = useState("");
  const [saved, setSaved] = useState(false);
  const [inputMode, setInputMode] = useState<"voice" | "text">("voice");

  // Speak the question automatically when the card mounts or question changes
  useEffect(() => {
    speakText(question.text);
    // cleanup: cancel speech if question changes before it finishes
    return () => window.speechSynthesis.cancel();
  }, [question.id]);

  // Reset answer when question changes
  useEffect(() => {
    setAnswer("");
    setSaved(false);
  }, [question.id]);

  const handleSave = () => {
    if (!answer.trim()) return;
    onSaveAnswer?.(question.id, answer.trim());
    setSaved(true);
  };

  const handleReplayQuestion = () => speakText(question.text);

  return (
    <div className="glass rounded-2xl p-6 animate-fade-up space-y-5">
      {/* ── Header ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-body font-semibold px-2.5 py-1 rounded-full border ${accentClass}`}
          >
            {question.category}
          </span>
          {question.persona && (
            <span className="text-xs font-body text-warn-amber bg-warn-amber/10 border border-warn-amber/20 px-2.5 py-1 rounded-full">
              Roleplay
            </span>
          )}
        </div>
        <span className="text-gray-500 text-xs font-body font-mono">
          Q{index + 1} of {total}
        </span>
      </div>

      {/* ── Phase badge ── */}
      <div>
        {phase === "reading" ? (
          <div className="inline-flex items-center gap-1.5 text-brand-teal text-xs font-body">
            <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse" />
            Read carefully — you cannot go back
          </div>
        ) : (
          <div className="inline-flex items-center gap-1.5 text-brand-gold text-xs font-body">
            <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
            Speak or type your answer below
          </div>
        )}
      </div>

      {/* ── Question text ── */}
      <div className="border-l-2 border-brand-gold/40 pl-4">
        <p className="font-display text-white text-lg leading-relaxed">
          {question.text}
        </p>
      </div>

      {/* ── Replay TTS button ── */}
      <button
        onClick={handleReplayQuestion}
        className="inline-flex items-center gap-1.5 text-xs font-body text-gray-400 hover:text-white transition-colors"
      >
        🔊 <span>Replay question</span>
      </button>

      {/* ── Roleplay context ── */}
      {question.persona && (
        <div className="bg-warn-amber/5 border border-warn-amber/20 rounded-xl p-3">
          <p className="text-warn-amber text-xs font-body">
            <span className="font-semibold">Scenario context:</span>{" "}
            You are in a roleplay situation. Respond as if speaking directly to
            the person.
          </p>
        </div>
      )}

      {/* ── Answer section (only in responding phase) ── */}
      {phase === "responding" && (
        <div className="space-y-4 pt-2 border-t border-white/10">
          {/* Input mode toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-body">Answer via:</span>
            <div className="flex rounded-lg overflow-hidden border border-white/10">
              <button
                onClick={() => setInputMode("voice")}
                className={`px-3 py-1 text-xs font-body transition-colors ${
                  inputMode === "voice"
                    ? "bg-brand-teal/30 text-brand-teal"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                🎤 Voice
              </button>
              {/* <button
                onClick={() => setInputMode("text")}
                className={`px-3 py-1 text-xs font-body transition-colors ${
                  inputMode === "text"
                    ? "bg-brand-gold/30 text-brand-gold"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                ⌨️ Text
              </button> */}
            </div>
          </div>

          {/* Voice input */}
          {inputMode === "voice" && (
            <VoiceInput onTranscript={setAnswer} />
          )}

          {/* Text input */}
          {inputMode === "text" && (
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here…"
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-gray-200 text-sm font-body leading-relaxed resize-none focus:outline-none focus:border-brand-gold/50 placeholder:text-gray-600 transition-colors"
            />
          )}

          {/* Word count */}
          {answer.trim() && (
            <p className="text-gray-600 text-xs font-body font-mono">
              {answer.trim().split(/\s+/).length} words
            </p>
          )}

          {/* Save button */}
          <button
            onClick={handleSave}
            disabled={!answer.trim() || saved}
            className={`w-full py-2.5 rounded-xl font-body font-semibold text-sm transition-all duration-200 ${
              saved
                ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-default"
                : answer.trim()
                ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40 hover:bg-brand-gold/30"
                : "bg-white/5 text-gray-600 border border-white/5 cursor-not-allowed"
            }`}
          >
            {saved ? "✓ Answer Saved" : "Save Answer"}
          </button>
        </div>
      )}
    </div>
  );
}
