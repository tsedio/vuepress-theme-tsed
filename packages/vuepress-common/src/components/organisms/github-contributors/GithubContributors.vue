<template>
  <Contributors :blur="blur"
                :text-size="textSize"
                :bg-color="bgColor"
                :color="color"
                :width="width"
                :padding="padding"
                :innerPadding="innerPadding"
                :font-weight="fontWeight"
                :shadow="shadow"
                :show-title="showTitle"
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
    showTitle: {
      type: Boolean,
      default: false
    },
    width: {
      type: [String, Number],
      default: 45
    },
    bgColor: {
      type: String,
      default: 'gray-lighter'
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
    shadow: {
      type: String
    },
    padding: {
      type: [String, Number],
      default: 2
    },
    innerPadding: {
      type: [String, Number]
    },
    fontWeight: {
      type: String
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
