/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-poppins)', 'var(--font-inter)', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#FF7A00',
          50:  '#FFF5EB',
          100: '#FFE9D6',
          200: '#FFD1A8',
          300: '#FFB878',
          400: '#FF9E48',
          500: '#FF7A00',
          600: '#E56A00',
          700: '#B85400',
          800: '#8A3F00',
          900: '#5C2A00',
        },
        ink: '#121212',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(0,0,0,0.08)',
        glow: '0 20px 60px -20px rgba(255,122,0,0.45)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
