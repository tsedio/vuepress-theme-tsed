<template>
  <ApiSymbolQuery :query="query" :placeholder="placeholder"/>
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
    placeholder() {
      return this.name || this.$slots.default[0].text.trim()
    },
    query() {
      return `symbolName === "${this.name || this.$slots.default[0].text.trim()}"`
    }
  }
}
</script>
