import React from "react"
import Template from "../components/Template"
import Link from "../components/Link"

const Page404 = () => (
  <Template title="404" description="Not Found">
    <Link to="/">
      <p>Ex nihilo nihil fit...</p>
    </Link>
  </Template>
)
export default Page404
