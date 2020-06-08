import Button from './Button.vue'
import { COLORS_LIST } from '../../../utils/colors'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import BxIcon from '../../atoms/icons/BxIcon'

export default {
  title: 'Molecules/Button'
}

export const overview = () => ({
  components: {
    Button,
    BxIcon
  },
  props: {
    text: {
      default: text('Text', 'Button')
    },
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
    <Button :disabled="disabled"
            :color="color"
            :bg-color="bgColor"
            :font-weight="fontWeight"
            :padding-x="paddingX"
            :padding-y="paddingY"
            :rounded="rounded"
            :shadow="shadow">
      {{text}}
    </Button>`
})

export const withIcon = () => ({
  components: {
    Button,
    BxIcon
  },
  props: {
    text: {
      default: text('Text', 'Button')
    },
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
    <Button :disabled="disabled"
            :color="color"
            :bg-color="bgColor"
            :font-weight="fontWeight"
            :padding-x="paddingX"
            :padding-y="paddingY"
            :rounded="rounded"
            :shadow="shadow"
            class="flex items-center">
      <BxIcon name="github" class="mr-2 text-lg"/>
      {{text}}
    </Button>`
})
