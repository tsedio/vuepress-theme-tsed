import { number, select, text } from '@storybook/addon-knobs'

import { COLORS_LIST } from '../../../utils/colors'
import ButtonBadge from './ButtonBadge'

export default {
  title: 'Molecules/ButtonBadge'
}

export const overview = () => ({
  components: {
    ButtonBadge
  },
  props: {
    title: {
      default: text('Login', 'romakita')
    },
    src: {
      default: text('Image', 'https://avatars3.githubusercontent.com/u/1763311?v=4')
    },
    href: {
      default: text('Href', 'https://github.com/romakita')
    },
    bgColor: {
      default: select('Background color', COLORS_LIST, 'gray-lighter')
    },
    color: {
      default: select('Color', COLORS_LIST, 'blue')
    },
    width: {
      default: number('Width', 60)
    },
    textSize: {
      default: text('Text size', 'xxs')
    },
    blur: {
      default: number('Blur', 0)
    }
  },
  template: `
    <ButtonBadge :bg-color="bgColor"
                      :color="color"
                      :title="title"
                      :src="src"
                      :href="href"
                      :width="width"
                      :text-size="textSize"
                      :blur="blur"/>`
})
