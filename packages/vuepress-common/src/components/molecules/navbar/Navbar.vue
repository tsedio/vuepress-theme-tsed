<template>
  <header class="px-5 flex items-center navbar-box-shadow" :class="{'sticky': sticky}" ref="navbar">
    <div class="m-0 p-0 text-xl text-normal mr-8">
      <router-link :to="href">
        <img class="logo"
             v-if="logoSrc"
             :src="logoSrc"
             :alt="siteTitle">
        <span ref="siteName"
              v-if="siteTitle && !logoSrc"
              v-html="htmlTitle || siteTitle">
        </span>
      </router-link>
    </div>
    <div class="flex-1">
      <ul class="flex items-center h-full font-bold text-gray-dark">
        <li class="py-4 mx-1">
          <a class="px-3 p-1 hover:bg-blue hover:text-white transition-all rounded-small cursor-pointer">Getting started</a>
        </li>
        <li class="py-4 mx-1"><a class="px-3 p-1 hover:bg-blue hover:text-white transition-all rounded-small cursor-pointer">Configuration</a></li>
        <li class="py-4 mx-1"><a class="px-3 p-1 hover:bg-blue hover:text-white transition-all rounded-small cursor-pointer">Documentation</a></li>
      </ul>
    </div>
    <div class="flex items-center h-full">
      <ul class="flex items-center h-full text-gray-dark">
        <li class="py-4 mx-1"><a class="px-3 p-1 hover:bg-blue hover:text-white transition-all rounded-small cursor-pointer">Versions</a></li>
      </ul>
    </div>
    <div class="flex items-center h-full">
      <IconLink
          v-for="item of socialItems"
          class="flex align-center justify-center"
          :title="item.title"
          :href="item.url"
          :icon="item.icon" />
    </div>
    <div class="flex items-center h-full">
      <input class="py-1 px-3 border-2 border-gray-lighter bg-gray-lighter ml-5 rounded-small text-gray-darker focus:border-blue transition-all" placeholder="Search"/>
    </div>
  </header>
</template>
<script>
// import AlgoliaSearchBox from '../algolia-search/AlgoliaSearchBox'
import { getCss, isExternal, isMailto, isTel, scrollPosition, throttle } from '@tsed/vuepress-common'
// import SearchBox from '../search/SearchBox.vue'
// import SidebarButton from '../sidebar/SidebarButton.vue'
// import NavLinks from './NavLinks.vue'
import IconLink from './IconLink.vue'

const SOCIALS = [
  { type: 'github', title: 'Github', icon: 'bxl-github' },
  { type: 'gitter', title: 'Gitter', icon: 'bx-message-rounded-dots' },
  { type: 'twitter', title: 'Twitter', icon: 'bxl-twitter' },
  { type: 'stackoverflow', title: 'StackOverflow', icon: 'bxl-stack-overflow' },
  { type: 'sponsor', title: 'Sponsor', icon: 'bxs-heart' }
]

export default {
  name: 'Navbar',
  components: {
    IconLink,
    // SidebarButton,
    // NavLinks,
    // SearchBox,
    // AlgoliaSearchBox
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
    this.init()
  },

  computed: {
    // algolia () {
    //   return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    // },
    //
    // isAlgoliaSearch () {
    //   return this.algolia && this.algolia.apiKey && this.algolia.indexName
    // },

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
    isExternal,
    isMailto,
    isTel,
    init () {
      const oBody = document.querySelector('body')
      const navHeight = parseInt(getCss(this.$el, 'height'))
      // let nLastPos = scrollPosition();

      this.onScroll(oBody, navHeight)

      window.addEventListener(
          'scroll',
          throttle(() => {
            this.onScroll(oBody, navHeight)
          }, 160)
      )
    },

    onScroll (oBody, navHeight) {
      const nScrollTop = scrollPosition()

      if (nScrollTop > navHeight) {
        this.sticky = true
        oBody.classList.add('sticky')
      } else {
        this.sticky = false
        oBody.classList.remove('sticky')
      }


      // if (!bScrollDown && nScrollTop > navHeight) {
      //  this.stickyHidden = false;
      //  oBody.classList.add('sticky');
      // } else if (bScrollDown && nScrollTop > navHeight) {
      //  this.stickyHidden = false;
      // } else {
      //  this.sticky = false;
      //  this.stickyHidden = false;
      //  oBody.classList.remove('sticky');
      //}

      return nScrollTop
    }
  }
}
</script>
<style>
.navbar-box-shadow {
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, .04)
}
</style>