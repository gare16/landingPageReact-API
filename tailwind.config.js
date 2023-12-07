/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F7C873",
        secondayColor: "#FAEBCD",
        background: "#1A1A1A",
      },
    },
  },
  plugins: [],
});
