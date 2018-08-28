<template>
  <ul class="api-list">
    <li class="api-item" v-for="symbol in symbols">
      <a :href="symbolLink(symbol)"
         :class="symbolLinkClass(symbol)"
         :title="symbol.symbolName">

        <span :class="'symbol ' + symbol.symbolType"></span>

        <template v-if="symbolIsDreprecated(symbol)">
          <del>{{symbol.symbolName}}</del>
        </template>

        <template v-else>
          {{symbol.symbolName}}
        </template>
      </a>
    </li>
  </ul>
</template>
<script>
  import { getApi } from '../../utils/api';

  export default {
    name: 'ApiList',
    props: {
      items: {
        type: Array,
        default: undefined
      },
      query: {
        api: undefined,
        type: String,
        default: undefined
      }
    },

    data() {
      return {
        api: null
      };
    },

    computed: {
      symbols() {

        if (this.items) {
          return this.items;
        }

        if (this.query && this.api) {
          return find(this.api.modules, this.query);
        }

        return [];
      }
    },

    mounted() {
      if (this.query) {
        getApi(this.$site.themeConfig.apiUrl).then((api) => {
          this.api = api;
        });
      }
    },

    methods: {
      symbolLink(symbol) {
        return `${symbol.path}.html`;
      },

      symbolLinkClass(symbol) {
        return [
          'symbol-container',
          'symbol-type-' + symbol.symbolType
        ];
      },

      symbolIsDreprecated(symbol) {
        return symbol.status.find(status => status.key === 'deprecated');
      }
    }
  };

  function find(modules, query) {
    const compile = (query, scope) => {
      query = Object.keys(scope).reduce((q, key) =>
          q.replace(new RegExp('\\b' + key + '\\b', 'gi'), `scope.${key}`)
        , query);

      try {
        return eval(query);
      } catch (er) {
        throw 'Bad query: ' + query;
      }
    };

    return Object.keys(modules).reduce((acc, moduleName) => {
      const module = modules[moduleName];

      return acc.concat(module.symbols.filter((symbol) =>
        compile(query, { module: module.name, ...symbol, labels: symbol.status })
      ));
    }, []);

  }
</script>