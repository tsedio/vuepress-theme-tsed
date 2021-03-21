import axios from 'axios'
import { outboundRE } from '../utils'

export async function getBackers (repo, type) {
  const members = await getMembers(repo)

  return members.filter((member) => member.role === type)
}

export async function getMembers (repo) {
  const base = outboundRE.test(repo)
    ? repo
    : `https://opencollective.com/${repo}/members/all.json`

  const { data: members } = await axios.get(base, {
    headers: {
      'x-requested-with': 'https://opencollective.com'
    }
  })

  return members
    .map((member) => {
      const { image, profile, name } = member
      return {
        src: image,
        href: profile,
        login: name,
        title: name,
        ...member
      }
    })
}
