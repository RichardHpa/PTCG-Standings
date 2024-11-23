const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[700],
          hover: colors.blue[800],
          dark: colors.blue[600],
          hoverDark: colors.blue[700],
          hoverLight: colors.blue[100],
        },
        secondary: {
          DEFAULT: colors.orange[700],
          hover: colors.orange[800],
          dark: colors.orange[600],
          hoverDark: colors.orange[700],
          hoverLight: colors.orange[100],
        },
      },
    },
  },
  plugins: [forms],
};
