import React, { useState } from "react";
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

  if (useImageOnly || !imgError) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.25 }}
        className={`inline-flex items-center select-none cursor-pointer ${className}`}
      >
        <img
          src="/logo.png"
          alt="Cretivra Logo - Engineering Intelligence"
          style={{ width: current.imageWidth, height: "auto", maxHeight: current.height }}
          onError={() => setImgError(true)}
          className="object-contain drop-shadow-sm"
        />
      </motion.div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      <span className={`font-heading font-extrabold ${current.textClass} text-slate-900`}>
        CRETIVRA
      </span>
    </div>
  );
}
