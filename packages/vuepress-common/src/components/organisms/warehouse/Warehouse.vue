<template>
  <div class="bg-gray-200 pb-5">
    <div class="pt-16 pb-16 bg-blue-900 sm:pb-24">
      <div class="px-4 pb-10 text-center sm:px-6 lg:px-8">
        <h1 class="mt-4 text-4xl font-extrabold leading-10 text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          Explore plugins
        </h1>
        <p class="max-w-xl mx-auto mt-5 text-lg leading-7 sm:text-xl text-gray-100">
          Discover our list of plugins to extends your Ts.ED project.
          <br/>Created by the Ts.ED team and community.
        </p>
      </div>
    </div>

    <div class="-mt-15">
      <div class="relative z-10 max-w-screen-xl mb-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <WarehouseStats :plugins="plugins.length" :downloads="downloads" :maintainers="maintainers"/>
        </div>
      </div>
    </div>

    <div class="max-w-site-xxl m-auto px-5">
      <div v-if="isActive" class="text-center text-4xl text-gray-darker p-5">
        Loading...
      </div>
      <div v-else>
        <div class="container px-4 pt-12 pb-8 mx-auto sm:px-0">
          <!-- Search -->
          <div class="flex rounded-small shadow-sm sm:max-w-sm sm:mx-auto">
            <label class="relative flex-1">
              <input
                  ref="searchPlugin"
                  v-model="q"
                  type="search"
                  aria-label="Search"
                  class="block w-full py-3 pl-3 pr-3 text-base leading-6 placeholder-gray-700 transition duration-150 ease-in-out border appearance-none md:pr-10 border-gray-400 rounded-tl-md rounded-bl-md focus:ring-3 focus:ring-blue-300 focus:ring-opacity-50 focus:outline-none focus:placeholder-gray-600 sm:flex-1"
                  placeholder="Search a module (name, category, username, etc.)"
              >
            </label>
            <button type="button" aria-label="search"
                    class="px-6 py-3 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-gray-400 hover:bg-grey-light focus:bg-grey-light rounded-tr-md rounded-br-md focus:outline-none focus:ring-3 focus:ring-green-300 focus:ring-opacity-50 sm:mt-0 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
              <BxIcon name="search" alt="Search"/>
            </button>
          </div>

          <!-- Categories -->
          <div class="flex pt-6 space-x-2 overflow-x-auto sm:flex-wrap sm:justify-center">
            <button
                v-for="category of categories"
                :key="category"
                type="button"
                :aria-label="category"
                class="px-4 py-2 mb-2 text-sm rounded cursor-pointer focus:outline-none"
                :class="[ selectedCategory === category ? 'bg-blue-active text-white' : 'text-blue-900 bg-gray-400 hover:bg-gray-300 focus:bg-gray-300']"
                @click="toggleCategory(category)"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="flex flex-col items-center justify-between sm:flex-row">
          <!-- Clear filters -->
          <div class="mb-4 text-blue-900">
            {{ filteredPlugins.length }} plugin{{ filteredPlugins.length !== 1 ? 's' : '' }} found
            <template v-if="selectedCategory || q">
              <div>
                Filter{{ selectedCategory && q ? 's' : '' }}:
                <b>{{ selectedCategory }}</b>{{ selectedCategory && q ? ', ' : '' }}<b>{{ q }}</b>
                <a href="/" class="hover:text-grey-darkest" @click.prevent="clearFilters">(<u>clear
                  filter{{ selectedCategory && q ? 's' : '' }}</u>)</a>
              </div>
            </template>
          </div>
          <div v-show="!q" class="flex items-center mb-4 text-blue-900">
            <label for="options-menu" class="mr-3" @click="sortByMenuVisible = !sortByMenuVisible">Sort by</label>

            <div class="relative w-28">
              <button
                  type="button"
                  :aria-label="`change sort`"
                  class="flex items-center justify-center h-full w-full p-1 px-2 border rounded-l-md hover:bg-gray-400 focus:bg-gray-400 focus:outline-none hover:border-gray-light"
                  :class="sortByBtnClass"
                  @click="sortByMenuVisible = !sortByMenuVisible"
              >
                {{ sortByComp.label }}
              </button>
              <div v-show="sortByMenuVisible" class="absolute right-0 z-10 origin-top-right rounded-md shadow-lg">
                <div id="options-menu" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button
                      v-for="(option, key) in sortByOptions"
                      :key="key"
                      type="button"
                      :aria-label="`sort by ${key}`"
                      class="flex items-center justify-center p-1 px-2 bg-white shadow-xs w-28 hover:bg-gray-200 focus:text-gray-700 text-blue-900 focus:outline-none rounded-b-md"
                      @click="selectSortBy(key)"
                  >
                    {{ option.label }}
                  </button>
                </div>
              </div>
            </div>
            <div class="relative">
              <button
                  type="button"
                  :aria-label="orderBy === 'asc' ? 'sort ascending' : 'sort descending'"
                  class="flex items-center justify-center h-full w-full p-1 px-2 border border-l-0 hover:bg-gray-400 focus:bg-gray-400 focus:outline-none rounded-r-md"
                  @click="toggleOrderBy">
                <BxIcon :name="orderBy ? 'sort-up': 'sort-down'" class="fill-current"/>&nbsp;
              </button>
            </div>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="plugin of pageFilteredPlugins" :key="plugin.name"
               class="relative flex flex-col overflow-hidden transition-transform duration-150 ease-in-out transform bg-white rounded-md shadow hover:shadow-lg hover:-translate-y-1">
            <LazyHydrate when-visible>
              <CardPlugin v-bind="plugin"/>
            </LazyHydrate>
          </div>
          <Observer @intersect="intersectedPluginsLoading"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Fuse from 'fuse.js/dist/fuse.basic.esm'
