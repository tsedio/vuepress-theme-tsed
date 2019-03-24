<template>
  <footer class="footer">
    <div class="footer__improve-docs" v-if="editLink">
      <div class="container">
        <p>
          {{userFooter.caughtMistake}}
          <a :href="editLink" target="_blank" rel="noopener noreferrer">{{ userFooter.editPageOnGithub }}</a>
        </p>
      </div>

      <!--<div class="last-updated"
           v-if="lastUpdated">
        <span class="prefix">{{ userFooter.lastUpdated }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>-->
    </div>

    <div class="container--footer">
      <div class="container container--padded">
        <div class="footer__content">
          <div class="footer__next-step-header">
            {{userFooter.contribute}}
          </div>

          <p>
            {{userFooter.helpToContribute}}
            <a :href="repoLink">{{userFooter.githubRepository}}</a>
          </p>

          <div class="footer__next-step-header">
            {{userFooter.license}}
          </div>

          <p>
            {{userFooter.releaseUnder}} <a href="#/license">MIT License</a> - © Copyright 2016 - {{date}}.
          </p>

          <GithubStars></GithubStars>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import { endingSlashRE, normalize, outboundRE } from '../../utils/index';
  import GithubStars from '../github-stars/GithubStars';

  export default {
    name: 'Footer',
    components: { GithubStars },
    data() {
      return {
        date: new Date().getFullYear()
      };
    },
    computed: {
      userFooter() {
        return this.$themeLocaleConfig.footer || this.$site.themeConfig.footer || {};
      },

      repoLink() {
        const {
          repo
        } = this.$site.themeConfig;

        return outboundRE.test(repo)
          ? repo
          : `https://github.com/${repo}`;
      },

      editLink() {
        if (this.$page.frontmatter.editLink === false) {
          return;
        }
        const {
          repo,
          editLinks,
          docsDir = '',
          docsBranch = 'master',
          docsRepo = repo
        } = this.$site.themeConfig;

        let path = normalize(this.$page.path);
        if (endingSlashRE.test(path)) {
          path += 'readme.md';
        } else {
          path += '.md';
        }
        if (docsRepo && editLinks) {
          return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path);
        }
      },

      lastUpdated() {
        if (this.$page.lastUpdated) {
          return new Date(this.$page.lastUpdated).toLocaleString(this.$lang);
        }
      },

      lastUpdatedText() {
        if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
          return this.$themeLocaleConfig.lastUpdated;
        }
        if (typeof this.$site.themeConfig.lastUpdated === 'string') {
          return this.$site.themeConfig.lastUpdated;
        }
        return 'Last Updated';
      }
    },

    methods: {

      createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : `https://github.com/${docsRepo}`;

        return (
          base.replace(endingSlashRE, '') +
          `/edit/${docsBranch}` +
          (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
          path
        );
      }
    }
  };
</script>
<style lang="scss" src="./Footer.scss"></style>