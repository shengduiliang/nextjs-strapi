"use client";

import { useCallback, useRef, useState } from "react";

export function useMegaMenuHover(delayMs = 120) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const show = useCallback(() => {
    clearTimer();
    setOpen(true);
  }, [clearTimer]);

  const hide = useCallback(() => {
    clearTimer();
    timeoutRef.current = setTimeout(() => setOpen(false), delayMs);
  }, [clearTimer, delayMs]);

  const hideImmediate = useCallback(() => {
    clearTimer();
    setOpen(false);
  }, [clearTimer]);

  return { open, show, hide, hideImmediate };
}
