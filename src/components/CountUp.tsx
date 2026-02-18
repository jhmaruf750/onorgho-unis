"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  duration = 800,
  format = (v: number) => String(v),
}: {
  to: number;
  duration?: number;
  format?: (v: number) => string;
}) {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const from = 0;

  useEffect(() => {
    let raf = 0;
    function step(timestamp: number) {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const current = Math.floor(from + (to - from) * progress);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <span>{format(value)}</span>;
}
