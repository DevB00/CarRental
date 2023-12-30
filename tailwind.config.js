module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "1050px",
    },
    backgroundImage: {
      "chooseUs": "url('./src/images/home/chooseBg.png')",
    },
    backgroundPosition: {
      'c-p': '-220px 250px',
    },
  },
  plugins: [],

  mode: "jit",
};
