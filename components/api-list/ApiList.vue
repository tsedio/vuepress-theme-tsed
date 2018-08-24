<template>
  <ul class="api-list">
    <li class="api-item" v-for="symbol in module.symbols">
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
  export default {
    name: 'ApiList',
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
      symbols() {

        if (this.items) {
          return this.items;
        }

        if (this.query) {
          return find(this.$site.themeConfig.api.modules, this.query);
        }

        return [];
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
        return symbol.labels.find(label => label.key === 'deprecated');
      }
    }
  };

  function find(modules, query) {
    const compile = (query, scope) => {
      query = Object.keys(scope).reduce((q, key) =>
          q.replace(new RegExp('\\b' + key + '\\b', 'gi'), JSON.stringify(scope[key]))
        , query);

      return eval(query);
    };

    return modules.reduce((acc, module) =>
      acc.concat(module.symbols.filter((symbol) =>
        compile(query, { module: module.name, ...symbol, labels: symbol.status })
      )), []);
  }
</script>