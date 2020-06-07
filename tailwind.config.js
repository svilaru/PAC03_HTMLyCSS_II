module.exports = {
  purge: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      'sans': 'Montserrat, Arial, sans-serif',
      'serif': 'Playfair Display'
    },
    extend: {
      height: theme => ({
        "screen/400": "400px",
      }),
      width: theme => ({
        "500": "500px",
      }),
      colors: {
        'primary': '#bf7463',
      }
    },
  },
  variants: {},
  plugins: [],
}
