/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E51BF',
          light: '#6164C9',
          dark: '#3E40A6'
        },
        secondary: {
          DEFAULT: '#FFE9CE',
          light: '#FFF4E6',
          dark: '#FFD9B3'
        },
        accent: {
          DEFAULT: '#FF92A4',
          light: '#FFA8B7',
          dark: '#FF7C91'
        },
        dark: {
          DEFAULT: '#24252A',
          light: '#2F3036',
          dark: '#1A1B1F'
        }
      }
    },
  },
  plugins: [],
};