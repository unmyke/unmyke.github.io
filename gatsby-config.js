/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    pages: [
      {
        link: {
          pathname: "/",
          name: "Mikhail Unenov",
        },
        title: "unmyke / Home",
        description: "unmyke's personal website",
      },
      {
        link: {
          pathname: "/cv",
          name: "CV",
        },
        title: "unmyke / CV",
        description: "unmyke's cv",
      },
    ],
    global: {
      author: "unmyke",
      siteUrl: "https://unmyke.github.com",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
