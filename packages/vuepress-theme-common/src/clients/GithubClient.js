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

  const endpoint = base.replace('/github.com', '/api.github.com/repos') + '/contributors'

  const { data: contributors } = await axios.get(endpoint + '?per_page=100')

  CONTRIBUTORS = contributors
    .filter(contributor => !['semantic-release-bot', 'dependabot[bot]'].includes(contributor.login))
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

  const { data } = await axios.get(base.replace('/github.com', '/api.github.com/repos'))

  METADATA = data

  return METADATA
}
