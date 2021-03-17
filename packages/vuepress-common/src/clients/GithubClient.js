import axios from 'axios'
import { outboundRE } from '../utils'

let CONTRIBUTORS

function getHost (docsRepo) {

  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  return base.replace('/github.com', '/repos/api.github.com')
}

export async function getContributors (docsRepo, { page= 1, per_page= 100 } = {}) {
  if (CONTRIBUTORS) {
    return CONTRIBUTORS
  }

  const endpoint = `${getHost(docsRepo)}/contributors`

  const { data: contributors } = await axios.get(`${endpoint}?page=${page}&per_page=${per_page}`)

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

  const { data } = await axios.get(getHost(docsRepo))

  METADATA = data

  return METADATA
}

export async function getGithubReleases (docsRepo, { page= 1, per_page= 30 } = {}) {
  const { data } = await axios.get(`${getHost(docsRepo)}/releases?page=${page}&per_page=${per_page}`)

  return data
}