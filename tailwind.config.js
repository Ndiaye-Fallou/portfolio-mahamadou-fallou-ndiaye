/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#E8E4DD",
        signal: "#2563EB",
        offwhite: "#F5F3EE",
        noir: "#111111",
        surface: "#FFFFFF",
        cardDark: "#16161a",
        cardDarkSecondary: "#1f1f24",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      }
    },
  },
  plugins: [],
}

