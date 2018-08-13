<template>
  <div class="contributors">

    <slot name="top"></slot>

    <div class="contributors__badge" v-for="contributor in contributors">
      <div class="contributors__badge-img">
        <img :src="contributor.avatar_url">
      </div>
      <a :href="contributor.url" target="_blank">{{contributor.login}}</a>
    </div>

    <slot name="bottom"></slot>
  </div>
</template>
<script>
  import { outboundRE } from '../../utils/index';

  export default {
    name: 'GithubContributors',
    data: () => {
      return {
        contributors: []
      };
    },

    mounted() {
      const {
        repo,
        docsRepo = repo
      } = this.$site.themeConfig;

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      fetch(base.replace('/github.com', '/api.github.com/repos') + '/contributors')
        .then((response) => response.json())
        .then(contributors => {
          this.contributors = contributors;
        });
    }
  };
</script>
<style lang="scss" src="./GithubContributors.scss"></style>