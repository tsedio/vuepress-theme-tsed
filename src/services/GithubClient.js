import { outboundRE } from '../utils'

let CONTRIBUTORS

export async function getContributors (docsRepo) {
  if (CONTRIBUTORS) {
    return CONTRIBUTORS
  }
  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  const response = await fetch(base.replace('/github.com', '/api.github.com/repos') + '/contributors')
  const contributors = await response.json()

  CONTRIBUTORS = contributors
    .filter(contributor => contributor.login.indexOf('semantic-release-bot') === -1)
    .map((contributor) => {
      const { avatar_url, html_url, login } = contributor
      return {
        src: avatar_url,
        href: html_url,
        login,

        ...contributor
      }
    })

  return CONTRIBUTORS
}

let METADATA

export async function getGithubMetadata (docsRepo) {
  if (METADATA) {
    return METADATA
  }
  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  const response = await fetch(base.replace('/github.com', '/api.github.com/repos'))
  METADATA = await response.json()

  return METADATA
}
