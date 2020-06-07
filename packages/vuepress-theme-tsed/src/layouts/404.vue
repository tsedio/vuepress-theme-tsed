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
               v-if="shouldShowNavbar"
               @toggle-sidebar="toggleSidebar">
        <slot name="sidebar-top" slot="top"/>
        <slot name="sidebar-bottom" slot="bottom"/>
      </Sidebar>

      <div class="home">
        <div class="page">
          <article class="container">
            <slot name="top"/>

            <h1>Page not found</h1>
            <blockquote>{{ getMsg() }}</blockquote>
            <router-link to="/">Take me home.</router-link>

            <p>In the meantime you can look at the following pages:</p>

            <Content :custom="false"/>

            <slot name="bottom"/>
          </article>
        </div>
      </div>
    </main>

    <Footer :class="{'--with-sidebar': shouldShowSidebar}"></Footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueTsed from '../install'
  import { resolveSidebarItems } from '../utils'
  import Navbar from '../components/navbar/Navbar'
  import Sidebar from '../components/sidebar/Sidebar'
  import Contributing from '../views/Contributing'
  import Footer from '../components/footer/Footer'

  Vue.use(VueTsed)

  const msgs = [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`
  ]

  export default {
    components: {
      Navbar,
      Sidebar,
      Contributing,
      Footer
    },
    data () {
      return {
        isSidebarOpen: false,
        swUpdateEvent: null
      }
    },

    computed: {
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
          !frontmatter.home &&
          frontmatter.sidebar !== false &&
          this.sidebarItems.length > 1
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
      window.addEventListener('scroll', this.onScroll)

      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })
    },

    methods: {

      getMsg () {
        return msgs[Math.floor(Math.random() * msgs.length)]
      },

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
