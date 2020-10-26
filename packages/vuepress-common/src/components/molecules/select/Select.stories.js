import { select } from '@storybook/addon-knobs'
import Select from './Select.vue'

import { COLORS_LIST } from '../../../utils/colors'

const CLASS_LIST = {
  WFULL: 'w-full',
  WAUTO: 'w-auto'
}

export default {
  title: 'Molecules/Select'
}

export const overview = () => ({
  components: {
    Select
  },
  props: {
    classlist: {
      default: select('Size', CLASS_LIST, 'w-full')
    },
    bgcolor: {
      default: select('Select bg colors', COLORS_LIST, 'white')
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center;" class="init">
        <Select :bg-color="bgcolor"
                :symbol="true"
                :class="classlist"
                label="Type"
                @change="onTypeChange"
                :items="items" />
    </div>`
})
