"use client";

import { motion, useReducedMotion } from "framer-motion";

const facets = [
  { points: "627,272 678,363 580,540 441,603", fill: "#ffffff" },
  { points: "563,569 490,700 363,737 423,633", fill: "url(#axis-left)" },
  { points: "700,404 813,603 677,540 651,491", fill: "url(#axis-right)" },
  { points: "692,569 832,633 890,737 765,698", fill: "url(#axis-right)" },
  { points: "613,540 627,513 641,540 641,704 613,704", fill: "#ffffff" },
];

export function AxisMark({
  className,
  animated = false,
}: {
  className?: string;
  animated?: boolean;
}) {
  const reduce = useReducedMotion();
  const play = animated && !reduce;

  return (
    <svg viewBox="355 265 545 480" className={className} role="img" aria-label="AXIS">
      <defs>
        <linearGradient id="axis-left" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#12f0b0" />
          <stop offset="1" stopColor="#1ef25e" />
        </linearGradient>
        <linearGradient id="axis-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6cf53a" />
          <stop offset="1" stopColor="#5ff23a" />
        </linearGradient>
      </defs>
      {facets.map((f, i) => (
        <motion.polygon
          key={i}
          points={f.points}
          fill={f.fill}
          initial={play ? { opacity: 0, y: i % 2 ? 40 : -40 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <AxisMark className="h-7 w-auto" />
      <span className="font-display text-lg font-semibold tracking-[0.18em]">AXIS</span>
    </span>
  );
}
