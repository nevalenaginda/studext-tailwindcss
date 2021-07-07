// tailwind.config.js
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        black: {
          "5": "#F5F5F5",
          "60": "#858585",
          "80": "#5C5C5C",
          "100": "#333333",
        },
        blue: {
          "100": "#008FFF;"
        }
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [plugin(function ({
    addUtilities
  }) {
    const newUtilities = {
      '.shadow-content': {
        "box-shadow": "0px 4px 16px rgba(0, 0, 0, 0.1)",
      },
      '.nav:hover svg, .nav:hover span': {
        "color": "#008FFF",
      },
      '.border-story': {
        'width': "60px",
        "height": "60px",
        "border-radius": "50%",
        'background-image': 'linear-gradient(to right, #00c6fb, #005bea)'
      }
    }

    addUtilities(newUtilities, ['responsive', 'hover'])
  })],
}