/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#01DEBD',
          light: '#33E5CB',
          dark: '#00B698',
        },
        gray: {
          footer: '#545454'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
} 