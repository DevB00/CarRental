module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "1050px",
    },
    backgroundImage: {
      chooseUs: "url('../src/images/home/chooseBg.png')",
      faqBg: "url('../src/images/home/faqBg.png')",
      downloadBg: "url('../src/images/home/downloadBg.png')",
      bookingBg: "url('../src/images/components/bookBg.png')",
      topImage: "url('../src/images/components/topImage.png')",
      contactBg: "url('../src/images/contact/contactBg.png')",
    },
    backgroundPosition: {
      "c-p": "-220px 250px",
      "c-p2": "0px 69%",
      "c-p3": "center top",
      "c-p4": "50%"
    },
  },
  plugins: [],

  mode: "jit",
};
