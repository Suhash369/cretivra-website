"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCountUp({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Easing out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * end);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="font-heading font-bold">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
