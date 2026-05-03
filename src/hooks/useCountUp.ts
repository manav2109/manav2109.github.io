import { useEffect, useRef, useState } from 'react';

interface Options {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}

/**
 * Animates a number from 0 → target with eased timing.
 * Mirrors the `animateCount(el)` helper from the original static page.
 */
export function useCountUp({ target, suffix = '', duration = 1400, start }: Options): string {
  const [text, setText] = useState<string>(`0${suffix}`);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const t0 = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target * eased;
      const isFloat = !Number.isInteger(target);
      const display = isFloat ? v.toFixed(1) : Math.floor(v).toString();
      setText(display + suffix);
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, suffix, duration]);

  return text;
}
