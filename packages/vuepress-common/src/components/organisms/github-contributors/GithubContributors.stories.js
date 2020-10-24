import { array, boolean, number, select } from '@storybook/addon-knobs'
import { COLORS_LIST } from '../../../utils'
import GithubContributors from './GithubContributors.vue'

export default {
  title: 'Organisms/GithubContributors'
}

export const overview = () => ({
  components: {
    GithubContributors
  },
  props: {
    bgColor: {
      default: select('bg-color', COLORS_LIST, 'gray-lighter')
    },
    color: {
      default: select('color', COLORS_LIST, 'blue')
    },
    width: {
      default: number('width', 45)
    },
    showTitle: {
      default: boolean('show-title', false)
    },
    textSize: {
      default: select('text-size', [
        'micro',
        'xxs',
        'xs',
        'sm',
        'base',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '7xl',
        '11xl'
      ], 'xxl')
    },
    blur: {
      default: number('blur', 0)
    },
    fontWeight: {
      default: select('font-weight', [
        'hairline',
        'thin',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black'
      ], 'normal')
    },
    padding: {
      default: number('padding', 3)
    },
    innerPadding: {
      default: number('padding', 5)
    },
    shadow: {
      default: select('shadow', [
        'default',
        'sm',
        'strong',
        'md',
        'lg',
        'top',
        'inner',
        'outline',
        'none'
      ], 'none')
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
    <GithubContributors :users="users"
                        :bg-color="bgColor"
                        :color="color"
                        :title="title"
                        :src="src"
                        :href="href"
                        :width="width"
                        :text-size="textSize"
                        :font-weight="fontWeight"
                        :blur="blur"
                        :show-title="showTitle"/>
    </div>`
})
