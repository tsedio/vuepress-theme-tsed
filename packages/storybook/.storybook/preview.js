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
            repo: 'TypedProject/tsed'
          }
        }
      }
    })
  }
})

configure(require.context('../../vuepress-common/src/components', true, /\.stories\.js$/), module)
