/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: { 
        mullish: ["Mulish", "sans-serif"], //Razor Pay websiteke liye
      },
      colors: { 
        deepBlue: "#02042a",         //Razor Pay websiteke liye
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        greenNewText: "#08c972",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",            //Razor Pay websiteke liye
      },
    },
  },
  plugins: [],
}
