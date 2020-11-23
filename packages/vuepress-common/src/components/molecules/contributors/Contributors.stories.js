import { number, select } from '@storybook/addon-knobs'
import { COLORS_LIST } from '../../../utils/colors'
import contributors from './contributors.json'
import Contributors from './Contributors.vue'

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
    innerPadding: {
      default: number('padding', 0)
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
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <Contributors :color="color" :bg-color="bgColor" :blur="blur" :width="width" :padding="padding"
                  :contributors="contributors"/>
    </div>`
})
