import { endingSlashRE, outboundRE } from '@vuepress/theme-default/util'

export function createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
  const bitbucket = /bitbucket.org/
  if (bitbucket.test(repo)) {
    const base = outboundRE.test(docsRepo) ? docsRepo : repo
    return (
      base.replace(endingSlashRE, '')
      + `/src`
      + `/${docsBranch}/`
      + (docsDir ? docsDir.replace(endingSlashRE, '') : '')
      + path
      + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
    )
  }

  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`
  return (
    base.replace(endingSlashRE, '')
    + `/edit`
    + `/${docsBranch}/`
    + (docsDir ? docsDir.replace(endingSlashRE, '') : '')
    + path
  )
}