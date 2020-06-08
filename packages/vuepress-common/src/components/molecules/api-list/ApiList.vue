<template>
  <div class="-mx-2">
    <ul class="reset-list flex flex-wrap">
      <li class="w-full sm:w-1/3 lg:w-1/4 mb-3 px-2" v-for="item in symbols">
        <ApiSymbol theme="list" :item="item"></ApiSymbol>
      </li>
    </ul>
  </div>
</template>
<script>
  import ApiSymbol from '../api-symbol/ApiSymbol'

  export default {
    name: 'ApiList',
    components: {
      ApiSymbol
    },
    props: {
      items: {
        type: Array,
        default: undefined
      },
      query: {
        type: String,
        default: undefined
      }
    },

    computed: {
      symbols () {
        if (this.items) {
          return this.items
        }

        const query = this.query || this.$slots.default && this.$slots.default.map(({ text }) => text).join(' ').trim() || ''
        return this.$filterSymbols(query)
      }
    }
  }
</script>
