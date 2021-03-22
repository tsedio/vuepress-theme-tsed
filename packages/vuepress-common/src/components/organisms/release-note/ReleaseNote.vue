<template>
  <div>
    <div :style="styles" class="overflow-auto">
      <Releases :items="items"/>
    </div>

    <div v-if="canLoadMore" class="flex items-center justify-center p-5">
      <Button component="button" @click="loadItems">
        <BxIcon v-if="isActive" name="bx-loader-alt" class="mr-2 bx-burst"/>
        {{ ctaLabel }}
      </Button>
    </div>
  </div>
</template>
<script>
import { getGithubReleases } from '../../../clients/GithubClient'
import BxIcon from '../../atoms/icons/BxIcon'
import Button from '../../molecules/button/Button'
import Releases from '../../molecules/releases/Releases.vue'

export default {
  components: { Button, BxIcon, Releases },
  props: {
    ctaLabel: {
      type: String,
      default: 'See more'
    },
    maxHeight: {
      type: String
    }
  },
  computed: {
    styles () {
      return this.maxHeight ? { maxHeight: this.maxHeight } : {}
    }
  },
  data () {
    return {
      page: 1,
      items: [],
      isActive: false,
      canLoadMore: true
    }
  },

  async mounted () {
    await this.loadItems()
  },

  methods: {
    async loadItems () {
      const {
        repo,
        githubProxyUrl,
        docsRepo = repo
      } = this.$site.themeConfig

      this.isActive = true
      const items = await getGithubReleases(githubProxyUrl || docsRepo, { page: this.page })

      if (items.length) {
        this.items.push(...items)
        this.page++
      } else {
        this.canLoadMore = false
      }
      this.isActive = false
    }
  }
}
</script>