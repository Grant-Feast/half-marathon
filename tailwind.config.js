/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*index.html'],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito'],
        Orbitron: ['Orbitron'],
      },
      colors: {
        primary: {
          100: '#2c6eb6',
        },
        secondary: {
          100: '#f9ef32',
        },
        overlay: {
          25: 'rgba(0, 0, 0, 0.25)',
        }
      }
    },
  },
  plugins: [],
}

