<template>
  <div class="page" ref="page">
    <article class="container">
      <div class="relative">
        <PageHeader
            :fixed="headerFixed"
            :title="$page.title"
            :repo-url="repoUrl"
            :url="url"
            :hashTags="hashTags"
            :create-issue-url="createIssueUrl"
            :edit-url="editUrl"/>
      </div>

      <div class="px-5 md:px-10 max-w-site m-auto">
        <div class="page-content">
          <slot name="page-top"/>
          <Content/>
          <slot name="page-bottom"/>
        </div>
      </div>

      <div class="fixed top-0 right-0" :class="{fixed: headerFixed}">
        test
      </div>
    </article>
  </div>
</template>

<script>
// import PageNav from '../components/page-nav/PageNav'
import { createEditLink } from '@tsed/vuepress-common'
import { endingSlashRE, normalize, outboundRE } from '@vuepress/theme-default/util'

export default {
  name: 'Page',
  // components: { PageNav },
  // props: ['sidebarItems'],
  data () {
    return {
      headerFixed: false
    }
  },
  computed: {
    url () {
      return window.location.origin
    },
    repoUrl () {
      return this.editUrl.replace('/edit', '/blob')
    },
    hashTags () {
      return this.$frontmatter.hashTags || this.$site.themeConfig.defaultHashTags || []
    },
    createIssueUrl () {
      const {
        repo,
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      const base = outboundRE.test(docsRepo)
          ? docsRepo
          : `https://github.com/${docsRepo}`

      return `${base}/issues/new?title=${encodeURIComponent(`[BUG] Page ${this.$page.title} - ${path}`)}`
    },
    editUrl () {
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)

      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }

      if (docsRepo && editLinks) {
        return createEditLink(repo, docsRepo, docsDir, docsBranch, path)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.headerFixed = window.pageYOffset > 140
    })
  },
  methods: {}
}
</script>
<style>
.content__default h1 {
  display: none;
}

.page-content {
  @apply py-10;

  h1, h2, h3, h4, h5, h6, p {
    @apply px-3;
  }
}

@screen xl {
  .page-content {
    width: calc(100% - 220px)
  }
}
</style>
