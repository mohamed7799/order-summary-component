module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "body-desktop-bg": 'url("/src/assets/pattern-background-desktop.svg")',
        "body-mobile-bg": 'url("/src/assets/pattern-background-mobile.svg")',
      },
      fontFamily: {
        redHot: ["Red Hat Display"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
