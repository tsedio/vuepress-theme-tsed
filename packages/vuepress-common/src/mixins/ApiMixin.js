import {filterSymbols} from '../utils'
import axios from 'axios'

export const ApiMixin = {
  methods: {
    async loadApi() {
      if (!this.$themeConfig?.api && this.$themeConfig?.apiUrl) {
        const result = await axios.get(this.$themeConfig?.apiUrl)

        this.$themeConfig.api = result.data
      }

      if (this.$themeConfig.api && !this.$themeConfig.$$findSymbols) {
        this.$themeConfig.$$findSymbols = filterSymbols(this.$themeConfig?.api || {})
      }

      return true
    },

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
      if (this.$themeConfig?.$$findSymbols) {
        const items = this.$themeConfig.$$findSymbols(query)

        return items.map((item) => {
          return {
            ...item,
            link: this.getApiLink(item)
          }
        })
      }

      return []
    },
    getApiLink(item) {
      return item.path ? `${this.getApiRedirectUrl()}${item.path.replace(/\/\//gi, '/')}.html` : ''
    }
  }
}
