import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

import { Header, Template } from "../components"

const Page = ({ data }) => {
  const { title, description, body, slug } = parseData(data)

  return (
    <Template title={title} description={description}>
      <Header slug={slug} />
      <MDXRenderer>{body}</MDXRenderer>
    </Template>
  )
}
export default Page

const parseData = (data) => {
  const {
    mdx: {
      body,
      frontmatter: { slug, title, description },
    },
  } = data

  return { title, description, body, slug }
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        slug
        title
        description
      }
    }
  }
`
