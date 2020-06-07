<template>
  <ApiSymbolQuery :query="query"></ApiSymbolQuery>
</template>
<script>
  import ApiSymbolQuery from '../api-symbol-query/ApiSymbolQuery'

  export default {
    name: 'ApiSymbolName',
    components: {
      ApiSymbolQuery
    },
    computed: {
      query () {
        return `symbolName === '${ this.$slots.default[0].text.trim() }'`
      }
    }
  }
</script>
