import Feature from './Feature.vue'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/Feature'
}

export const overview = () => ({
  components: {
    Feature
  },
  props: {
    title: {
      default: text('title', 'Rest API')
    },
    description: {
      default: text('Text', 'Create your <strong>Rest API</strong> easily and create different version paths of your API')
    },
    src: {
      default: text('Src', '')
    }
  },
  template: `
    <div>
      <Feature :src="src" :title="title" :description="description">
      </Feature>
    </div>`
})
