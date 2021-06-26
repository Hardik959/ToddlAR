module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nav: "#EFE2BA",
        navItems: "#4056A1",
        alphabetsBg: "#F76C6C",
      },
      fontFamily: {
        navFont: ['"Patrick Hand"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
