<template>
  <Contributors type="github-contributors"
                :blur="blur"
                :text-size="textSize"
                :bg-color="bgColor"
                :color="color"
                :width="width"
                :padding="padding"
                :contributors="contributors"></Contributors>
</template>
<script>
import { getContributors } from '../../../index'
import Contributors from '../../molecules/contributors/Contributors.vue'

export default {
  name: 'GithubContributors',
  props: {
    users: {
      type: Array,
      default: () => []
    },
    bgColor: {
      type: String
    },
    width: {
      type: [String, Number],
      default: 60
    },
    color: {
      type: String,
      default: 'blue'
    },
    blur: {
      type: [String, Number]
    },
    textSize: {
      type: String,
      default: 'xxs'
    },
    padding: {
      type: [String, Number],
      default: 3
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
      console.log('this.users', this.users)
      contributors = contributors.filter((contributor) => {
        return this.users.includes(contributor.login)
      })
    }

    this.contributors = contributors
  }
}
</script>
