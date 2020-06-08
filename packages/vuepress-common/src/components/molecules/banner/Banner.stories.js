import Banner from './Banner.vue'
import { number, select, text } from '@storybook/addon-knobs'
import { COLORS_LIST } from '../../../utils/colors'

export default {
  title: 'Molecules/Banner'
}

export const overview = () => ({
  components: {
    Banner
  },
  props: {
    src: {
      default: text('Src', 'https://ajv.js.org/images/ajv_logo.png')
    },
    href: {
      default: text('Href', 'https://ajv.js.org/')
    },
    height: {
      default: number('Height', 100)
    },
    bgColor: {
      default: select('bgColor', COLORS_LIST, 'white')
    }
  },
  template: '<Banner :src="src" :href="href" :height="height" :bg-color="bgColor" />'
})

export const withPassportLogo = () => ({
  components: {
    Banner
  },
  props: {
    src: {
      default: text('Src', 'http://www.passportjs.org/images/logo.svg')
    },
    href: {
      default: text('Href', 'http://www.passportjs.org/')
    },
    height: {
      default: number('Height', 128)
    },
    padding: {
      default: number('Padding', 5)
    },
    bgColor: {
      default: select('bgColor', COLORS_LIST, 'blue')
    }
  },
  template: '<Banner :src="src" :href="href" :height="height" :padding="padding" :bg-color="bgColor" />'
})

