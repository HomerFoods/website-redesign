/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      smf: '0.1rem',
      xs: '0.75rem',
      sm: '0.88rem',
      base: '1rem',
      lg: '1.2rem',
      xl: '1.4rem',
      '2xl': '3rem',
      '3xl': '0.1rem',
      '4xl': '0.1rem',
    },
    extend: {
      fontFamily: {
        gilroymedium: ['GILROYMEDIUM', 'sans-serif'],
        gilroysemibold: ['GILROYSEMIBOLD', 'sans-serif'],
        gilroybold: ['GILROYBOLD', 'sans-serif'],
        gilroylight: ['GILROYLIGHT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
