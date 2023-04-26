/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "footerLayout" : "repeat(auto-fit, minmax(14rem, 1fr))",
        "productLayout" : "repeat(auto-fit, minmax(15rem, 1fr))",
        "collectionLayout" : "repeat(auto-fit, minmax(12rem, 1fr))",
        "homepageLayoutHero" : "repeat(auto-fit, minmax(18rem, 1fr))"
      }

    },
  },
  plugins: [],
}

