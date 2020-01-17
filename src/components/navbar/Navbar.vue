<template>
  <header class="navbar" :class="{'sticky': sticky}" ref="navbar">
    <div class="container">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

      <router-link :to="$localePath" class="home-link">
        <img class="logo"
             v-if="$site.themeConfig.logo"
             :src="$withBase($site.themeConfig.logo)"
             :alt="$siteTitle">
        <span ref="siteName"
              class="site-name"
              v-if="$siteTitle"
              :class="{ 'can-hide': $site.themeConfig.logo }">
        {{this.$site.themeConfig.shortTitle || this.$siteTitle }}
      </span>
      </router-link>

      <div class="links">
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
        <SearchBox v-else-if="$site.themeConfig.search !== false"/>
        <NavLinks class="can-hide"/>

        <div class="links-external">
          <div class="links-external-item" v-if="twitterLink">
            <a :href="twitterLink"
               class="twitter-link"
               title="Twitter"
               target="_blank"
               rel="noopener noreferrer">
              <svg aria-hidden="true"
                   data-prefix="fab"
                   data-icon="twitter"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                   class="svg-inline--fa fa-twitter fa-w-16 fa-2x">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  class=""></path>
              </svg>
            </a>
          </div>

          <div class="links-external-item" v-if="repoLink">
            <a :href="repoLink"
               title="Github"
               class="repo-link"
               target="_blank"
               rel="noopener noreferrer">

              <svg aria-hidden="true" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512" data-fa-i2svg="" class="svg-inline--fa fa-github fa-w-16">
                <path fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
          </div>

          <div class="links-external-item" v-if="stackoverflowLink">
            <a :href="stackoverflowLink"
               title="Stackoverflow"
               class="stackoverflow-link"
               target="_blank"
               rel="noopener noreferrer">

              <svg class="svg-inline--fa fa-stack-overflow fa-w-12"
                   aria-hidden="true"
                   data-prefix="fab"
                   data-icon="stack-overflow"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M293.7 300l-181.2-84.5 16.7-36.5 181.3 84.7-16.8 36.3zm48-76L188.2 95.7l-25.5 30.8 153.5 128.3 25.5-30.8zm39.6-31.7L262 32l-32 24 119.3 160.3 32-24zM290.7 311L95 269.7 86.8 309l195.7 41 8.2-39zm31.6 129H42.7V320h-40v160h359.5V320h-40v120zm-39.8-80h-200v39.7h200V360z"></path>
              </svg>
            </a>
          </div>

          <div class="links-external-item" v-if="gitterLink">
            <a :href="gitterLink"
               class="gitter-link"
               title="Gitter tchat room"
               target="_blank"
               rel="noopener noreferrer">
              <svg version="1.1"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlns:xlink="http://www.w3.org/1999/xlink"
                   viewBox="0 0 25 25"
                   class="svg-inline--fa fa-gitter fa-w-16">
                <rect x="15" y="5" width="2" height="10"></rect>
                <rect x="10" y="5" width="2" height="20"></rect>
                <rect x="5" y="5" width="2" height="20"></rect>
                <rect width="2" height="15"></rect>
              </svg>
            </a>
          </div>

          <div class="links-external-item" v-if="sponsorLink">
            <a :href="sponsorLink"
               class="sponsor-link"
               title="Sponsor"
               target="_blank"
               rel="noopener noreferrer">
              <svg class="octicon octicon-heart text-pink v-align-middle" viewBox="0 0 14 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"></path></svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
  import AlgoliaSearchBox from '../algolia-search/AlgoliaSearchBox'
  import { getCss } from '../../utils/get-css'
  import { scrollPosition } from '../../utils/scroll-position'
  import { throttle } from '../../utils/throttle'
  import SearchBox from '../search/SearchBox.vue'
  import SidebarButton from '../sidebar/SidebarButton.vue'
  import NavLinks from './NavLinks.vue'

  export default {
    name: 'Navbar',
    components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

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

<style lang="scss" src="./Navbar.scss"></style>
