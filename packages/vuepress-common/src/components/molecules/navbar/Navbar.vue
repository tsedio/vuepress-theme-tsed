<template>
  <header class="px-5 flex items-center bg-blue" :class="{'sticky': sticky}" ref="navbar">
Navbar
  </header>
</template>
<script>
// import AlgoliaSearchBox from '../algolia-search/AlgoliaSearchBox'
import { getCss, scrollPosition, throttle } from '@tsed/vuepress-common'
// import SearchBox from '../search/SearchBox.vue'
// import SidebarButton from '../sidebar/SidebarButton.vue'
// import NavLinks from './NavLinks.vue'

export default {
  name: 'Navbar',
  components: {
    // SidebarButton,
    // NavLinks,
    // SearchBox,
    // AlgoliaSearchBox
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
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
            ? repo
            : `https://github.com/${repo}`
      }
    },
    gitterLink () {
      const { gitterUrl } = this.$site.themeConfig

      if (gitterUrl) {
        return gitterUrl
      }
    },
    twitterLink () {
      const { twitterUrl } = this.$site.themeConfig

      if (twitterUrl) {
        return twitterUrl
      }
    },
    stackoverflowLink () {
      const { stackoverflowUrl } = this.$site.themeConfig

      if (stackoverflowUrl) {
        return stackoverflowUrl
      }
    },
    sponsorLink () {
      const { sponsorUrl } = this.$site.themeConfig

      if (sponsorUrl) {
        return sponsorUrl
      }
    }
  },

  methods: {
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