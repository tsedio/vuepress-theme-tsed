<template>
  <ApiSymbolQuery :query="query"/>
</template>
<script>
  import ApiSymbolQuery from './ApiSymbolQuery'

  export default {
    name: 'ApiSymbolName',
    components: {
      ApiSymbolQuery
    },
    props: {
      name: {
        type: String,
        default: undefined
      }
    },
    computed: {
      query () {
        return `name: "${this.name || this.$slots.default[0].text.trim()}"`
      }
    }
  }
</script>
