/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header: {
          main: "#fff3e1",
        },
      },
      width: {
       
          fullHeight: "100%",
    
      },
      height: {
        fullWidth: "100%",
      },
    },
  },
  plugins: [],
};
