import { select, text } from '@storybook/addon-knobs'
import BxIcon from '../../atoms/icons/BxIcon'
import { ICONS } from '../../atoms/icons/icons'
import InputText from './InputText'

export default {
  title: 'Molecules/InputText'
}

export const overview = () => ({
  components: {
    InputText,
    BxIcon
  },
  props: {
    placeholder: {
      default: text('Placeholder', 'Search')
    },
    iconLeft: {
      default: select('IconLeft', [''].concat(Object.values(ICONS)), '')
    },
    iconRight: {
      default: select('IconRight', [''].concat(Object.values(ICONS)), '')
    }
  },
  template: `
    <div class="p-5">
    <InputText :placeholder="placeholder">
      <template #input-left>
        <BxIcon :name="iconLeft" v-if="iconLeft" class="pr-2 text-lg"/>
      </template>
      <template #input-right>
        <BxIcon :name="iconRight" v-if="iconRight"/>
      </template>
    </InputText>
    </div>`
})
