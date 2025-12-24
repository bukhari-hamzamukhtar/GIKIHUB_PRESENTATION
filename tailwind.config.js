/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",  // <--- This lines tells it to look in the ROOT folder
    "./src/**/*.{js,ts,jsx,tsx}", // Keep this just in case you make a src folder later
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}