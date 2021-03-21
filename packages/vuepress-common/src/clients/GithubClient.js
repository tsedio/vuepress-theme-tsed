import axios from 'axios'
import { outboundRE } from '../utils'


function getHost (docsRepo) {
  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`

  return base.replace('/github.com', '/repos/api.github.com')
}

export async function getContributors (docsRepo, { page= 1, per_page= 100 } = {}) {
  const endpoint = `${getHost(docsRepo)}/contributors`

  const { data: contributors } = await axios.get(`${endpoint}?page=${page}&per_page=${per_page}`)

  return contributors
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
}

export async function getGithubMetadata (docsRepo) {
  const { data } = await axios.get(getHost(docsRepo))

  return data
}

export async function getGithubReleases (docsRepo, { page= 1, per_page= 30 } = {}) {
  const { data } = await axios.get(`${getHost(docsRepo)}/releases?page=${page}&per_page=${per_page}`)

  return data
}