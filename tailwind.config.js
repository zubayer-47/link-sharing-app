/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
      colors: {
        primary: "rgb(var(--color-primary))",
        muted: "rgb(var(--color-muted))"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}