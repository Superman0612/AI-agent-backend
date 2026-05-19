"use client";
// src/components/interview/TimerDisplay.tsx — Visual Countdown Timer
interface TimerDisplayProps {
  timeLeft: number;
  duration: number;
  phase: "reading" | "responding";
  isWarning: boolean;
  format: (s: number) => string;
}

export default function TimerDisplay({ timeLeft, duration, phase, isWarning, format }: TimerDisplayProps) {
  const percent = (timeLeft / duration) * 100;
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (percent / 100) * circumference;

  const phaseColor = phase === "reading" ? "#4ECDC4" : isWarning ? "#FF4757" : "#C9A84C";
  const phaseLabel = phase === "reading" ? "Reading Time" : "Response Time";

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-24 h-24">
        {/* Background ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
          <circle
            cx="44"
            cy="44"
            r={radius}
            fill="none"
            stroke={phaseColor}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${strokeDash} ${circumference}`}
            style={{ transition: "stroke-dasharray 1s linear, stroke 0.3s" }}
          />
        </svg>
        {/* Time text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className={`font-mono text-xl font-bold leading-none ${isWarning ? "timer-warning" : "text-white"}`}
          >
            {format(timeLeft)}
          </span>
        </div>
      </div>
      <div className="text-center">
        <span
          className="text-xs font-body font-medium px-2 py-0.5 rounded-full"
          style={{ background: `${phaseColor}20`, color: phaseColor }}
        >
          {phaseLabel}
        </span>
      </div>
      {isWarning && (
        <p className="text-danger-red text-[11px] font-body text-center animate-pulse">
          ⚠ Time running out
        </p>
      )}
    </div>
  );
}
