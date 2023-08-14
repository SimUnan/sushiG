/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor : 'var(--primary-color)',
        secondaryColor : 'var(--secondary-color)',
        black_200: 'var(--black-200)',
        black_300: 'var(--black-300)',
        black_400: 'var(--black-400)',
        black_500: 'var(--black-500)',
        gray_100: 'var(--gray-100)',
        whiteColor: 'var(--color-white)',
        creamSonColor: 'var(--color-creamson)'
    
      },
      fontFamily: {
        playFair: ["Playfair Display", 'serif'],
        plusJakarta: ["Plus Jakarta Sans", 'sans-serif']
      },
    },
  },
  plugins: [],
}