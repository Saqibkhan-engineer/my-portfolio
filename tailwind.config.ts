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
        bg: "#0a0a0f",
        surface: "#111118",
        "surface-2": "#16161f",
        "surface-3": "#1e1e2e",
        accent: "#7c3aed",
        "accent-light": "#a78bfa",
        "accent-cyan": "#06b6d4",
        "accent-cyan-light": "#67e8f9",
        "text-primary": "#f1f5f9",
        "text-muted": "#94a3b8",
        "text-dim": "#64748b",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(124,58,237,0.4)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0a0a0f 0%, #0f0a1e 50%, #0a0a0f 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.04) 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.3)",
        "glow-sm": "0 0 20px rgba(124, 58, 237, 0.2)",
        "glow-cyan": "0 0 40px rgba(6, 182, 212, 0.3)",
        card: "0 4px 32px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 8px 48px rgba(124, 58, 237, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse_slow: "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        typewriter: "typewriter 0.05s steps(1) forwards",
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
