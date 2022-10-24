/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#A8CDFF",
        pink: "#F924A4",
        lyspink: "#FFD6F4",
        green: "#ECFF77",
        brun: "#370D2B",
        bg: "#370D2B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
