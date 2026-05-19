"use client";
// src/components/interview/ProgressStepper.tsx
interface ProgressStepperProps {
  total: number;
  current: number;
  answered: boolean[];
}

export default function ProgressStepper({ total, current, answered }: ProgressStepperProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-1">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-brand-gold"
                : answered[i]
                ? "w-4 bg-success-green/70"
                : "w-4 bg-slate-light"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
