<template>
  <div class="theme-container init"
       :class="pageClasses"
       @touchstart="onTouchStart"
       @touchend="onTouchEnd">
    <Navbar
        v-if="shouldShowNavbar"
        :site-title="siteTitle"
        :html-title="htmlTitle"
        :logo-src="logoSrc"
        :href="$localePath"
        :repo-url="repoUrl"
        :social-urls="$site.themeConfig"
        :items="navLinks"
        @toggle-sidebar="toggleSidebar"/>

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <main class="main-content relative z-2 pt-16">
      <div class="custom-layout" v-if="isCustomLayout">
        <component :is="$page.frontmatter.layout"/>
      </div>

      <!--  <Home v-else-if="isHome"/> -->

      <Page v-else :sidebar-items="sidebarItems">
        <template #top>
          <slot name="page-top"/>
        </template>
        <template #bottom>
          <slot name="page-bottom"/>
        </template>
      </Page>
    </main>

    <Sidebar :items="sidebarItems"
             :class="{'-translate-x-100 md:shadow-sidebar md:translate-x-0': !isSidebarOpen, 'translate-0 shadow-sidebar': isSidebarOpen}"
             @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top"/>
      </template>
      <template #bottom>
        <slot name="sidebar-bottom"/>
      </template>
    </Sidebar>

    <Footer :repo-url="repoUrl"
            :author="$site.themeConfig.author"
            :license-type="$site.themeConfig.licenseType"
            :copyright-dates="$site.themeConfig.copyrightDates"
            :social-urls="$site.themeConfig">
      <template #top>
<!--        <SupportUs v-if="!isHome"-->
<!--                   :brand="$site.themeConfig.shortTitle"-->
<!--                   :sponsor-url="$site.themeConfig.sponsorUrl"-->
<!--                   :license-type="$site.themeConfig.licenseType"/>-->
        <slot name="footer-top"/>
      </template>
      <template #bottom>
        <slot name="footer-bottom"/>
      </template>
    </Footer>
  </div>
</template>

<script>
import { Footer, getUserNavLinks, Navbar, resolveSidebarItems, Sidebar, SupportUs } from '@tsed/vuepress-common'
import Vue from 'vue'
import VueTsed from '../install'
import Page from '../views/Page'

Vue.use(VueTsed)

export default {
  components: {
    Page,
    Navbar,
    Sidebar,
    Footer,
    SupportUs
  },
  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    navLinks () {
      return getUserNavLinks(this)
    },
    repoUrl () {
      const { repo } = this.$site
      return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
    },
    siteTitle () {
      return this.$site.themeConfig.shortTitle || this.$siteTitle
    },
    htmlTitle () {
      return this.$site.themeConfig.htmlTitle || this.$siteTitle
    },
    logoSrc () {
      return this.$site.themeConfig.logo && this.$withBase(this.$site.themeConfig.logo)
    },
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

      return (frontmatter.sidebar !== false && this.sidebarItems.length)
    },

    sidebarItems () {
      return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
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
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
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
    }
  }
}
</script>
<style>
.sidebar-mask {
  @apply fixed top-0 left-0 w-full h-full hidden;
  z-index: 10;
  background: rgba(0, 0, 0, .3);
}

.theme-container.sidebar-open .sidebar-mask {
  display: block;
}

@screen md {
  .main-content, footer {
    padding-left: 260px;
  }

  .page-header.-fixed > div {
    left: 260px;
  }
}
</style>