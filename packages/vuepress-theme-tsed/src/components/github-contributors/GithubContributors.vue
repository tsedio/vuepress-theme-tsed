<template>
  <Contributors type="github-contributors" :contributors="contributors"></Contributors>
</template>
<script>
  import { getContributors } from '../../services/GithubClient'
  import Contributors from '../contributors/Contributors.vue'

  export default {
    name: 'GithubContributors',
    data: () => {
      return {
        contributors: []
      }
    },


    components: {
      Contributors
    },

    async mounted () {
      const {
        repo,
        docsRepo = repo
      } = this.$site.themeConfig
      this.contributors = await getContributors(docsRepo)
    }
  }
</script>
