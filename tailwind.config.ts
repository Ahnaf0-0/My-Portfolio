import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#020617",
        dark: "#0f172a",
        panel: "#1e293b",
        lift: "#334155",
        silver: "#f1f5f9",
        silver2: "#94a3b8",
        dim: "#64748b",
        white: "#ffffff",
        rule: "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.37)",
        glow: "0 0 60px rgba(255,255,255,0.03)",
      },
      backdropBlur: {
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
