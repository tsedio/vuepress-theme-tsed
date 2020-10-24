import { boolean, number, select } from '@storybook/addon-knobs'
import { Button, COLORS_LIST } from '@tsed/vuepress-common'
import contributors from '@tsed/vuepress-common/src/components/molecules/contributors/contributors.json'
import Showcase from '../molecules/showcase/Showcase'
import GithubContributors from './github-contributors/GithubContributors'

export default {
  title: 'Organisms/BlockContributors'
}

export const overview = () => ({
  components: {
    Showcase,
    GithubContributors,
    Button
  },
  props: {
    bgContainer: {
      default: select('Background container', COLORS_LIST, 'white')
    },
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
      ], 'xxs')
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
    },
    contributors: {
      default: contributors
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
  },
  template: `
    <div :class="'bg-' + bgContainer + ' text-' + color" style="width: 100vw">
    <Showcase title="Our <b>contributors</b>">
      <GithubContributors
          :users="users"
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

      <template #showcase-cta>
        <Button
            rounded="medium"
            :href="backers.cta.url">
          Become contributor
        </Button>
      </template>
    </Showcase>
    </div>`
})
