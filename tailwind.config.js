/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  extend: {
    backgroundImage: {
      hero: "url('../assets/images/HDplant.png')",
    },
  },
  plugins: [],
};
