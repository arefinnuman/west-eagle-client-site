/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2B3A55",

          secondary: "#CE7777",

          accent: "#E8C4C4",

          neutral: "#1C1221",

          "base-100": "#FFFFFF",

          info: "#7C9CF4",

          success: "#44DAA3",

          warning: "#F58F0A",

          error: "#F95243",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
