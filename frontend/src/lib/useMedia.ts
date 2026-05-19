"use client";
// src/lib/useMedia.ts — Camera, Mic, Screen Share Hook
import { useState, useRef, useCallback, useEffect } from "react";

export interface MediaState {
  cameraOn: boolean;
  micOn: boolean;
  screenSharing: boolean;
  permissionError: string;
  videoRef: React.RefObject<HTMLVideoElement>;
  screenRef: React.RefObject<HTMLVideoElement>;
  startMedia: () => Promise<void>;
  toggleCamera: () => void;
  toggleMic: () => void;
  startScreenShare: () => Promise<void>;
  stopScreenShare: () => void;
  stopAll: () => void;
  micLevel: number;
}

export function useMedia(): MediaState {
  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);
  const [permissionError, setPermissionError] = useState("");
  const [micLevel, setMicLevel] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const screenStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number>(0);

  // Start mic level analyser
  const startMicAnalyser = useCallback((stream: MediaStream) => {
    try {
      const ctx = new AudioContext();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);
      audioContextRef.current = ctx;
      analyserRef.current = analyser;

      const tick = () => {
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);
        const avg = data.reduce((a, b) => a + b, 0) / data.length;
        setMicLevel(Math.min(100, (avg / 128) * 100));
        animFrameRef.current = requestAnimationFrame(tick);
      };
      tick();
    } catch {
      // Analyser not critical
    }
  }, []);

  // Request camera + mic permissions
  const startMedia = useCallback(async () => {
    setPermissionError("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: "user" },
        audio: { echoCancellation: true, noiseSuppression: true },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraOn(true);
      setMicOn(true);
      startMicAnalyser(stream);
    } catch (err: any) {
      const msg =
        err.name === "NotAllowedError"
          ? "Camera/mic access denied. Please allow permissions in your browser."
          : err.name === "NotFoundError"
          ? "No camera or microphone found on this device."
          : "Could not access camera or microphone.";
      setPermissionError(msg);
    }
  }, [startMicAnalyser]);

  // Toggle camera track
  const toggleCamera = useCallback(() => {
    if (!streamRef.current) return;
    streamRef.current.getVideoTracks().forEach((t) => {
      t.enabled = !t.enabled;
    });
    setCameraOn((prev) => !prev);
  }, []);

  // Toggle mic track
  const toggleMic = useCallback(() => {
    if (!streamRef.current) return;
    streamRef.current.getAudioTracks().forEach((t) => {
      t.enabled = !t.enabled;
    });
    setMicOn((prev) => !prev);
  }, []);

  // Screen share
  const startScreenShare = useCallback(async () => {
    try {
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });
      screenStreamRef.current = screenStream;
      if (screenRef.current) {
        screenRef.current.srcObject = screenStream;
      }
      setScreenSharing(true);
      // Auto-stop when user ends share via browser UI
      screenStream.getVideoTracks()[0].onended = () => {
        setScreenSharing(false);
      };
    } catch {
      setPermissionError("Screen share cancelled or denied.");
    }
  }, []);

  const stopScreenShare = useCallback(() => {
    screenStreamRef.current?.getTracks().forEach((t) => t.stop());
    screenStreamRef.current = null;
    setScreenSharing(false);
  }, []);

  const stopAll = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    screenStreamRef.current?.getTracks().forEach((t) => t.stop());
    audioContextRef.current?.close();
    cancelAnimationFrame(animFrameRef.current);
    setCameraOn(false);
    setMicOn(false);
    setScreenSharing(false);
    setMicLevel(0);
  }, []);

  useEffect(() => () => stopAll(), [stopAll]);

  return {
    cameraOn,
    micOn,
    screenSharing,
    permissionError,
    videoRef,
    screenRef,
    startMedia,
    toggleCamera,
    toggleMic,
    startScreenShare,
    stopScreenShare,
    stopAll,
    micLevel,
  };
}
