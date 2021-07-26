import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Link from "./Link"

import * as styles from "./Header.module.scss"

const Header = ({ slug }) => {
  const [home, ...header] = useHeaderQuery(slug)

  return (
    <header className={styles["container"]}>
      <Link to={home.path}>
        <h1 className={styles["home"]}>{home.title}</h1>
      </Link>
      <nav className={styles["nav"]}>
        {header.map(({ path, title, isCurrent }, index) => {
          return isCurrent ? (
            <h2 key={index} className={styles["title"]}>
              {title}
            </h2>
          ) : (
            <Link key={index} to={path}>
              {title}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
export default Header

const useHeaderQuery = (curSlug) => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___order }) {
        nodes {
          frontmatter {
            slug
            title
            description
          }
        }
      }
    }
  `)

  return nodes.map(({ frontmatter: { slug, title } }) => {
    const isCurrent = slug === curSlug

    return { title, path: slug, isCurrent }
  })
}
