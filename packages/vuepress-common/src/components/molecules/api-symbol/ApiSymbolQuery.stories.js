import ApiSymbolQuery from './ApiSymbolQuery.vue'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/ApiSymbolQuery'
}

export const overview = () => ({
  components: {
    ApiSymbolQuery
  },
  props: {
    query: {
      default: text('Query', 'name: GraphQLModule')
    }
  },
  template: `<ApiSymbolQuery :query="query"/>`
})

