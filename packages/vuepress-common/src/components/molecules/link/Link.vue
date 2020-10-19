<template>
  <router-link
      class="link internal"
      :to="link"
      v-if="!isExternal(link)"
      :title="title"
      :exact="exact">
    <i v-if="icon" :class="icon"/>
    <slot></slot>
  </router-link>

  <a v-else
     :href="link"
     class="link external"
     :title="title"
     :target="isMailto(link) || isTel(link) ? null : '_blank'"
     :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'">
    <slot></slot>
    <OutboundLink v-if="outbound"/>
  </a>
</template>

<script>
import { ensureExt, isExternal, isMailto, isTel } from '@tsed/vuepress-common'
import OutboundLink from './OutboundLink'

export default {
  name: 'Link',
  props: {
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    outbound: {
      type: Boolean,
      default: true
    }
  },
  components: {
    OutboundLink
  },

  computed: {
    link () {
      return ensureExt(this.href)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    }
  },

  methods: {
    isExternal (path) {
      return isExternal(path)
    },
    isMailto (path) {
      return isMailto(path)
    },
    isTel (path) {
      return isTel(path)
    }
  }
}
</script>
