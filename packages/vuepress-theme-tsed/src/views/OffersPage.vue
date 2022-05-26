<template>
  <div>
    <Offers
        :title="title"
        :description="description"
        :legal-info="legalInfo"
        :items="items"/>
    <div class="px-5 md:px-10 max-w-site m-auto">
      <div class="page-content">
        <Content/>
      </div>
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
  computed: {
    title () {
      return this.$frontmatter.title || ''
    },
    description () {
      return this.$frontmatter.description || ''
    },
    legalInfo () {
      return this.$frontmatter.legalInfo || ''
    },
    items () {
      return this.$frontmatter.items || []
    }
  }
}
</script>
