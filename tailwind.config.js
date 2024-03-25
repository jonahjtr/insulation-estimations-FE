/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../assets/images/HDplant.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
