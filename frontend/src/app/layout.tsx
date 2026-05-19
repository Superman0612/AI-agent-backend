// src/app/layout.tsx — Root Layout
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduQuest AI — MMI Interview Engine",
  description: "Simulate real Multiple Mini Interviews for global medical school admissions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-obsidian text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
