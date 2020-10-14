<template>
  <a :title="title"
     :href="href"
     :target="isMailto(href) || isTel(href) ? null : '_blank'"
     :rel="isMailto(href) || isTel(href) ? null : 'noopener noreferrer'"
     class="text-lg p-1 hover:text-blue transition-all">
    <i :class="`bx ${icon}`"/>
  </a>
</template>

<script>
import { isMailto, isTel } from '@tsed/vuepress-common'

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
    isMailto,
    isTel
  }
}
</script>
