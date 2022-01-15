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
      default: text('title', 'romakita')
    },
    src: {
      default: text('src', 'https://avatars3.githubusercontent.com/u/1763311?v=4')
    },
    href: {
      default: text('href', 'https://github.com/romakita')
    },
    bgColor: {
      default: select('bg-color', COLORS_LIST, 'gray-lighter')
    },
    color: {
      default: select('color', COLORS_LIST, 'blue')
    },
    width: {
      default: number('width', 60)
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
      default: number('padding', 0, 0)
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
      ], 'normal')
    }
  },
  template: `<div>
    <ButtonBadge :bg-color="bgColor"
                 :color="color"
                 :title="title"
                 :src="src"
                 :href="href"
                 :width="width"
                 :text-size="textSize"
                 :font-weight="fontWeight"
                 :blur="blur"/></div>`
})
