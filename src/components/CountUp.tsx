"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export function CountUp({
  value,
  durationMs = 900,
  suffix = "",
  className,
}: {
  value: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState(0);

  const formatter = useMemo(() => new Intl.NumberFormat("en-US"), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    let raf = 0;
    const start = performance.now();

    function tick(now: number) {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(value * eased);
      setDisplay(current);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      }
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [started, value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {formatter.format(display)}
      {suffix}
    </span>
  );
}
