module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navBg: "#FFFD77",
        nav: "#EFE2BA",
        navItems: "#4056A1",
        pagesBg: "#73E7E6",
        headingBg: "#F26666",
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
