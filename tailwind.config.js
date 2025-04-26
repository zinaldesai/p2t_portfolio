/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#191970',
        whitesmoke: '#F5F5F5',
        spacegray: 'rgb(32, 32, 32)',
      }
    },
  },
  plugins: [],
}