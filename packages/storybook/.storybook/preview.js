import Vue from 'vue'
import { configure } from '@storybook/vue'
import { filterSymbols } from '@tsed/vuepress-common'
import './stories.decorators'
import api from './api.json'

Vue.use({
  install (Vue) {
    Vue.mixin({
      created () {
        this.$filterSymbols = filterSymbols(api)
        this.$site = {
          themeConfig: {
            api,
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
      }
    })
  }
})

configure(require.context('../../vuepress-common/src/components', true, /\.stories\.js$/), module)
