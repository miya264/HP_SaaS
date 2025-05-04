/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fc',
          100: '#e0e9f8',
          200: '#c2d4f2',
          300: '#9ab7e8',
          400: '#6c95dc',
          500: '#4a74d1',
          600: '#3a5dc3',
          700: '#334db2',
          800: '#2d4291',
          900: '#263a73',
          950: '#0f1a3c', // Navy blue
        },
        secondary: {
          50: '#edfcff',
          100: '#d6f7ff',
          200: '#b5f0ff',
          300: '#83e7ff',
          400: '#48d4ff',
          500: '#1ab8ff',
          600: '#0099ff',
          700: '#0181df',
          800: '#0669b4',
          900: '#0a5b92',
          950: '#073761',
        },
        accent: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.7s ease-out',
      },
    },
  },
  plugins: [],
};