<template>
  <div class="api">

    <div class="api-nav">
      <Select label="Type" @change="onTypeChange" :items="types"></Select>
      <Select label="Status" @change="onStatusChange" :items="status"></Select>
      <div class="form-search api-search">
        <input placeholder="Filter" v-model="keyword">
        <i class="material-icons">search</i>
      </div>
    </div>

    <div v-for="module in modules" v-if="module.symbols.length">
      <h2>{{module.name}}</h2>

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
    </div>


  </div>
</template>
<script>
  import Select from '../select/Select';

  export default {
    name: 'Api',
    components: {
      Select
    },

    data() {
      return {
        currentStatus: '',
        currentType: '',
        keyword: ''
      };
    },

    computed: {
      modules() {

        const modules = this.$site.themeConfig.api.modules;

        return Object.keys(modules).reduce((acc, key) => {

          const symbols = modules[key]
            .symbols
            .filter((symbol) => {

              if (!!this.currentType) {
                if (symbol.symbolType !== this.currentType) {
                  return false;
                }
              }

              // if (!!this.currentStatus) {
              //  return symbol.symbolStatus === this.currentType;
              // }

              if (!!this.keyword) {
                return symbol.symbolName.toLowerCase().indexOf(this.keyword.toLocaleLowerCase()) > -1;
              }

              return true;
            });

          acc[key] = { ...modules[key], symbols };

          return acc;
        }, {});
      },

      status() {
        return this.$site.themeConfig.api.symbolStatus;
      },

      types() {
        return this.$site.themeConfig.api.symbolTypes;
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
      },

      onTypeChange(item) {
        this.currentType = item.value;
      },

      onStatusChange() {
        this.currentStatus = item.value;
      }
    }
  };
</script>
<style lang="scss" src="./Api.scss"></style>