/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "bg-color": "#FBFEFD",
      "main-color": "#069C54",
      "main-color-alt": "#048654",
      "black-color": "#393939",
      "grey-color": "#707070",
      "grey-color-alt": "#A6A6A6",
    },
    fontFamily: {
      title: ["Cherry Bomb One", "sans-serif"],
      logo: ["Coiny", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
