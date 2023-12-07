/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '130': '30rem',
        '150': '50rem',
        '180': '80rem',
      }
    },
  },
  plugins: [],
}

