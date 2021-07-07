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
        },
        tosca: {
          "100": "#53BAC1"
        },
        red: {
          "10": "#FBE6EB;",
          "100": "#DB0038"
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
      },
      '.leaderboard': {
        'background-image': 'url("/confetty.png");',
        'background-repeat': 'repeat-x;'
      },
      '.rank1': {
        'background': 'linear-gradient(89.9deg, #FFCE00 42.44%, #FFEEA9 107.27%);',
      },
      '.rank2': {
        'background': 'linear-gradient(89.9deg, #D1D1C2 42.44%, #EFEFEF 107.27%);'
      },
      '.rank3': {
        'background': 'linear-gradient(89.9deg, #EBA468 42.44%, #FDDDC2 107.27%);'
      },
      '.rank4': {
        'background': '#F9F9F9;'
      },
      '.ranking::-webkit-scrollbar': {
        'width': '0;',
        'height': '0;',
        'background': 'transparent;'
      }
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  })],
}