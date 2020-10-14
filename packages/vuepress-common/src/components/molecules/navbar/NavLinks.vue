<template>
  <nav v-if="links.length">
    <ul class="flex items-center h-full text-gray-dark">
      <li v-for="item in links" :key="item.link" class="mx-1 content-wrapper" :class="{'py-4': item.type !== 'links'}">
        <DropdownLink
            class="px-3 py-4"
            v-if="item.type === 'links'"
            :item="item"/>
        <Link
            v-else
            class="px-3 p-1 hover:bg-blue hover:text-white transition-all rounded-small cursor-pointer"
            :href="item.link"
            :icon="item.icon"
            :title="item.title">
          {{ item.text }}
        </Link>
      </li>
    </ul>
  </nav>
</template>

<script>
import DropdownLink from '../dropdown/DropdownLink.vue'
import Link from '../link/Link.vue'

export default {
  name: 'NavLinks',
  components: { Link, DropdownLink },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
