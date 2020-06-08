import { number, select } from '@storybook/addon-knobs'
import Contributors from './Contributors'
import { COLORS_LIST } from '../../../utils/colors'
import contributors from './conrtributors.json'

export default {
  title: 'Molecules/Contributors'
}

export const overview = () => ({
  components: {
    Contributors
  },
  props: {
    bgColor: {
      default: select('Background color', COLORS_LIST, 'gray-lighter')
    },
    color: {
      default: select('Text color', COLORS_LIST, 'blue')
    },
    width: {
      default: number('Width', 60)
    },
    padding: {
      default: number('Padding', 3)
    },
    blur: {
      default: number('Blur', 0)
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
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
      <Contributors :color="color" :bg-color="bgColor" :blur="blur" :width="width" :padding="padding" :contributors="contributors"/>
    </div>`
})
