import {text} from '@storybook/addon-knobs'
import ApiList from './ApiList.vue'
import items from './__mock__/symbols.json'
import Vue from 'vue'

Vue.use({
  install(Vue) {
    Vue.mixin({
      created() {
        this.$site = {
          themeConfig: {
            apiUrl: 'https://v7.tsed.dev/api.json',
            repo: 'tsedio/tsed',
            githubProxyUrl: 'https://api.tsed.io/rest/github/tsedio/tsed',
            openCollective: 'https://api.tsed.io/rest/opencollective',
            footerSections: [
              {
                title: 'Discover',
                items: [
                  {
                    label: 'Our team',
                    url: '/'
                  },
                  {
                    label: 'Contact us',
                    url: '/'
                  }
                ]
              },
              {
                title: 'Help',
                items: [
                  {
                    label: 'Resources',
                    url: '/'
                  },
                  {
                    label: 'Chat with us',
                    url: '/'
                  },
                  {
                    label: 'Contribution guide',
                    url: '/'
                  }
                ]
              },
              {
                title: 'Support',
                items: [
                  {
                    label: 'Issues',
                    url: '/'
                  },
                  {
                    label: 'Sponsoring & donations',
                    url: '/'
                  }
                ]
              }
            ]
          }
        }
        this.$themeConfig = this.$site.themeConfig
      }
    })
  }
})

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
  template: `
    <div style="min-width: 800px" class="p-5 content__default flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <h2>@tsed/common</h2>

    <ApiList :items="items"/>
    </div>`
})

export const fromApiConfiguration = () => ({
  components: {
    ApiList
  },
  props: {},
  template: `
    <div style="min-width: 800px" class="p-5 content__default flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <h2>@tsed/common</h2>
    <ApiList/>
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
  template: `
    <div style="min-width: 800px" class="p-5 content__default flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <h2>@tsed/common</h2>
    <ApiList :query="query">{{ query }}</ApiList>
    </div>`
})
