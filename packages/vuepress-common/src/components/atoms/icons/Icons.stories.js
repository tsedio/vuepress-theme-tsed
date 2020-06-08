import BxIcon from './BxIcon.vue'
import { number, select } from '@storybook/addon-knobs'
import { COLORS_LIST } from '../../../utils/colors'
import { ICONS } from './icons'

export default {
  title: 'Atoms/Icon'
}

export const overview = () => ({
  components: {
    BxIcon
  },
  props: {
    width: {
      default: number('Width', 18)
    },
    height: {
      default: number('Height', 18)
    },
    color: {
      default: select('Color', COLORS_LIST, 'blue')
    },
    icons: {
      default: Object.values(ICONS)
    }
  },
  template: `
    <div class="w-full flex flex-wrap">
      <div class="border-1 flex flex-col items-center m-2 p-5 overflow-hidden" style="width: 100px" v-for="icon of icons" :key="icon">
        <BxIcon class="mb-4 text-xl" :name="icon" :color="color"></BxIcon>
        <span class="text-xs truncate">{{icon}}</span>
      </div>
    </div>
    <script>
      import BxIcon from './BxIcon'
      export default {
        components: { BxIcon }
      }
    </script>`
})
