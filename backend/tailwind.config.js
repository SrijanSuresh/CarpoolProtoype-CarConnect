/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'bungee': ['Bungee Spice', 'cursive'],
        // Add more custom font families if needed
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.font-bungee': {
          fontFamily: 'Bungee Spice, cursive',
        },
        // Define other custom utilities if needed
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
}
