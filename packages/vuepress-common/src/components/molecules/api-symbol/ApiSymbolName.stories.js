import ApiSymbolName from './ApiSymbolName.vue'
import { select } from '@storybook/addon-knobs'
import api from './api.json'
import Vue from 'vue'

Vue.use({
  install(Vue) {
    Vue.mixin({
      created() {
        this.$site = {
          themeConfig: {
            apiUrl: 'https://tsed.io/api.json',
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
      default: select('Name', list, 'Configuration')
    }
  },
  template: `<ApiSymbolName :name="name"></ApiSymbolName>`
})

