import React from "react"
import Template from "../components/Template"
import Header from "../components/Header"
import CV from "../components/cv"
import { getCurrentPageIndex } from "../utils"
import { usePageQuery } from "../utils"

const PageCV = ({ location: { pathname } }) => {
  const { pages = [], global, links } = usePageQuery()
  const currentPageIndex = getCurrentPageIndex(pages, pathname)
  const currentPage = pages[currentPageIndex]

  return (
    <Template global={global} currentPage={currentPage}>
      <Header links={links} currentLinkIndex={currentPageIndex} />
      <CV />
    </Template>
  )
}
export default PageCV
