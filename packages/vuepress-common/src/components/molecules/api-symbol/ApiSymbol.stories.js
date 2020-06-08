import ApiSymbol from './ApiSymbol.vue'
import { boolean, select, text } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/ApiSymbol'
}

export const overview = () => ({
  components: {
    ApiSymbol
  },
  props: {
    item: {
      default: () => ({
        symbolName: text('Name', 'Name'),
        symbolType: select('Type', [
          'class',
          'interface',
          'decorator',
          'type',
          'service',
          'function',
          'const',
          'enum'
        ], 'class'),
        path: text('Link', '/link'),
        status: boolean('Deprecated', false) ? [{ key: 'deprecated' }] : []
      })
    }
  },
  template: `
    <ApiSymbol :item="item"></ApiSymbol>`
})

