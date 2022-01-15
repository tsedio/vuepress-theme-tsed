import {filterSymbols} from '../utils'

export const ApiMixin = {
  methods: {
    getApi() {
      return this.$themeConfig?.api || {}
    },
    getApiModules() {
      const modules = this.getApi()

      if (!modules) {
        return {}
      }

      return Object.keys(modules)
        .sort((a, b) => a < b ? -1 : 1)
        .reduce((acc, key) => {

          const symbols = modules[key]
            .symbols
            .filter((symbol) => {
              if (!!(this.currentType && symbol.symbolType !== this.currentType)) {
                return false
              }

              if (!!(this.currentStatus && symbol.status.indexOf(this.currentStatus))) {
                return false
              }

              if (!!this.keyword) {
                return symbol.symbolName.toLowerCase().indexOf(this.keyword.toLocaleLowerCase()) > -1
              }

              return true
            })

          acc[key] = {...modules[key], symbols}

          return acc
        }, {})
    },
    getApiRedirectUrl() {
      return this.$themeConfig?.apiRedirectUrl || ''
    },
    filterSymbols(query) {
      const items = filterSymbols(this.getApi())(query)

      return items.map((item) => {
        return {
          ...item,
          link: this.getApiLink(item)
        }
      })
    },
    getApiLink(item) {
      return `${this.getApiRedirectUrl()}${item.path.replace(/\/\//gi, '/')}.html`
    }
  }
}
