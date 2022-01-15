<template>
  <ApiSymbol :item="loaded && item.length ? item[0] : {symbolName: placeholder}"/>
</template>
<script>
import ApiSymbol from './ApiSymbol'
import {ApiMixin} from '../../../mixins/ApiMixin'

export default {
  name: 'ApiSymbolQuery',
  mixins: [ApiMixin],
  components: {
    ApiSymbol
  },
  props: {
    query: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loaded: false
    }
  },
  computed: {
    item() {
      return this.filterSymbols(this.query)
    }
  },
  async mounted() {
    this.loaded = await this.loadApi();
  }
}
</script>
