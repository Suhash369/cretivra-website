import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FFFFFF",
          bgLight: "#F8FAFC",
          bgIcy: "#F0F4FF",
          navy: "#0B132B",
          dark: "#0F172A",
          blue: "#2563EB",
          cyan: "#06B6D4",
          purple: "#8B5CF6",
          violet: "#7C3AED",
          card: "#FFFFFF",
          cardBorder: "#E2E8F0",
          cardHover: "#CBD5E1",
          text: "#0F172A",
          textMuted: "#475569",
          textSubtle: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)",
        "brand-gradient-hover": "linear-gradient(135deg, #06B6D4 0%, #2563EB 50%, #7C3AED 100%)",
        "hero-glow": "radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(6,182,212,0.05) 50%, transparent 100%)",
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.08)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
