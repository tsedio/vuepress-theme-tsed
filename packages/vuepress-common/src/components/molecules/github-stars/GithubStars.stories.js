import GithubStars from './GithubStars.vue'
import { COLORS_LIST } from '../../../utils/colors'
import { boolean, number, select } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/GithubStars'
}

export const overview = () => ({
  components: {
    GithubStars
  },
  props: {
    disabled: {
      default: boolean('Disabled', false)
    },
    color: {
      default: select('Color', COLORS_LIST, 'white')
    },
    bgColor: {
      default: select('Background color', COLORS_LIST, 'blue')
    },
    fontWeight: {
      default: select('Font weight', ['bold', 'normal'], 'bold')
    },
    paddingX: {
      default: number('PaddingX', 4)
    },
    paddingY: {
      default: number('PaddingY', 1)
    },
    rounded: {
      default: select('Rounded', [
        'none',
        'xs',
        'small',
        'default',
        'medium',
        'large',
        'full'
      ], 'small')
    },
    shadow: {
      default: select('Shadow', [
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
    <GithubStars :disabled="disabled"
            :color="color"
            :bg-color="bgColor"
            :font-weight="fontWeight"
            :padding-x="paddingX"
            :padding-y="paddingY"
            :rounded="rounded"
            :shadow="shadow">
      Button rounded
    </GithubStars>`
})
