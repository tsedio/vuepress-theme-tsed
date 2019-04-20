<template>
  <Contributors type="opencollective-backers" :contributors="sponsors"></Contributors>
</template>
<script>
  import Contributors from '../contributors/Contributors.vue'
  import { getSponsors } from '../../services/OpenCollectiveClient'

  export default {
    name: 'OpenCollectiveSponsors',
    data: () => {
      return {
        sponsors: []
      }
    },

    components: {
      Contributors
    },

    async mounted () {
      const {
        openCollective
      } = this.$site.themeConfig

      this.sponsors = await getSponsors(openCollective)
    }
  }
</script>
