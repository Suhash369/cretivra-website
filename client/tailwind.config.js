/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
