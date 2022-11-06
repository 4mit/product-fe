module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        headerbg: '#1d7020',
      },
      height: {
        200: '200px',
      },
      minHeight: {
        3: '3em',
      },
    },
  },
  plugins: [],
};
