/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F8FDFF",
        blue: "#007EF3",
        orange: "#FF9F6A",
        text1: "#002348",
        text2: "#003B79",
        offwhitebox: "#EBEEFF",
        iconBlue: "#007DF2",
        card: "#AED3E2",
        footer: "#ECF4FF",
        gray: "#667C94",
      },
      boxShadow: {
        iconShadow: "0 10px 50px 25px rgba(0, 59, 121, 0.07)",
      },
    },
  },
  plugins: [],
};
