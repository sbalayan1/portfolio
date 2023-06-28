/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/Components/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'taupeGray': '#84828F',
        // 'dimGray': '#6a687a',
        'paynesGray': '#536271',
        // 'charcoal': '#3e4c5e',
        // 'prussianBlue': '#2c3d55',
        'oxfordBlue': '#0a2239',
        'moonstone': '#53a2be',
        'gunmetal': '#132e32',
        'lapisLazul': '#176087',
        'blueNCS': '#1D84B5'
      },
      borderColor: {
        DEFAULT: '#536271'
      }
    },
    // borderColor: {
    //   DEFAULT: '#536271'
    // }
  },
  plugins: [],
}

