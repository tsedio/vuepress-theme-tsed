<template>
  <aside class="page-sidebar">
    <slot name="top"/>
    <PageSidebarLink
        :item="page"
        class="font-bold text-gray-darker text-md px-5"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import PageSidebarLink from './PageSidebarLink'

export default {
  name: 'PageSidebar',
  components: {
    PageSidebarLink
  },

  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style>
.page-sidebar {
  @apply pl-10;
  right: 20px;
  width: 250px;
  max-height: calc(100vh - 350px);

  a:hover:not(.active) {
    @apply text-blue-active;
  }
}
</style>