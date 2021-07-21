import { useStaticQuery, graphql } from "gatsby"
export const usePageQuery = () => {
  const {
    site: {
      siteMetadata: { pages, global },
    },
  } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            pages {
              link {
                ...Link
              }
              ...Page
            }
            global {
              ...Global
            }
          }
        }
      }
    `
  )
  const links = pages.map(({ link }) => link)

  return { pages, links, global }
}

export default usePageQuery
