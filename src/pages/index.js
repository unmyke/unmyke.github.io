import React from "react"
import Template from "../components/Template"
import Header from "../components/Header"
import References from "../components/References"
import { usePageQuery } from "../utils"

const PageIndex = () => {
  const { pages = [], global, links } = usePageQuery()
  const currentPageIndex = 0
  const currentPage = pages[currentPageIndex]

  return (
    <Template global={global} currentPage={currentPage}>
      <Header links={links} currentLinkIndex={currentPageIndex} />
      <p>Vox, vox, praeterea nihil&#9786;.</p>
      <References />
    </Template>
  )
}
export default PageIndex
