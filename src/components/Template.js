import React, { Fragment } from "react"

import Seo from "./Seo"

import * as styles from "./Template.module.scss"

const Template = ({ children, description, title }) => {
  return (
    <Fragment>
      <Seo title={title} description={description} />
      <div className={styles["container"]}>{children}</div>
    </Fragment>
  )
}
export default Template
