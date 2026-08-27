"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CretivraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showWordmark?: boolean;
  animateOnLoad?: boolean;
  lightMode?: boolean;
  useImageOnly?: boolean;
}

export default function CretivraLogo({
  className = "",
  size = "md",
  showWordmark = true,
  animateOnLoad = true,
  lightMode = true,
  useImageOnly = false,
}: CretivraLogoProps) {
  const [imgError, setImgError] = useState(false);

  const sizeDimensions = {
    sm: { height: 28, imageWidth: 110, symbolWidth: 38, textClass: "text-lg tracking-wider" },
    md: { height: 36, imageWidth: 140, symbolWidth: 54, textClass: "text-xl tracking-widest" },
    lg: { height: 50, imageWidth: 190, symbolWidth: 80, textClass: "text-3xl tracking-widest" },
    xl: { height: 85, imageWidth: 320, symbolWidth: 140, textClass: "text-5xl tracking-[0.25em]" },
  };

  const current = sizeDimensions[size];

  // If using uploaded image asset directly
  if (useImageOnly || !imgError) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.25 }}
        className={`inline-flex items-center select-none cursor-pointer ${className}`}
      >
        <Image
          src="/logo.png"
          alt="Cretivra Logo - Engineering Intelligence"
          width={current.imageWidth}
          height={current.height}
          priority
          onError={() => setImgError(true)}
          className="object-contain drop-shadow-sm h-auto"
        />
      </motion.div>
    );
  }

  // Fallback Vector Animated SVG Component for Light Theme
  const nodes = [
    { cx: 35, cy: 15, delay: 0.1 },
    { cx: 70, cy: 15, delay: 0.2 },
    { cx: 105, cy: 15, delay: 0.3 },
    { cx: 165, cy: 15, delay: 0.4 },
    { cx: 200, cy: 15, delay: 0.5 },
    { cx: 235, cy: 15, delay: 0.6 },
    { cx: 25, cy: 50, delay: 0.2 },
    { cx: 245, cy: 50, delay: 0.7 },
    { cx: 35, cy: 85, delay: 0.3 },
    { cx: 70, cy: 85, delay: 0.4 },
    { cx: 105, cy: 85, delay: 0.5 },
    { cx: 135, cy: 50, delay: 0.45 },
    { cx: 165, cy: 85, delay: 0.6 },
    { cx: 200, cy: 85, delay: 0.7 },
    { cx: 235, cy: 85, delay: 0.8 },
  ];

  const meshLines = [
    "M 35 15 L 70 15 L 105 15 L 135 50 L 165 15 L 200 15 L 235 15 C 265 15, 265 85, 235 85 L 200 85 L 165 85 L 135 50 L 105 85 L 70 85 L 35 85 C 5 85, 5 15, 35 15 Z",
    "M 35 15 L 25 50 L 35 85 M 70 15 L 25 50 L 70 85",
    "M 70 15 L 105 85 M 105 15 L 70 85 M 105 15 L 135 50 L 105 85",
    "M 165 15 L 135 50 L 165 85 M 165 15 L 200 85 M 200 15 L 165 85",
    "M 200 15 L 245 50 L 200 85 M 235 15 L 245 50 L 235 85",
  ];

  const innerInfinityPath =
    "M 135 50 C 110 25, 60 25, 60 50 C 60 75, 110 75, 135 50 C 160 25, 210 25, 210 50 C 210 75, 160 75, 135 50 Z";

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative flex items-center">
        <svg
          width={current.symbolWidth}
          height={current.height}
          viewBox="0 0 270 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="cretivraLightGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <linearGradient id="cretivraInnerLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {meshLines.map((pathStr, i) => (
            <motion.path
              key={`line-${i}`}
              d={pathStr}
              stroke="url(#cretivraLightGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
              initial={animateOnLoad ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 0.9 }}
              animate={{ pathLength: 1, opacity: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.1 }}
            />
          ))}

          <motion.path
            d={innerInfinityPath}
            stroke="url(#cretivraInnerLightGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            initial={animateOnLoad ? { pathLength: 0 } : { pathLength: 1 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
          />

          {nodes.map((node, i) => (
            <g key={`node-${i}`}>
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="4"
                fill="#06B6D4"
                initial={animateOnLoad ? { scale: 0 } : { scale: 1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: animateOnLoad ? node.delay + 0.5 : 0 }}
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {showWordmark && (
        <span className={`font-heading font-extrabold ${current.textClass} text-slate-900`}>
          CRETIVRA
        </span>
      )}
    </div>
  );
}
