/** @type {import('tailwindcss').Config} */
export default { 
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ], 
  theme: { extend: {
    backgroundColor: {
      primary: "#302B27",
      secondary: "#302A27",
    },
    textColor: {
      primary: "#807A76",
    },
    fontFamily: {
      bigCalson: ["big-caslon-fb", "serif"],
      barcode: ["c39hrp36dlttnormal"],
      barcode2: ["c39hrp24dhtt"],
  }, 
  }, 
  plugins: [], 
  }
};

