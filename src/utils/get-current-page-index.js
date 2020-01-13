const pathRegexp = /^(.*)\/$/

const getCurrentPageIndex = (pages, currentPathname) => {
  const currentPageIndex = pages.findIndex(({ link: { pathname } }) => {
    const normilizedCurrentPathname = currentPathname.replace(pathRegexp, "$1")
    const normilizedPathname = pathname.replace(pathRegexp, "$1")
    const isCurrentPath = normilizedCurrentPathname === normilizedPathname
    return isCurrentPath
  })

  return currentPageIndex
}

export default getCurrentPageIndex
