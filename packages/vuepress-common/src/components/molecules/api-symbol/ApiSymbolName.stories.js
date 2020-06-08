import ApiSymbolName from './ApiSymbolName.vue'
import { select } from '@storybook/addon-knobs'
import api from './api.json'

export default {
  title: 'Molecules/ApiSymbolName'
}

const list = Object.values(api.modules).reduce((list, current) => {
  return [
    ...list,
    ...current.symbols.map(({ symbolName }) => symbolName)
  ]
}, [])

export const overview = () => ({
  components: {
    ApiSymbolName
  },
  props: {
    name: {
      default: select('Name', list, 'GraphQLModule')
    }
  },
  template: `<ApiSymbolName :name="name"></ApiSymbolName>`
})

