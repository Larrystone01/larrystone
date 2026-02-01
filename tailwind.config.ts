/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // dark default via "dark" class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00cc75',
        darkBg: '#0a0a0a',
        lightBg: '#f5f5f5',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        fadeOut: { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', 'body.light &'); // custom light variant
    }
  ],
};
