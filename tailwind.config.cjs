/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        paper: "#f3ede2",
        ink: "#1f1c1a",
        muted: "#6c6256",
        accent: "#3954ff",
        "chip-border": "rgba(93, 74, 46, 0.23)",
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Iowan Old Style", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "SFMono-Regular", "Consolas", "monospace"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        paper: "0 22px 50px rgba(60, 47, 20, 0.15)",
        tape: "0 10px 14px rgba(0, 0, 0, 0.08)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
