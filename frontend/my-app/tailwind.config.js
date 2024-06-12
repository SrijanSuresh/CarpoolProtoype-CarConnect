/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-black': 'linear-gradient(to bottom, #00ff00, #000000)',
      },
    },
  },
  plugins: [],
}
