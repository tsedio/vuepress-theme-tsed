import * as common from '@tsed/vuepress-common'
import { filterSymbols } from '@tsed/vuepress-common'

function isVueComponent (component) {
  return component.name && typeof component !== 'function'
}

export default function install (Vue) {
  Vue.mixin({
    created () {
      if (this.$themeConfig.api) {
        this.$filterSymbols = filterSymbols(this.$themeConfig.api)
      }
    }
  })

  try {
    Object.keys(common).forEach((key) => {
      const component = common[key]

      if (isVueComponent(component)) {
        Vue.component(component.name || key, component)
      }
    })
  } catch (er) {
    console.error(er)
  }
}
