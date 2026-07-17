import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#080b10",
          900: "#0d1117",
          850: "#111820",
          800: "#161b22",
          750: "#1a2332",
          700: "#21293a",
          600: "#0e7490",
          500: "#06b6d4",
          accent: "#22d3ee",
          light: "#67e8f9",
          glow: "rgba(34,211,238,0.15)",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(34,211,238,0.15)",
        "glow-lg": "0 0 40px rgba(34,211,238,0.2)",
        "glow-xl": "0 0 60px rgba(34,211,238,0.25)",
        card: "0 4px 24px rgba(0,0,0,0.3)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.4)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "slide-up": "slideUp 0.6s ease-out both",
        "slide-down": "slideDown 0.3s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-10px)", maxHeight: "0" },
          to: { opacity: "1", transform: "translateY(0)", maxHeight: "400px" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
