/** @type {import('tailwindcss').Config} */
export default { 
  darkMode: "class",

  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ], 
  theme: { extend: {
    backgroundColor: {
      primary: "#FBF4EE",
      secondary: "#F4EDE7",
      darkPrimary: '#302B27', // Dark background primary color
      darkSecondary: '#302A27', // Dark background secondary color
    },
    textColor: {
      primary: "#807A76",
    },
    fontFamily: {
      bigCalson: ["big-caslon-fb", "serif"],
      barcode: ["c39hrp36dlttnormal"],
      //barcode2: ["c39hrp24dhtt"],
  }, 
    boxShadow:{
      custom: "20px 20px 20px rgba(0, 0, 0, 0.1), -20px -20px 20px rgba(0, 0, 0, 0.1)",
    }
  }, 
  plugins: [], 
  }
};