import LazyHydrate from 'vue-lazy-hydration'
import BxIcon from '../../atoms/icons/BxIcon'
import CardPlugin from '../../molecules/card-plugin/CardPlugin'
import Observer from '../../molecules/observer/Observer'
import WarehouseStats from '../../molecules/warehouse/WarehouseStats'

const sort = (a, b, asc) => asc ? a - b : b - a
const ORDERS = {
  DESC: 'desc',
  ASC: 'asc'
}
const FIELDS = {
  DOWNLOADS: 'downloads',
  STARS: 'stars'
}
const sortFields = {
  [FIELDS.DOWNLOADS]: {
    label: 'Downloads'
  },
  [FIELDS.STARS]: {
    label: 'Stars'
  }
}

const MODULE_INCREMENT_LOADING = 12

export default {
  name: 'Warehouse',
  components: {
    BxIcon,
    WarehouseStats,
    LazyHydrate,
    CardPlugin,
    Observer
  },
  directives: {
    focus: {
      // directive definition
      inserted (el) {
        el.focus()
      }
    }
  },
  props: {
    url: {
      type: String,
      required: true
    },
    initialPlugins: {
      type: Array,
      default: () => []
    },
    session: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      q: '',
      orderBy: ORDERS.DESC,
      sortBy: 'downloads',
      sortByMenuVisible: false,
      selectedCategory: null,
      isActive: false,
      plugins: this.getInitialValue(),
      maintainers: 0,
      downloads: 0,
      categories: [],
      pluginLoaded: MODULE_INCREMENT_LOADING
    }
  },
  computed: {
    filteredPlugins () {
      let plugins = this.plugins
      if (this.q) {
        plugins = this.fuse.search(this.q).map(r => r.item)
      } else {
        // Sort only if no search
        plugins.sort((a, b) => sort(a[this.sortBy], b[this.sortBy], this.orderBy === ORDERS.ASC))
      }

      if (this.selectedCategory) {
        plugins = plugins.filter(plugin => plugin.category === this.selectedCategory || (plugin.tags || []).includes(this.selectedCategory))
      }

      return plugins
    },
    pageFilteredPlugins () {
      const filteredPlugins = Object.assign([], this.filteredPlugins)
      return filteredPlugins.splice(0, this.pluginLoaded)
    },
    sortByComp () {
      return sortFields[this.sortBy]
    },
    sortByOptions () {
      const options = {}
      for (const key in sortFields) {
        if (key === this.sortBy) {
          continue
        }
        options[key] = {
          ...sortFields[key]
        }
      }
      return options
    },
    sortByBtnClass () {
      return this.sortByMenuVisible ? 'rounded-bl-none border-b-grey-light' : ''
    }
  },
  watch: {
    selectedCategory () {
      this.syncURL()
    },
    q () {
      this.syncURL()
    },
    orderBy () {
      this.syncURL()
    },
    sortBy () {
      this.syncURL()
    }
  },
  async mounted () {
    await this.getPlugins()

    const fuseOptions = {
      threshold: 0.1,
      keys: [
        'name',
        'npm',
        'category',
        'tags',
        'maintainers.username',
        'description',
        'repository'
      ]
    }
    const index = Fuse.createIndex(fuseOptions.keys, this.plugins)
    this.fuse = new Fuse(this.plugins, fuseOptions, index)

    const { q, sortBy, orderBy } = this.$route.query

    if (q) {
      this.q = q
    }

    if (sortBy) {
      this.sortBy = sortBy
    }

    if (orderBy) {
      this.orderBy = orderBy
    }
  },
  methods: {
    getInitialValue () {
      if (this.session) {
        try {
          return JSON.parse(sessionStorage.getItem('tsed_plugins')) || this.initialPlugins
        } catch (er) {
          return
        }
      }

      return this.initialPlugins
    },

    async getPlugins () {
      if (!this.plugins.length && this.plugins === this.initialPlugins) {
        this.isActive = true

        const { data: plugins } = await axios.get(this.url)
        this.plugins = plugins

        sessionStorage.setItem('tsed_plugins', JSON.stringify(plugins))

        this.isActive = false
      }

      this.updateMetadata()
    },

    updateMetadata () {
      const { maintainers, categories, downloads } = this.plugins.reduce((meta, plugin) => {
        if (Array.isArray(plugin.maintainers)) {
          plugin.maintainers.forEach(({ email }) => {
            meta.maintainers.add(email)
          })
        }

        if (Array.isArray(plugin.tags)) {
          (plugin.tags).forEach((tag) => {
            meta.categories.add(tag)
          })
        }

        meta.categories.add(plugin.category)
        meta.downloads += (plugin.downloads || 0)


        return meta
      }, { categories: new Set(), maintainers: new Set(), downloads: 0 })

      this.downloads = downloads
      this.categories = categories
      this.maintainers = maintainers.size
    },

    toggleCategory (category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = null
        return
      }
      this.selectedCategory = category
    },
    clearFilters () {
      this.selectedCategory = null
      this.q = null
      this.pluginLoaded = MODULE_INCREMENT_LOADING
    },
    syncURL () {
      const url = this.$route.path
      let query = ''
      this.resetModuleLoaded()
      if (this.q) {
        query += `?q=${this.q}`
      }
      if (this.orderBy !== FIELDS.DESC) {
        query += `${query ? '&' : '?'}orderBy=${this.orderBy}`
      }
      if (this.sortBy !== FIELDS.DOWNLOADS) {
        query += `${query ? '&' : '?'}sortBy=${this.sortBy}`
      }
      if (this.selectedCategory) {
        query += `#${this.selectedCategory}`
      }
      window.history.pushState('', '', `${url}${query}`)
    },
    toggleOrderBy () {
      this.orderBy = (this.orderBy === ORDERS.ASC) ? ORDERS.DESC : ORDERS.ASC
    },
    selectSortBy (field) {
      this.sortBy = field
      this.sortByMenuVisible = false
    },
    intersectedPluginsLoading () {
      this.pluginLoaded += MODULE_INCREMENT_LOADING
    },
    resetModuleLoaded () {
      this.pluginLoaded = MODULE_INCREMENT_LOADING
    },
    searchFocusListener (event) {
      // Add `/` shortcut for search input only if not already focused
      if (event.keyCode === 47 && !(event.target instanceof HTMLInputElement)) {
        event.preventDefault()
        this.focusSearchInput()
      }
    },
    focusSearchInput () {
      this.$refs.searchPlugin.focus()
    }
  }
}
</script>