import { number, select } from '@storybook/addon-knobs'
import { COLORS_LIST } from '../../../utils/colors'
import frameworks from './__mock__/frameworks.json'
import ButtonBadges from './ButtonBadges'

export default {
  title: 'Molecules/ButtonBadges'
}

export const overview = () => ({
  components: {
    ButtonBadges
  },
  props: {
    items: {
      default: frameworks
    },
    bgColor: {
      default: select('bg-color', COLORS_LIST, 'gray-lighter')
    },
    color: {
      default: select('color', COLORS_LIST, 'platinium')
    },
    width: {
      default: number('width', 80)
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
      ], 'sm')
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
      ], 'bold')
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
      ], 'lg')
    }
  },
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <ButtonBadges
        :items="items"
        :bg-color="bgColor"
        :color="color"
        :width="width"
        :text-size="textSize"
        :font-weight="fontWeight"
        :shadow="shadow"
        :padding="padding"
        :inner-padding="innerPadding"
        :blur="blur"/>
    </div>`
})
