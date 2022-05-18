module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      background: '#14477E',
      chrono: '#03E20C',
      'light-gray': '#9C9898',
      'black-icon': '#111111',
      'blue-link': '#A2D8FF',
      rouge: '#EC1C24',
      button: '#365B9D',
      gray: '#6A798D',
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
