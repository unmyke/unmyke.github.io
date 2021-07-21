import React, { Fragment } from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import * as styles from "./Template.module.scss"

const Template = ({ children, global = {}, currentPage = {} }) => {
  const { author, siteUrl } = global
  const { description, title } = currentPage
  return (
    <Fragment>
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
      {/* <style>{???}</style> */}
      <div className={styles["container"]}>{children}</div>
    </Fragment>
  )
}
export default Template

export const query = graphql`
  fragment Page on SiteSiteMetadataPages {
    title
    description
  }
  fragment Global on SiteSiteMetadataGlobal {
    author
    siteUrl
  }
`
