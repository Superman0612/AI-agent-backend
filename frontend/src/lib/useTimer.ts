"use client";
// src/lib/useTimer.ts — Countdown Timer Hook
import { useState, useEffect, useRef, useCallback } from "react";

interface TimerOptions {
  duration: number; // seconds
  warningAt?: number; // seconds remaining to trigger warning
  onExpire?: () => void;
  onWarning?: () => void;
}

export function useTimer({ duration, warningAt = 60, onExpire, onWarning }: TimerOptions) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);
  const [expired, setExpired] = useState(false);
  const [warned, setWarned] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onExpireRef = useRef(onExpire);
  const onWarningRef = useRef(onWarning);

  // Keep refs current so callbacks don't go stale
  useEffect(() => { onExpireRef.current = onExpire; }, [onExpire]);
  useEffect(() => { onWarningRef.current = onWarning; }, [onWarning]);

  const clear = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const start = useCallback(() => {
    setRunning(true);
    setExpired(false);
    setWarned(false);
  }, []);

  const pause = useCallback(() => setRunning(false), []);

  const reset = useCallback((newDuration?: number) => {
    clear();
    setRunning(false);
    setExpired(false);
    setWarned(false);
    setTimeLeft(newDuration ?? duration);
  }, [duration]);

  useEffect(() => {
    if (!running) { clear(); return; }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setExpired(true);
          setRunning(false);
          onExpireRef.current?.();
          return 0;
        }
        const next = prev - 1;
        if (next <= warningAt && !warned) {
          setWarned(true);
          onWarningRef.current?.();
        }
        return next;
      });
    }, 1000);

    return clear;
  }, [running, warningAt, warned]);

  const format = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const percent = Math.round((timeLeft / duration) * 100);
  const isWarning = timeLeft <= warningAt && timeLeft > 0;

  return { timeLeft, running, expired, warned, isWarning, percent, format, start, pause, reset };
}
