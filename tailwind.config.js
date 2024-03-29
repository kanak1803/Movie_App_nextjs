/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  prefix: "",
  plugins: [require("tailwindcss-animate"), require("flowbite/plugin")],
};
