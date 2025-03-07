/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mdxl: "1034px",
      smXl: "996px",
      xsXl: "890px",
      mmd: "821px",
      xsmd: "786px",
      xsd: "734px",
      sm: "627px",
      ssm: "580px",
      xsm: "548px",
      ctm: "508px",
      vctm: "467px",
      xctm: "441px", 
      sctm: "410px",
      xtm: "390px",      
      mobile: "320px",
    },
    extend: {
      fontFamily: {
        custom: ["mono", "RobotoMono-Bold"], // Add the custom font
      },
    },
  },
  plugins: [],
}

