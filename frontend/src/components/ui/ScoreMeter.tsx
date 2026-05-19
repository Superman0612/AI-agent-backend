"use client";
// src/components/ui/ScoreMeter.tsx — Animated circular score display
interface ScoreMeterProps {
  score: number; // 0–10
  label?: string;
  size?: "sm" | "lg";
}

function getScoreColor(score: number) {
  if (score >= 8) return "#2ED573";
  if (score >= 6) return "#C9A84C";
  if (score >= 4) return "#FFA502";
  return "#FF4757";
}

export default function ScoreMeter({ score, label, size = "sm" }: ScoreMeterProps) {
  const isLg = size === "lg";
  const r = isLg ? 52 : 32;
  const sw = isLg ? 7 : 5;
  const viewBox = isLg ? 120 : 76;
  const cx = viewBox / 2;
  const circumference = 2 * Math.PI * r;
  const filled = (Math.min(score, 10) / 10) * circumference;
  const color = getScoreColor(score);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: viewBox, height: viewBox }}>
        <svg className="-rotate-90" width={viewBox} height={viewBox} viewBox={`0 0 ${viewBox} ${viewBox}`}>
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={sw} />
          <circle
            cx={cx}
            cy={cx}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={sw}
            strokeLinecap="round"
            strokeDasharray={`${filled} ${circumference}`}
            style={{ transition: "stroke-dasharray 1s ease-out, stroke 0.3s" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-mono font-bold leading-none ${isLg ? "text-3xl" : "text-base"}`} style={{ color }}>
            {score.toFixed(1)}
          </span>
          {isLg && <span className="text-gray-500 text-xs font-body mt-0.5">/ 10</span>}
        </div>
      </div>
      {label && (
        <span className={`font-body text-gray-400 ${isLg ? "text-sm" : "text-xs"} text-center`}>
          {label}
        </span>
      )}
    </div>
  );
}
