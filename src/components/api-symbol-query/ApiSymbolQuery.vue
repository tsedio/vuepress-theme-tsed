<template>
  <ApiSymbol class="-inline" v-if="item" :item="item"></ApiSymbol>
</template>
<script>
  import { findSymbols, getApi } from '../../utils/api'
  import ApiSymbol from '../api-symbol/ApiSymbol'

  export default {
    name: 'ApiSymbolQuery',
    components: {
      ApiSymbol
    },
    props: {
      query: {
        type: String,
        default: undefined
      }
    },

    data () {
      return {
        api: null
      }
    },

    computed: {
      item () {
        if (this.query && this.api) {
          const symbols = findSymbols(this.api.modules, this.query)
          return symbols[0]
        }

        return undefined
      }
    },

    mounted () {
      if (this.query) {
        getApi(this.$site.themeConfig.apiUrl)
          .then((api) => {
            this.api = api
          })
      }
    }
  }
</script>
