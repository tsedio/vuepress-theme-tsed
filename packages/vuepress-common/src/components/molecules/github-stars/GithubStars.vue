<template>
  <span class="relative inline-flex w-auto">
    <Button :href="url"
            component="a"
            rel="noopener noreferrer"
            target="_blank"
            title="Github"
            border
            color="gray-darker"
            bg-color="transparent"
            border-color="gray-darker"
            class="border-2 relative"
            padding-x="1"
            padding-y="1"
            rounded="medium">
      <BxIcon name="bxl-github" class="text-lg"></BxIcon>
    </Button>
    <span
      :style="{top: '-12px', right:'-28px'}"
      class="bg-gray-darker text-xs text-white py-1 px-2 absolute right-0 rounded-medium rounded-bl-small">{{ stargazersCount }}</span>
  </span>
</template>
<script>
  import { getGithubMetadata } from '@tsed/vuepress-common'
  import Button from '../button/Button'
  import BxIcon from '../../atoms/icons/BxIcon'

  export default {
    name: 'GithubStars',
    components: {
      BxIcon,
      Button
    },
    data () {
      return {
        url: '',
        stargazersCount: 0
      }
    },

    async mounted () {
      const {
        repo,
        docsRepo = repo
      } = this.$site.themeConfig

      const { stargazers_count, html_url } = await getGithubMetadata(docsRepo)

      this.url = html_url
      this.stargazersCount = stargazers_count
    }
  }
</script>
