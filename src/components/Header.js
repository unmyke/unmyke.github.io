import React from "react"
import { graphql } from "gatsby"
import Link from "./Link"
import styles from "./Header.module.scss"

const Header = ({ links, currentLinkIndex }) => {
  const [{ pathname: indexPathname, name: indexHeader }, ...restLinks] = links

  return (
    <header className={styles["container"]}>
      <Link to={indexPathname}>
        <h1 className={styles["home"]}>{indexHeader}</h1>
      </Link>
      <nav className={styles["nav"]}>
        {restLinks.map(({ pathname, name }, index) => {
          const isCurrentLink = index === currentLinkIndex - 1

          return isCurrentLink ? (
            <h2 className={styles["title"]}>{name}</h2>
          ) : (
            <Link key={index} to={pathname}>
              {name}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
export default Header

export const query = graphql`
  fragment Link on SiteSiteMetadataPagesLink {
    pathname
    name
  }
`
