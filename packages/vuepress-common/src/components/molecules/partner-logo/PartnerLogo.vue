<template>
  <Link class="partner-logo" :outbound="false" :href="href" :title="title" v-lazyload>
    <img :data-url="src" :alt="title" class="opacity-0 transition-all"/>
  </Link>
</template>
<script>
import Link from '../link/Link'
import Lazyload from '../observer/lazyload'

export default {
  name: 'PartnerLogo',
  directives:{
    lazyload: Lazyload
  },
  components: {Link},
  props: {
    src: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  }
}
</script>
<style>
.partner-logo img {
  transition: all ease-in-out 0.3s;
  filter: grayscale(1);
  opacity: .5;
  max-width: 100%;

  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
}
</style>
