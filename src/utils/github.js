import { outboundRE } from './index'

export function getContributors (docsRepo) {
  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${ docsRepo }`

  return fetch(base.replace('/github.com', '/api.github.com/repos') + '/contributors')
    .then((response) => response.json())

}


export function getGithubMetadata (docsRepo) {
  const base = outboundRE.test(docsRepo)
    ? docsRepo
    : `https://github.com/${ docsRepo }`

  return fetch(base.replace('/github.com', '/api.github.com/repos'))
    .then((response) => response.json())

}
