/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nextek: "#FA005F",
        nextekHover: "#D1004F"
      },
    },
  },
  plugins: [],
};
