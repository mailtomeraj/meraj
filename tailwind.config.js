/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '30px',
        },
      },
      colors: {
       'c-dark': '#292830',
       'c-light': '#BDBDBD',
       'c-accent': '#FF7235',
       'c-accentHover': '#e05216',
       'c-grey': '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('../public/images/overview/bg.svg')",
        cta: "url('../public/images/cta/bg.svg')",
      },
    },
  },
  plugins: [],
}
