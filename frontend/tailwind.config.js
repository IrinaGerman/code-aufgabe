/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-blue': '#C9EFEE',
        'gray-blue': '#80BDCF',
        'dark-gray-blue': '#598490',
      },
      boxShadow: {
        '3xl': '0 0 5px 4px rgba(128,189,207,0.5)',
      },      
    },
  },
  plugins: [],
};
