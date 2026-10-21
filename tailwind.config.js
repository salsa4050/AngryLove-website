/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: { 950: "#07100c", 900: "#0b1712", 800: "#10211a", 700: "#173025" },
        emerald: { 450: "#2fd08a" },
        gold: { 400: "#f2c14e", 500: "#e0a82e" },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(52,211,153,.25), 0 20px 60px -20px rgba(16,185,129,.45)",
      },
    },
  },
  plugins: [],
};
