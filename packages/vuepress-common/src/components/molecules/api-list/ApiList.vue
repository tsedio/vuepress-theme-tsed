<template>
  <div class="bg-gray-lighter pb-4 p-5 mb-10 rounded-small">
    <div class="-mx-2">
      <ul class="reset-list flex flex-wrap" v-if="loaded">
        <li class="w-full sm:w-1/3 lg:w-1/4 mb-2 px-2" v-for="item in symbols">
          <ApiSymbol class="w-full px-2 py-1" theme="list" :item="item"></ApiSymbol>
        </li>
      </ul>
      <span v-else class="w-full sm:w-1/3 lg:w-1/4 mb-2 px-2">
        Loading in progress...
      </span>
    </div>
  </div>
</template>
<script>
import ApiSymbol from '../api-symbol/ApiSymbol'
import {ApiMixin} from '../../../mixins/ApiMixin'

export default {
  name: 'ApiList',
  mixins: [ApiMixin],
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

  data() {
    return {
      loaded: false
    }
  },
  computed: {
    symbols() {
      if (this.items) {
        return this.items
      }

      const query = this.query

      return this.filterSymbols(query)
    }
  },

  async mounted() {
    this.loaded = await this.loadApi()
  }
}
</script>
