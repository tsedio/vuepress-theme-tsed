import { COLORS_LIST } from '../../../utils/colors'
import BxIcon from '../../atoms/icons/BxIcon'
import Button from './Button.vue'

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLORS_LIST
      }
    },
    bgColor: {
      control: {
        type: 'select',
        options: COLORS_LIST
      }
    },
    borderColor: {
      control: {
        type: 'select',
        options: COLORS_LIST
      }
    },
    rounded: {
      control: {
        type: 'select',
        options: [
          'none',
          'xs',
          'small',
          'default',
          'medium',
          'large',
          'full'
        ]
      }
    },
    shadow: {
      control: {
        type: 'select',
        options: [
          'default',
          'sm',
          'strong',
          'md',
          'lg',
          'top',
          'inner',
          'outline',
          'none'
        ]
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    Button,
    BxIcon
  },
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props">{{$props.text}}</Button>'
})

export const Overview = Template.bind({})

Overview.args = {
  text: 'Text',
  color: 'white-button',
  bgColor: 'blue',
  borderColor: 'blue',
  disabled: false
}
