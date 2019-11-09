<template>
  <div class="theme-container"
       :class="pageClasses"
       @touchstart="onTouchStart"
       @touchend="onTouchEnd">

    <Navbar v-if="shouldShowNavbar"
            :class="{'--fluid': shouldShowSidebar}"
            @toggle-sidebar="toggleSidebar"/>

    <main class="main-content">
      <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

      <Sidebar :items="sidebarItems"
               @toggle-sidebar="toggleSidebar">
        <slot name="sidebar-top" slot="top"/>
        <slot name="sidebar-bottom" slot="bottom"/>
      </Sidebar>

      <div class="custom-layout" v-if="isCustomLayout">
        <component :is="$page.frontmatter.layout"/>
      </div>

      <Home v-else-if="isHome"/>
      <Contributing v-else-if="isContributing"/>

      <Page v-else :sidebar-items="sidebarItems">

        <slot name="page-top" slot="top"/>
        <slot name="page-bottom" slot="bottom"/>
        <OtherTopics slot="bottom" v-if="shouldShowOtherTopics" :items="otherTopicsItems">
          <h3 class="heading" slot="top">
            Other <br/><b>topics</b>
          </h3>
        </OtherTopics>
      </Page>

    </main>

    <Footer :class="{'--with-sidebar': shouldShowSidebar}"></Footer>

    <SWUpdatePopup :updateEvent="swUpdateEvent"/>

  </div>
</template>

<script>
  import nprogress from 'nprogress'
  import Vue from 'vue'
  import VueTsed, { resolveOtherTopicsItems, resolveSidebarItems } from '../'

  Vue.use(VueTsed)

  export default {
    data () {
      return {
        isSidebarOpen: false,
        swUpdateEvent: null
      }
    },

    computed: {
      isHome () {
        const { home, layout } = this.$page.frontmatter

        return home || layout === 'home'
      },


      isContributing () {
        const { layout } = this.$page.frontmatter

        return layout === 'contributing'
      },

      isCustomLayout () {
        const { layout } = this.$page.frontmatter
        return layout && !this.isHome && ['contributing'].indexOf(layout)
      },

      shouldShowNavbar () {
        const { themeConfig } = this.$site
        const { frontmatter } = this.$page
        if (
          frontmatter.navbar === false ||
          themeConfig.navbar === false) {
          return false
        }
        return (
          this.$title ||
          themeConfig.logo ||
          themeConfig.repo ||
          themeConfig.nav ||
          this.$themeLocaleConfig.nav
        )
      },

      shouldShowSidebar () {
        const { frontmatter } = this.$page
        return (
          !frontmatter.layout &&
          !this.isHome &&
          frontmatter.sidebar !== false &&
          this.sidebarItems.length
        )
      },

      shouldShowOtherTopics () {
        const { frontmatter } = this.$page
        return (
          !frontmatter.layout &&
          !this.isHome &&
          frontmatter.otherTopics === true &&
          this.otherTopicsItems.length
        )
      },

      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$route,
          this.$site,
          this.$localePath
        )
      },

      otherTopicsItems () {
        return resolveOtherTopicsItems(
          this.$page,
          this.$route,
          this.$site,
          this.$localePath
        )
      },

      pageClasses () {
        const userPageClass = this.$page.frontmatter.pageClass
        return [
          {
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar
          },
          userPageClass
        ]
      }
    },

    mounted () {
      // getApi(this.$site.themeConfig.apiUrl)

      window.addEventListener('scroll', this.onScroll)

      // configure progress bar
      nprogress.configure({ showSpinner: false })

      this.$router.beforeEach((to, from, next) => {
        if (to.path !== from.path && !Vue.component(to.name)) {
          nprogress.start()
        }
        next()
      })

      this.$router.afterEach(() => {
        nprogress.done()
        this.isSidebarOpen = false
      })

      this.$on('sw-updated', this.onSWUpdated)
    },

    methods: {
      toggleSidebar (to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      },

      // side swipe
      onTouchStart (e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },

      onTouchEnd (e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          } else {
            this.toggleSidebar(false)
          }
        }
      },

      onSWUpdated (e) {
        this.swUpdateEvent = e
      }
    }
  }
</script>

