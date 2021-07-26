import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

const Seo = ({ title, description }) => {
  const { author, siteUrl } = useSeoQuery()

  return (
    <Helmet>
      {/* /* <!-- HTML Meta Tags --> */}
      <title>{title}</title>
      <meta name="author" content={author}></meta>
      <meta name="keywords" content="developer, resume"></meta>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {/* <base href="//cdn.example.com/"></base> */}
      <meta name="application-name" content={description} />
      <meta name="robots" content="noarchive" />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />

      {/* <!-- Facebook Meta Tags --/> */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteUrl}></meta>
      <html lang="en" />
    </Helmet>
  )
}
export default Seo

const useSeoQuery = () => {
  const {
    site: {
      siteMetadata: {
        global: { author, siteUrl },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          global {
            author
            siteUrl
          }
        }
      }
    }
  `)

  return { author, siteUrl }
}
