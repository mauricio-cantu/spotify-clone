/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1792px',
        '4xl': '2048px'
      },
      fontFamily: {
        'sign': ['Indie Flower']
      },
      keyframes: {
        point: {
          '0%, 100%': { transform: 'translateX(2px)' },
          '50%': { transform: 'translateX(-2px)' },
        }
      },
      animation: {
        point: 'point 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

