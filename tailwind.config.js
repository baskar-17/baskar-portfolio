/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Pinyon Script"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}