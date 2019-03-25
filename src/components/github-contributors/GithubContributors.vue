<template>
  <div class="contributors">

    <slot name="top"></slot>

    <div class="contributors__badge" v-for="contributor in contributors">
      <div class="contributors__badge-img">
        <img :src="contributor.avatar_url">
      </div>
      <a :href="contributor.html_url" target="_blank" @click="() => onClick(contributor)">{{contributor.login}}</a>
    </div>

    <slot name="bottom"></slot>
  </div>
</template>
<script>
  import { getContributors } from '../../utils/github'

  export default {
    name: 'GithubContributors',
    data: () => {
      return {
        contributors: []
      }
    },

    async mounted () {
      const {
        repo,
        docsRepo = repo
      } = this.$site.themeConfig

      this.contributors = await getContributors(docsRepo)
    },

    methods: {
      onClick (contributor) {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: 'contributors',
            eventAction: 'click',
            eventLabel: 'name',
            eventValue: contributor.login
          })
        }
      }
    }
  }
</script>
<style lang="scss" src="./GithubContributors.scss"></style>
