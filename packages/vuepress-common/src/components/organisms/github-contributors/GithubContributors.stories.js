import { array, boolean } from '@storybook/addon-knobs'
import GithubContributors from './GithubContributors'

export default {
  title: 'Organisms/GithubContributors'
}

export const overview = () => ({
  components: {
    GithubContributors
  },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    }
  },
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <GithubContributors/>
    </div>`
})

export const withFilteredUsers = () => ({
  components: {
    GithubContributors
  },
  props: {
    users: {
      default: array('users', ['Romakita', 'LorianeE'])
    }
  },
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <GithubContributors :users="users"/>
    </div>`
})
