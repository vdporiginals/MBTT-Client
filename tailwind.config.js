const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts,css,scss,sass,less,styl}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      lime: {
        darkest: "#71A559",
        dark: "#9DB86C",
      },
      yellow: {
        darkest: "#FFB26B",
        dark: "#D6A324",
      },
      white: {
        DEFAULT: '#fff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
