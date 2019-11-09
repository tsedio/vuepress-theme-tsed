<template>
  <ul class="api-list">
    <li class="api-item" v-for="item in symbols">
      <ApiSymbol :item="item"></ApiSymbol>
    </li>
  </ul>
</template>
<script>
  import { findSymbols } from '../../utils/api'
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
      api () {
        if (this.query) {
          return this.$site.themeConfig.api
        }
      },
      symbols () {
        if (this.items) {
          return this.items
        }

        if (this.query && this.api) {
          return findSymbols(this.api.modules, this.query)
        }

        return []
      }
    },

    mounted () {

    }
  }
</script>
<style lang="scss">
  .api-list {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;

    li {
      flex: 0 0 33.3333%;
      font-size: 14px;
      margin: 2px 0;
      line-height: 14px;
      padding: 0;
      overflow: hidden;
      min-width: 220px;
      text-overflow: ellipsis;
      white-space: nowrap;

      a {
        &.symbol-container {
          margin-bottom: 8px;
          padding: 5px 16px;
          border-radius: 5px;
          display: block;

          &:hover {
            text-decoration: none;
          }
        }

        .symbol {
          position: relative;
          top: -1px;
          left: 0;
        }
      }
    }

    > p {
      display: none;
    }
  }
</style>
