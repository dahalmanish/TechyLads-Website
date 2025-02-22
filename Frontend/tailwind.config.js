/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo","serif"]
      },
    },
  },
  plugins: [],
}

