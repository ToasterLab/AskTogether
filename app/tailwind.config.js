module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [`Barlow`, `sans-serif`],
      serif: []
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
