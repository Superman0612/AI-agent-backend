"use client";
// src/components/interview/InterruptionBanner.tsx — AI Interruption Overlay
import { useEffect, useState } from "react";

interface InterruptionBannerProps {
  text: string;
  mode: string;
  onDismiss: () => void;
}

const modeStyles: Record<string, { bg: string; border: string; icon: string; label: string }> = {
  canada: {
    bg: "from-red-900/40 to-red-950/30",
    border: "border-red-500/40",
    icon: "🇨🇦",
    label: "Interviewer Follow-up",
  },
  uk: {
    bg: "from-blue-900/40 to-blue-950/30",
    border: "border-blue-500/40",
    icon: "🇬🇧",
    label: "Interviewer Prompt",
  },
  australia: {
    bg: "from-green-900/40 to-green-950/30",
    border: "border-green-500/40",
    icon: "🇦🇺",
    label: "Patient Response",
  },
  asia: {
    bg: "from-rose-900/40 to-rose-950/30",
    border: "border-rose-500/40",
    icon: "🇸🇬",
    label: "Interviewer Note",
  },
};

export default function InterruptionBanner({ text, mode, onDismiss }: InterruptionBannerProps) {
  const [visible, setVisible] = useState(false);
  const style = modeStyles[mode] || modeStyles.canada;

  useEffect(() => {
    // Animate in
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  function handleDismiss() {
    setVisible(false);
    setTimeout(onDismiss, 300);
  }

  return (
    <div
      className={`transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
    >
      <div className={`relative bg-gradient-to-r ${style.bg} border ${style.border} rounded-2xl p-4 backdrop-blur-sm`}>
        {/* Pulsing indicator */}
        <div className="absolute -top-1.5 -left-1.5 w-3 h-3">
          <div className="animate-ping absolute w-3 h-3 rounded-full bg-warn-amber opacity-75" />
          <div className="relative w-3 h-3 rounded-full bg-warn-amber" />
        </div>

        <div className="flex items-start gap-3 pr-8">
          <span className="text-xl flex-shrink-0 mt-0.5">{style.icon}</span>
          <div>
            <p className="text-warn-amber text-xs font-body font-semibold mb-1">{style.label}</p>
            <p className="text-white font-body text-sm leading-relaxed">{text}</p>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all text-xs"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
