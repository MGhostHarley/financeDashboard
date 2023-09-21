/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  important: "#root",
  content: [
    "./src/**/*.{js,jsx,tsx,ts}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    md: "1060px",
  },
  plugins: [require("flowbite/plugin")],
};
