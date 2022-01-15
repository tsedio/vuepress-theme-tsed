<template>
  <a :href="link"
     :class="`reset-link symbol-container -${theme} ${deprecated ? 'opacity-50' : ''}`"
     :title="name">
    <span><span :class="`symbol ${type}`"/></span>
    <span :class="`overflow-hidden truncate ${deprecated ? 'line-through' : ''}`">
      {{ name }}
    </span>
  </a>
</template>

<script>
import {ApiMixin} from '../../../mixins/ApiMixin'

export default {
  name: 'ApiSymbol',
  mixins: [ApiMixin],
  props: {
    item: {
      type: Object,
      default: () => ({
        status: []
      })
    },
    theme: {
      type: String,
      default: 'bubble'
    }
  },

  computed: {
    name() {
      return this.item.symbolName
    },
    type() {
      return this.item.symbolType
    },
    link() {
      return this.getApiLink(this.item)
    },
    deprecated() {
      return this.item.status?.find(status => status.key === 'deprecated' || status === 'deprecated')
    }
  }
}
</script>
<style lang="css" src="./ApiSymbol.css"></style>
