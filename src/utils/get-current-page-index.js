const pathRegexp = /^(.*)\/$/

const getCurrentPageIndex = (pages, currentPathname) => {
  const currentPageIndex = pages.findIndex(({ link: { pathname } }) => {
    const normalizedCurrentPathname = currentPathname.replace(pathRegexp, "$1")
    const normalizedPathname = pathname.replace(pathRegexp, "$1")
    const isCurrentPath = normalizedCurrentPathname === normalizedPathname

    return isCurrentPath
  })

  return currentPageIndex
}

export default getCurrentPageIndex
