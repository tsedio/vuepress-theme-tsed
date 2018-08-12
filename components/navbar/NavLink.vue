<template>
  <router-link class="nav-link"
               :to="link"
               v-if="!isExternal(link)"
               :exact="exact">
    <slot></slot>
  </router-link>

  <a v-else
     :href="link"
     class="nav-link external"
     :target="isMailto(link) || isTel(link) ? null : '_blank'"
     :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'">
    <slot></slot>
    <OutboundLink/>
  </a>

</template>

<script>
  import { ensureExt, isExternal, isMailto, isTel } from '../../utils/index';

  export default {
    props: {
      href: {
        type: String,
        required: true
      }
    },

    computed: {
      link() {
        return ensureExt(this.href);
      },

      exact() {
        if (this.$site.locales) {
          return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link);
        }
        return this.link === '/';
      }
    },

    methods: {
      isExternal,
      isMailto,
      isTel
    }
  };
</script>
