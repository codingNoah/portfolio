/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(to right, #202020, #151515)",
      },
      borderRadius: {
        "4xl": "30px",
      },
      boxShadow: {
        custom: "0 0 20px -10px rgba(0, 0, 0)",
      },
      textColor: {
        primary: "#bcbcbc",
        accent: "#5b78f6",
      },
    },
  },
  plugins: [],
};
