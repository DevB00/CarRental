module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '768px',
      'md': '1000px',
    },
  },
  plugins: [],
  
  mode: 'jit',

  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
