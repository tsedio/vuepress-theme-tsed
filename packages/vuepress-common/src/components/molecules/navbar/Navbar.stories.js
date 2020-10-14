import Navbar from './Navbar.vue'
import { COLORS_LIST } from '../../../utils/colors'
import { boolean, number, select } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/GithubStars'
}

export const overview = () => ({
  components: {
    Navbar
  },
  props: {

  },
  template: `
    <Navbar :disabled="disabled"
            :color="color"
            :bg-color="bgColor"
            :font-weight="fontWeight"
            :padding-x="paddingX"
            :padding-y="paddingY"
            :rounded="rounded"
            :shadow="shadow">
      Button rounded
    </Navbar>`
})
