module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      gridTemplateRows: {
        a1a: "auto 1fr auto",
        a1: "auto 1fr",
      },

      gridTemplateColumns: {
        a1: "auto 1fr",
        a1a: "auto 1fr auto",
      },
      minHeight: {
        //from h-52
        52: "13rem",
      },
    },
  },
  plugins: [],
};
