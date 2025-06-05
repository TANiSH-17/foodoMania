/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "WS": ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

