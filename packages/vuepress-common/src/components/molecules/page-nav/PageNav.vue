<template>
  <div class="page-nav pt-5" v-if="prev || next">
    <div class="flex align-center justify-between overflow-hidden">
      <!-- v-show="prev" -->
      <span class="flex align-center justify-center"
            v-if="prev">
          <router-link
              class="p-2 hover:bg-white text-md font-medium flex items-center justify-between"
              :to="prev.path">
            <i class="bx bx-chevron-left"></i>
            <span>
              {{ prev.title || prev.path }}
            </span>
          </router-link>
        </span>

      <span
          v-if="next"
          class="flex align-center justify-center">
          <router-link
              class="p-2 hover:bg-white text-md font-medium flex items-center justify-between"
              v-if="next"
              :to="next.path">
            <span>
              {{ next.title || next.path }}
            </span>
            <i class="bx bx-chevron-right"></i>
          </router-link>
        </span>
    </div>
  </div>
</template>
<script>
import { resolvePage } from '@vuepress/theme-default/util'
import isNil from 'lodash/isNil'
import isString from 'lodash/isString'

export default {
  name: 'PageNav',
  props: ['sidebarItems'],
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },
    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
    linkType,
    { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType
  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)
  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)
  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig
  if (link === false) {
    return
  }

  if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  }

  return resolveLink($page, sidebarItems)
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>