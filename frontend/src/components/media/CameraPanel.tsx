"use client";
// src/components/media/CameraPanel.tsx — Live Camera & Media Controls
import { useEffect } from "react";
import type { MediaState } from "@/lib/useMedia";

interface CameraPanelProps {
  media: MediaState;
  compact?: boolean;
}

export default function CameraPanel({ media, compact = false }: CameraPanelProps) {
  const { cameraOn, micOn, screenSharing, videoRef, permissionError, toggleCamera, toggleMic, startScreenShare, stopScreenShare, micLevel } = media;

  return (
    <div className={`flex flex-col gap-3 ${compact ? "w-48" : "w-56"}`}>
      {/* Camera Feed */}
      <div className="relative rounded-xl overflow-hidden bg-charcoal border border-slate-light aspect-[4/3]">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-300 ${cameraOn ? "opacity-100" : "opacity-0"}`}
        />
        {!cameraOn && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
            <span className="text-xs text-gray-600">Camera Off</span>
          </div>
        )}
        {/* Live indicator */}
        {cameraOn && (
          <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-danger-red/80 rounded-full px-2 py-0.5">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-white text-[10px] font-mono font-semibold">LIVE</span>
          </div>
        )}
      </div>

      {/* Mic Level Bar */}
      <div className="flex items-center gap-2">
        <svg className={`w-4 h-4 flex-shrink-0 ${micOn ? "text-success-green" : "text-gray-600"}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10a1 1 0 00-2 0 5 5 0 01-10 0 1 1 0 00-2 0 7 7 0 006 6.93V19H9a1 1 0 000 2h6a1 1 0 000-2h-2v-2.07A7 7 0 0019 10z" />
        </svg>
        <div className="flex-1 h-1.5 bg-slate-light rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-75 ${micOn ? "bg-success-green" : "bg-gray-600"}`}
            style={{ width: `${micOn ? micLevel : 0}%` }}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={toggleCamera}
          title={cameraOn ? "Turn off camera" : "Turn on camera"}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-body font-medium transition-all ${
            cameraOn
              ? "bg-slate-light text-white hover:bg-slate/80"
              : "bg-danger-red/20 text-danger-red border border-danger-red/30 hover:bg-danger-red/30"
          }`}
        >
          {cameraOn ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>
              Camera
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              Off
            </>
          )}
        </button>

        <button
          onClick={toggleMic}
          title={micOn ? "Mute mic" : "Unmute mic"}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-body font-medium transition-all ${
            micOn
              ? "bg-slate-light text-white hover:bg-slate/80"
              : "bg-danger-red/20 text-danger-red border border-danger-red/30 hover:bg-danger-red/30"
          }`}
        >
          {micOn ? (
            <>
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /></svg>
              Mic
            </>
          ) : (
            "Muted"
          )}
        </button>
      </div>

      {/* Screen Share */}
      <button
        onClick={screenSharing ? stopScreenShare : startScreenShare}
        className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-body font-medium transition-all ${
          screenSharing
            ? "bg-brand-teal/20 text-brand-teal border border-brand-teal/30"
            : "bg-slate-light text-gray-400 hover:text-white"
        }`}
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        {screenSharing ? "Sharing Screen" : "Share Screen"}
      </button>

      {permissionError && (
        <p className="text-danger-red text-[11px] font-body leading-snug">{permissionError}</p>
      )}
    </div>
  );
}
