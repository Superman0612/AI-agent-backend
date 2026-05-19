"use client";
// src/components/media/PermissionPrompt.tsx — Initial Permission Request Modal
interface PermissionPromptProps {
  onAllow: () => void;
  onSkip: () => void;
  loading: boolean;
  error: string;
}

export default function PermissionPrompt({ onAllow, onSkip, loading, error }: PermissionPromptProps) {
  return (
    <div className="fixed inset-0 bg-obsidian/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="glass rounded-3xl p-8 max-w-md w-full text-center animate-fade-up">
        <div className="w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
          </svg>
        </div>

        <h2 className="font-display text-2xl text-white mb-2">Enable Interview Mode</h2>
        <p className="text-gray-400 font-body text-sm mb-6 leading-relaxed">
          For the most realistic experience, EduQuest uses your camera and microphone.
          Your video is never recorded or sent anywhere.
        </p>

        <div className="space-y-3 mb-6 text-left">
          {[
            { icon: "📹", label: "Camera", desc: "Live self-view for interview realism" },
            { icon: "🎤", label: "Microphone", desc: "Mic level indicator only — no recording" },
            { icon: "🖥️", label: "Screen Share", desc: "Optional — share your screen if required" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-slate-light/50 rounded-xl px-4 py-3">
              <span className="text-lg">{item.icon}</span>
              <div>
                <p className="text-white text-sm font-body font-medium">{item.label}</p>
                <p className="text-gray-500 text-xs font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-danger-red/10 border border-danger-red/30 rounded-xl px-4 py-3 mb-4">
            <p className="text-danger-red text-sm font-body">{error}</p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onSkip}
            className="flex-1 py-3 rounded-xl border border-slate-light text-gray-400 hover:text-white hover:border-gray-500 font-body text-sm transition-all"
          >
            Skip for now
          </button>
          <button
            onClick={onAllow}
            disabled={loading}
            className="flex-1 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-obsidian font-body font-semibold text-sm transition-all disabled:opacity-50"
          >
            {loading ? "Requesting…" : "Allow Access"}
          </button>
        </div>
      </div>
    </div>
  );
}
