<template>
  <div>
    <Offers class="bg-gray-200" v-bind="getConfig()"/>
    <div>
      <Content slot-key="header-raw-content"/>
    </div>
    <div class="px-5 md:px-10 max-w-site m-auto">
      <div class="page-content">
        <Content/>
      </div>
    </div>
    <div>
      <Content slot-key="footer-raw-content"/>
    </div>
  </div>
</template>
<script>
import {Offers} from '@tsed/vuepress-common'

export default {
  name: 'OffersPage',
  components: {
    Offers
  },
  methods: {
    getConfig () {
      const key = this.$frontmatter.config

      if (key) {
        const config = this.$site.themeConfig.offers[key]

        if (config) {
          return config
        }
      }

      return this.$frontmatter
    }
  }
}
</script>
