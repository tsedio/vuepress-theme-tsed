import axios from 'axios'
import { outboundRE } from '../utils'

export let openCollectiveHost = 'https://cors-anywhere.herokuapp.com/https://opencollective.com/'

export async function getBackers (repo, type) {
  const members = await getMembers(repo)

  return members.filter((member) => member.role === type)
}

let MEMBERS

export async function getMembers (repo) {
  if (MEMBERS) {
    return MEMBERS
  }

  const base = outboundRE.test(repo)
    ? repo
    : `https://opencollective.com/${repo}/members/all.json`

  const { data: members } = await axios.get(base, {
    headers: {
      'x-requested-with': 'https://opencollective.com'
    }
  })

  MEMBERS = members
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

  return MEMBERS
}
