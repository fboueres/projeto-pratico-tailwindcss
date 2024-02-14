/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        purple: "#5840BA",
        lightpurple: "#382194",
        grey: "#8C8C8C",
        lightgrey: "#D9D9D9",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        iceland: ["Iceland", "sans-serif"],
      },
    },
  },
  plugins: [],
};
