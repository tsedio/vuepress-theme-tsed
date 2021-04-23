<template>
  <a :title="title"
     :href="href"
     :target="isMailto(href) || isTel(href) ? null : '_blank'"
     :rel="isMailto(href) || isTel(href) ? null : 'noopener noreferrer'"
     class="p-1 hover:text-blue-active transition-all duration-500 ease-in-out flex">
    <i :class="`bx ${icon}`"/>
    <slot />
  </a>
</template>

<script>
import { isMailto, isTel } from '@tsed/vuepress-common'
import { isExternal } from '../../../index'

export default {
  name: 'NavbarLink',
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
