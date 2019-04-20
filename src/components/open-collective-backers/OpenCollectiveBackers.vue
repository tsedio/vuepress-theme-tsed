<template>
  <Contributors type="opencollective-backers" :contributors="backers"></Contributors>
</template>
<script>
  import Contributors from '../contributors/Contributors.vue'
  import { getBackers } from '../../services/OpenCollectiveClient'

  export default {
    name: 'OpenCollectiveBackers',
    data: () => {
      return {
        backers: []
      }
    },

    components: {
      Contributors
    },

    async mounted () {
      const {
        openCollective
      } = this.$site.themeConfig

      console.log('openCollective', openCollective)
      this.backers = await getBackers(openCollective)
    }
  }
</script>
