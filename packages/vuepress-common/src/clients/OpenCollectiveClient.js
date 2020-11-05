import axios from 'axios'

export async function getBackers (repo, type) {
  const members = await getMembers(repo)

  return members.filter((member) => member.role === type)
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
        title: name,
        ...member
      }
    })

  return MEMBERS
}
