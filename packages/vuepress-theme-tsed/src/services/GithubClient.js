import axios from 'axios'
import { outboundRE } from '../utils'

let CONTRIBUTORS

export async function getContributors (docsRepo) {
  if (CONTRIBUTORS) {
    return CONTRIBUTORS
  }
  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  const { data: contributors } = await axios.get(base.replace('/github.com', '/api.github.com/repos') + '/contributors')

  CONTRIBUTORS = contributors
    .filter(contributor => ['semantic-release-bot', 'dependabot[bot]'].includes(contributor.login) === -1)
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

  const { data } = await axios.get(base.replace('/github.com', '/api.github.com/repos'), {
    headers: {
      Accept: 'application/vnd.github.v3+json'
    },
    qs: {
      per_page: 100
    }
  })
  METADATA = data

  return METADATA
}
