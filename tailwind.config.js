module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "1050px",
    },
    backgroundImage: {
      "chooseUs": "url('./src/images/home/bg.png')",
    },
  },
  plugins: [],

  mode: "jit",
};
