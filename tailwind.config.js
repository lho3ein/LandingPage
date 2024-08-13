/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          750: "#d53569",
        },
        amber: {
          350: "#daad51",
        },
        banafsh: "rgb(67, 56, 202)", // text-indigo-700
      },
      spacing: {
        22: "5.5rem",
      },
      fontFamily: {
        Vazir: ["Vazirmatn"],
        Inter: ["Inter, sans-serif"],
        InterVar: ["InterVariable, sans-serif;"],
        YekanNewFace: ["Yekan-NewFace-D3"],
        YekanBakh: ["Yekan Bakh"],
      },
    },
  },
  plugins: [],
};
