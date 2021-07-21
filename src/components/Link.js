import React from "react"
import { Link as GatsbyLink } from "gatsby"
import * as styles from "./Link.module.scss"

const Link = ({ children, to, ...other }) => {
  const isInternal = /^\/(?!\/)/.test(to)

  return isInternal ? (
    <GatsbyLink className={styles["inner"]} to={to}>
      {children}
    </GatsbyLink>
  ) : (
    <a className={styles["outer"]} href={to} {...other}>
      {children}
    </a>
  )
}

export default Link
