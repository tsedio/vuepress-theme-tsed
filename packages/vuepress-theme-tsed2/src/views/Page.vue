<template>
  <div ref="page">
    <article>
      <div class="relative">
        <PageHeader
            :fixed="headerFixed"
            :title="$page.title"
            :repo-url="repoUrl"
            :hashTags="hashTags"
            :create-issue-url="createIssueUrl"
            :edit-url="editUrl"/>
      </div>

      <div class="px-5 md:px-10 max-w-site m-auto">
        <div class="page-content">
          <slot name="page-top"/>
          <Content/>
          <slot name="page-bottom"/>

          <div class="pt-5">
            <div class="py-5 flex justify-end text-sm" v-if="lastUpdated">
              <p>
                <span class="font-bold pr-1">{{ lastUpdatedText }}:</span>
                <span class="time">{{ lastUpdated }}</span>
              </p>
            </div>

            <PageNav :sidebarItems="sidebarItems"/>
          </div>

          <OtherTopics class="px-3" slot="page-bottom" v-if="shouldShowOtherTopics" :items="otherTopicsItems">
            <h4 class="text-xl mb-4 mt-2 font-semibold" slot="top">
              Other topics
            </h4>
          </OtherTopics>

        </div>
      </div>

      <PageSidebar class="fixed" :class="{'-mini-header': headerFixed}" :page="$page"/>
    </article>
  </div>
</template>

<script>
import { createEditLink, PageHeader, PageNav, PageSidebar, resolveOtherTopicsItems } from '@tsed/vuepress-common'
import { endingSlashRE, normalize, outboundRE } from '@vuepress/theme-default/util'

export default {
  name: 'Page',
  components: { PageNav, PageHeader, PageSidebar },
  props: ['sidebarItems'],
  data () {
    return {
      headerFixed: false
    }
  },
  computed: {
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
    },
    lastUpdated () {
      return this.$page.lastUpdated
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },
    shouldShowOtherTopics () {
      const { frontmatter } = this.$page
      return (
          !frontmatter.layout &&
          !this.isLandingPage &&
          frontmatter.otherTopics !== false &&
          this.otherTopicsItems.length
      )
    },
    otherTopicsItems () {
      return resolveOtherTopicsItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
      )
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

.page-sidebar {
  display: none;
}

.page-content {
  @apply py-10;
}

@screen xl {
  .page-sidebar {
    display: block;
  }

  .sidebar .sidebar-sub-headers {
    display: none;
  }

  .page-content {
    width: calc(100% - 220px)
  }
}

.page-sidebar {
  top: 300px;
  transition: all ease 0.5s;
}

.page-sidebar.-mini-header {
  top: 150px;
}
</style>
