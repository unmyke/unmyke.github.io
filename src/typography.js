import Typography from "typography"

const typography = new Typography({
  baseFontSize: "24px",
  scaleRatio: 1,
  baseLineHeight: 1,
  headerFontFamily: ["Josefin Sans", "Georgia", "sans-serif"],
  bodyFontFamily: ["Gentium Basic", "Helvetica", "serif"],
  googleFonts: [
    {
      name: "Josefin Sans",
      styles: ["400", "600", "700"],
    },
    {
      name: "Gentium Basic",
      styles: ["400", "700"],
    },
  ],
  overrideStyles: (_, { headerFontFamily }) => ({
    nav: { fontFamily: headerFontFamily.join(",") },
  }),
})

export default typography
