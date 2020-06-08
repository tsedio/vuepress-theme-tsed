import { select, text } from '@storybook/addon-knobs'
import Badge from './Badge.vue'

import { COLORS_LIST } from '../../../utils/colors'

export default {
  title: 'Atoms/Badge'
}

export const overview = () => ({
  components: {
    Badge
  },
  props: {
    text: {
      default: text('Text', 'Hello')
    },
    color: {
      default: select('Color', COLORS_LIST, 'emerald')
    },
    vertical: {
      default: text('Vertical align', 'top')
    }
  },
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
      <div>
        <h2>Title <Badge :color="color" :text="text" :vertical="vertical"></Badge></h2>
      </div>
    </div>`
})
