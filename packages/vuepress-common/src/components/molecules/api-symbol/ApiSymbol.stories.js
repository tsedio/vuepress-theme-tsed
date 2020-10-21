import { boolean, select, text } from '@storybook/addon-knobs'
import ApiSymbol from './ApiSymbol.vue'

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
    <div style="min-width: 800px" class="p-5 content__default w-full max-w-site-large mx-auto px-3 pb-10">
    Lorem ipsum <ApiSymbol :item="item"></ApiSymbol> test
    
    <ul>
      <li>
        Lorem ipsum <ApiSymbol :item="item"></ApiSymbol> test
      </li>
      <li>
        Lorem ipsum <ApiSymbol :item="item"></ApiSymbol> test
      </li>
    </ul>
    </div>`
})

