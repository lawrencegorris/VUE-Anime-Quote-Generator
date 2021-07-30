const { urlencoded } = require("express");

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: 'Tourney, cursive'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
