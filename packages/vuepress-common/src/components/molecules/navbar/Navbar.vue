<template>
  <header class="navbar px-5 flex items-center navbar-box-shadow fixed top-0 fixed top-0 inset-x-0 h-16 bg-white"
          ref="navbar">
    <div class="flex h-full items-center justify-center md:hidden">
      <slot name="sidebar-before"/>
    </div>
    <div class="flex h-full items-center justify-center m-0 p-0  mr-8">
      <router-link :to="href">
        <img class="logo"
             v-if="logoSrc"
             :src="logoSrc"
             :alt="siteTitle">
        <span class="text-xl text-normal" ref="siteName"
              v-if="siteTitle && !logoSrc"
              v-html="htmlTitle || siteTitle">
        </span>
      </router-link>
    </div>
    <div class="flex-1 h-full">
      <NavLinks :links="leftLinks" class="font-bold hidden lg:flex h-full"/>
    </div>
    <div class="flex h-full">
      <NavLinks class="hidden sm:flex" :links="rightLinks"/>
    </div>
    <div class="flex items-center h-full">
      <IconLink
          v-for="item of socialItems"
          class="flex align-center justify-center lg:text-lg py-4"
          :key="item.title"
          :title="item.title"
          :show-title="item.showTitle"
          :href="item.url"
          :icon="item.icon">
        <span v-if="item.showTitle" class="hidden sm:block text-sm font-bold ml-1 mr-1">{{ item.title }}</span>
      </IconLink>
    </div>
    <div class="flex items-center h-full">
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox class="py-4" v-else-if="isSearchBox"/>
    </div>
  </header>
</template>
<script>
import { SOCIALS } from '../../../utils/socials/socials'
import AlgoliaSearchBox from '../algolia-search-box/AlgoliaSearchBox'
import IconLink from '../link/IconLink.vue'
import SearchBox from '../search-box/SearchBox'
import NavLinks from './NavLinks.vue'

export default {
  name: 'Navbar',
  components: {
    NavLinks,
    IconLink,
    SearchBox,
    AlgoliaSearchBox
  },

  props: {
    logoSrc: {
      type: String,
      default: undefined
    },
    href: {
      type: String,
      default: undefined
    },
    siteTitle: {
      type: String,
      default: undefined
    },
    htmlTitle: {
      type: String,
      default: undefined
    },
    repoUrl: {
      type: String,
      default: undefined
    },
    socialUrls: {
      type: Object,
      default: () => ({})
    },
    items: {
      type: Array,
      default: () => []
    },
    algolia: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      sticky: false,
      stickyHidden: false,
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    // this.init()
  },

  computed: {
    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
    isSearchBox(){
      return this.$site.themeConfig.search !== false
    },
    leftLinks () {
      return this.items.filter((item) => item.position !== 'right')
    },
    rightLinks () {
      return this.items.filter((item) => item.position === 'right')
    },
    socialItems () {
      const { socialUrls = {}, repoUrl } = this

      return SOCIALS
          .map((item) => {
            if (item.type === 'github' && repoUrl) {
              return {
                ...item,
                url: repoUrl
              }
            }

            if (socialUrls[`${item.type}Url`]) {
              return {
                ...item,
                url: socialUrls[`${item.type}Url`]
              }
            }
            return false
          })
          .concat(socialUrls.additionalItems || [])
          .filter(Boolean)
    }
  },

  methods: {
    init () {
      // const oBody = document.querySelector('body')
      // const navHeight = parseInt(getCss(this.$el, 'height'))
      // // let nLastPos = scrollPosition();
      //
      // this.onScroll(oBody, navHeight)
      //
      // window.addEventListener(
      //     'scroll',
      //     throttle(() => {
      //       this.onScroll(oBody, navHeight)
      //     }, 160)
      // )
    }

    // onScroll (oBody, navHeight) {
    //   const nScrollTop = scrollPosition()
    //
    //   if (nScrollTop > navHeight) {
    //     this.sticky = true
    //     oBody.classList.add('sticky')
    //   } else {
    //     this.sticky = false
    //     oBody.classList.remove('sticky')
    //   }
    //
    //   return nScrollTop
    // }
  }
}
</script>
<style>
.navbar {
  z-index: 100;
}

.navbar-box-shadow {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .04)
}
</style>