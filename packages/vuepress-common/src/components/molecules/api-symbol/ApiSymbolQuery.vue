<template>
  <ApiSymbol v-if="item.length" :item="item[0]"/>
  <span v-else-if="query">Unable to find something: <code>{{this.query}}</code></span>
</template>
<script>
  import ApiSymbol from './ApiSymbol'

  export default {
    name: 'ApiSymbolQuery',
    components: {
      ApiSymbol
    },
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    computed: {
      item () {
        return this.$filterSymbols(this.query)
      }
    }
  }
</script>
