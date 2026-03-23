/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          secondary: "var(--color-bg-secondary)",
          card: "var(--color-bg-card)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
        },
        border: "var(--color-border)",
        nav: "var(--color-nav-bg)",
        midnight: "#191970",
        whitesmoke: "#F5F5F5",
        spacegray: "rgb(32, 32, 32)",
      },
      fontFamily: {
        heading: ["RocaTwo", "system-ui", "sans-serif"],
        body: ["Decalotype-Regular", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--color-card-shadow)",
        glow: "0 0 60px -12px var(--color-accent-glow)",
      },
      backgroundImage: {
        "gradient-accent": "var(--color-accent-gradient)",
      },
      transitionDuration: {
        theme: "400ms",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 2px var(--color-accent-glow)" },
          "50%": { boxShadow: "0 0 20px 6px var(--color-accent-glow)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "dot-drift": {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(10px, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "bounce-dot": {
          "0%, 80%, 100%": { transform: "scale(0)", opacity: "0.4" },
          "40%": { transform: "scale(1)", opacity: "1" },
        },
        "fab-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 0 var(--color-accent-glow)" },
          "50%": { boxShadow: "0 0 0 12px transparent" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "dot-drift": "dot-drift 20s ease-in-out infinite",
        "bounce-dot": "bounce-dot 1.4s ease-in-out infinite both",
        "fab-pulse": "fab-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
