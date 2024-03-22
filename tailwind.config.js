/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          800: '#18141c',
          900: '#120f16'
        },
        yellow: {
          400: '#FEDE00',
        }
      },
    },
  },
  plugins: [],
}