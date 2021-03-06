module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
  maxHeight: {
      "3/4": "75%",
      "2/3": "66%",},
    extend: {
      outline: {
        blue: "2px solid #0000ff",
      },
      backgroundImage: (theme) => ({
        image: "url('./bg.jpg')",
      }),
    },  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
