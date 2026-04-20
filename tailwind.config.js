/** @type {import('tailwindcss').Config} */
export default { 
  darkMode: "class",

  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ], 
  theme: { extend: {
    backgroundColor: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
      darkPrimary: '#1E1E1E', // Dark background primary color
      darkSecondary: '#1E1E1E', // Dark background secondary color
    },
    textColor: {
      primary: "#DCDCDC",
    },
    fontFamily: {
      bigCalson: ["big-caslon-fb", "serif"],
      barcode: ["c39hrp36dlttnormal"],
      neuzeitRegular: ["neuzeit-grotesk", "sans-serif"],
      neuzeitBold: ["neuzeit-grotesk", "sans-serif"],
      //barcode2: ["c39hrp24dhtt"],
  }, 
    boxShadow:{
      custom: "20px 20px 20px rgba(0, 0, 0, 0.1), -20px -20px 20px rgba(0, 0, 0, 0.1)",
    }
  }, 
  plugins: [], 
  }
};

