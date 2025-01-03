/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6D7FD1',
          DEFAULT: '#6C8FD1',
          dark: '#6B98D3',
        },
        accent: '#6C77D0',
      },
    },
  },
  plugins: [],
};