import React from "react"
import styles from "./Link.module.scss"

const CV = () => (
  <div className={styles["cv"]}>
    <p>
      Interested in <b>fullstack</b> / <b>backend</b> Node.js development via{" "}
      <b>JavaScript</b> and <b>TypeScript</b>
    </p>
    <p>Have experience in:</p>
    <ul>
      <li>building REST, GraphQL API</li>
      <li>MySQL, PostgreSQL, MongoDB integration</li>
      <li>Express, NestJS</li>
      <li>React, Redux</li>
      <li>Gulp, Webpack</li>
      <li>Git / Git Flow / Rebase Flow</li>
      <li>scripting and shell</li>
      <li>managing and optimizing workflows</li>
      <li>design tools</li>
    </ul>
    <p>Familiar with:</p>
    <ul>
      <li>unit test automation (Jest)</li>
      <li>concepts of continuous integration</li>
    </ul>
    <p>Care about:</p>
    <ul>
      <li>end design, usability</li>
      <li>collaboration and team synergy</li>
      <li>further technological growth</li>
    </ul>
  </div>
)
export default CV
