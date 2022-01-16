<template>
  <div class="api">
    <div v-if="!loaded" class="text-center text-4xl text-gray-darker p-5">
      <BxIcon name="bx-radio-circle" class="bx-burst"/> Loading...
    </div>
    <template v-if="loaded">
      <div class="mb-10 p-5 bg-gray-lighter rounded-small">
        <div class="flex items-center">
          <div class="w-full md:w-1/3 pr-2">
            <Select bg-color="white"
                    :symbol="true"
                    class="w-full"
                    label="Type"
                    @change="onTypeChange"
                    :items="api.symbolTypes"/>
          </div>
          <div class="w-full md:w-1/3 px-2">
            <Select bg-color="white"
                    class="w-full"
                    label="Status"
                    @change="onStatusChange"
                    :items="api.symbolStatus"/>
          </div>
          <div class="w-full md:w-1/3 pl-2">
            <InputText bg-color="white" class="w-full" placeholder="Filter" v-model="keyword"
                       @change="onKeywordsChange">
              <template #input-left>
                <BxIcon name="bx-search-alt" class="text-md pr-1 -ml-1"></BxIcon>
              </template>
            </InputText>
          </div>
        </div>
      </div>

      <div v-for="module in modules" v-if="module.symbols.length" :key="module.index">
        <h2>{{ module.name }}</h2>
        <ClientOnly>
          <ApiList :items="module.symbols"></ApiList>
        </ClientOnly>
      </div>
    </template>
  </div>
</template>
<script>
import BxIcon from '../../atoms/icons/BxIcon'
import ApiList from '../../molecules/api-list/ApiList'
import InputText from '../../molecules/input-text/InputText'
import Select from '../../molecules/select/Select'
import {ApiMixin} from '../../../mixins/ApiMixin'

export default {
  name: 'Api',
  mixins: [ApiMixin],
  components: {
    BxIcon,
    ApiList,
    InputText,
    Select
  },

  data() {
    return {
      currentStatus: '',
      currentType: '',
      keyword: '',
      loaded: false,
      api: {},
      modules: []
    }
  },
  async mounted() {
    this.loaded = await this.loadApi()
    this.api = this.getApi()
    this.modules = this.getApiModules()
  },
  methods: {
    onTypeChange(item) {
      this.currentType = item.value

      if (this.$ga) {
        this.$ga.event({
          eventCategory: 'api',
          eventAction: 'search',
          eventLabel: 'type',
          eventValue: this.currentType
        })
      }
    },

    onStatusChange(item) {
      this.currentStatus = item.value

      if (this.$ga) {
        this.$ga.event({
          eventCategory: 'api',
          eventAction: 'search',
          eventLabel: 'status',
          eventValue: this.currentStatus
        })
      }
    },

    onKeywordsChange(evt) {
      if (this.$ga) {
        this.$ga.event({
          eventCategory: 'api',
          eventAction: 'search',
          eventLabel: 'keywords',
          eventValue: evt.target.value
        })
      }
    }
  }
}
</script>
