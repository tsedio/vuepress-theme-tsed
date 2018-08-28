<template>
  <div class="api">

    <template v-if="api">
      <div class="api-nav">
        <Select label="Type" @change="onTypeChange" :items="api.symbolTypes"></Select>
        <Select label="Status" @change="onStatusChange" :items="api.symbolStatus"></Select>
        <div class="form-search api-search">
          <input placeholder="Filter" v-model="keyword" @change="onKeywordsChange">
          <i class="material-icons">search</i>
        </div>
      </div>

      <div v-for="module in modules" v-if="module.symbols.length">
        <h2>{{module.name}}</h2>

        <ApiList :items="module.symbols"></ApiList>
      </div>
    </template>

  </div>
</template>
<script>
  import { getApi } from '../../utils/api';
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
        api: undefined,
        currentStatus: '',
        currentType: '',
        keyword: ''
      };
    },

    computed: {
      modules() {
        const { modules } = this.api;

        if (!modules) {
          return {};
        }

        return Object.keys(modules).reduce((acc, key) => {

          const symbols = modules[key]
            .symbols
            .filter((symbol) => {

              if (!!(this.currentType && symbol.symbolType !== this.currentType)) {
                return false;
              }

              if (!!(this.currentStatus && symbol.status.indexOf(this.currentStatus))) {
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
      }
    },

    mounted() {
      getApi(this.$site.themeConfig.apiUrl).then((api) => {
        this.api = api;
      });
    },

    methods: {

      onTypeChange(item) {
        this.currentType = item.value;

        if (this.$ga) {
          this.$ga.event({
            eventCategory: 'api',
            eventAction: 'search',
            eventLabel: 'type',
            eventValue: this.currentType
          });
        }
      },

      onStatusChange(item) {
        this.currentStatus = item.value;

        if (this.$ga) {
          this.$ga.event({
            eventCategory: 'api',
            eventAction: 'search',
            eventLabel: 'status',
            eventValue: this.currentStatus
          });
        }
      },

      onKeywordsChange(evt) {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: 'api',
            eventAction: 'search',
            eventLabel: 'keywords',
            eventValue: evt.target.value
          });
        }
      }
    }
  };
</script>
<style lang="scss" src="./Api.scss"></style>