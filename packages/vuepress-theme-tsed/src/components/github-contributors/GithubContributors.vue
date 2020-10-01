<template>
  <Contributors type="github-contributors" :contributors="contributors"></Contributors>
</template>
<script>
  import { getContributors } from '../../services/GithubClient'
  import Contributors from '../contributors/Contributors.vue'

  export default {
    name: 'GithubContributors',
    props: {
      users: {
        type: Array,
        default: () => []
      }
    },
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
      let contributors = await getContributors(docsRepo)

      if (this.users.length) {
        contributors = contributors.filter((contributor) => {
          return this.users.includes(contributor.login)
        })
      }

      this.contributors = contributors
    }
  }
</script>
