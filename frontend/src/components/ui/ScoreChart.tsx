"use client";
// src/components/ui/ScoreChart.tsx — Recharts Radar + Bar Chart
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";

interface ScoreChartProps {
  scores: { clarity: number; structure: number; empathy: number; reasoning: number };
  mode?: "radar" | "bar";
}

const DIMENSION_COLORS: Record<string, string> = {
  Clarity: "#4ECDC4",
  Structure: "#C9A84C",
  Empathy: "#FF6B9D",
  Reasoning: "#A78BFA",
};

export default function ScoreChart({ scores, mode = "radar" }: ScoreChartProps) {
  const data = [
    { subject: "Clarity", value: scores.clarity, fullMark: 10 },
    { subject: "Structure", value: scores.structure, fullMark: 10 },
    { subject: "Empathy", value: scores.empathy, fullMark: 10 },
    { subject: "Reasoning", value: scores.reasoning, fullMark: 10 },
  ];

  if (mode === "bar") {
    return (
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="subject" tick={{ fill: "#9CA3AF", fontSize: 11, fontFamily: "DM Sans" }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 10]} tick={{ fill: "#9CA3AF", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ background: "#1E1E2E", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", fontFamily: "DM Sans" }}
            labelStyle={{ color: "#E8E8F0" }}
            itemStyle={{ color: "#C9A84C" }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {data.map((entry) => (
              <Cell key={entry.subject} fill={DIMENSION_COLORS[entry.subject] || "#C9A84C"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={240}>
      <RadarChart data={data}>
        <PolarGrid stroke="rgba(255,255,255,0.08)" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: "#9CA3AF", fontSize: 12, fontFamily: "DM Sans" }} />
        <Radar name="Score" dataKey="value" stroke="#C9A84C" fill="#C9A84C" fillOpacity={0.15} strokeWidth={2} dot={{ fill: "#C9A84C", r: 4 }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
