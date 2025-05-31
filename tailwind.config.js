/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          light: '#33E5C9',
          DEFAULT: '#01DEBD',
          dark: '#00C5A7'
        }
      }
    },
  },
  plugins: [],
} 