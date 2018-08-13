<template>
  <div class="github-stars">
    <iframe :src="url" allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>
  </div>
</template>
<script>
  import { outboundRE } from '../../utils/index';

  export default {
    name: 'GithubStars',
    computed: {
      url() {
        let url = outboundRE.test(this.$site.themeConfig.repo)
          ? this.$site.themeConfig.repo.split('github.com/')[1]
          : this.$site.themeConfig.repo;

        const [user, repo] = url.split('/');

        return `https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=watch&count=true`;
      }
    }
  };
</script>