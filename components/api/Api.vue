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

      <ApiList :items="modules.symbols"></ApiList>
    </div>


  </div>
</template>
<script>
  import ApiList from '../api-list/ApiList';
  import Select from '../select/Select';

  export default {
    name: 'Api',
    components: {
      ApiList,
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

              if (!!this.currentType && symbol.symbolType !== this.currentType) {
                return false;
              }

              if (!!this.currentStatus && symbol.symbolStatus !== this.currentType) {
                return false;
              }

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