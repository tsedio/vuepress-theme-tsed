import axios from 'axios'

export async function getBackers (repo) {
  const members = await getMembers(repo)

  return members.filter((member) => member.role === 'BACKER' && member.tier !== 'Sponsor')
}

export async function getSponsors (repo) {
  const members = await getMembers(repo)

  return members.filter((member) => member.role === 'BACKER' && member.tier === 'Sponsor')
}

let MEMBERS

export async function getMembers (repo) {
  if (MEMBERS) {
    return MEMBERS
  }
  const { data: members } = await axios.get(`https://cors-anywhere.herokuapp.com/https://opencollective.com/${repo}/members/all.json`, {
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

        ...member
      }
    })

  return MEMBERS
}
