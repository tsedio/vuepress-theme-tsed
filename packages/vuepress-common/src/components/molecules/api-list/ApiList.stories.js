import { text } from '@storybook/addon-knobs'
import ApiList from './ApiList.vue'
import items from './symbols.json'

export default {
  title: 'Molecules/ApiList'
}

export const overview = () => ({
  components: {
    ApiList
  },
  props: {
    items: {
      default: items
    }
  },
  template: `<div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <h2>@tsed/common</h2>
    <ApiList :items="items"/>
  </div>`
})

export const fromApiConfiguration = () => ({
  components: {
    ApiList
  },
  props: {},
  template: `<div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <h2>@tsed/common</h2>
    <ApiList />
  </div>`
})

export const withQuery = () => ({
  components: {
    ApiList
  },
  props: {
    query: {
      default: text('Query', 'name: GraphQLModule')
    }
  },
  template: `<div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <h2>@tsed/common</h2>
    <ApiList :query="query">{{query}}</ApiList>
  </div>`
})
