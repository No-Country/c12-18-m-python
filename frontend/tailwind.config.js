/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'pink': '#f48fb1',
      'purple50': '#422A3C',
      'light-pink50': '#ff49db',
      'dark50': '#141414',
      'green50': '#13ce66',
      'yellow50': '#F7E5C1',
      'gray-dark50': '#555555',      
    },
    fontFamily: {
      inder:['Inder', 'sans-serif'],
      manrope:['Manrope', 'sans-serif'],
      playfair:['Playfair Display', 'serif'], 
      poppins:['Poppins', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
});
