<template>
  <aside class="sidebar">
    <slot name="top"/>

    <ul class="reset-list py-5" v-if="items.length">
      <li v-for="(item, i) in items" :key="i">
        <SidebarGroup v-if="item.type === 'group'"
                      :item="item"
                      :first="i === 0"
                      :open="i === openGroupIndex"
                      :collapsable="item.collapsable || item.collapsible"
                      :depth="0"
                      class="mb-2"
                      @toggle="toggleGroup(i)"/>

        <div v-else class="mb-2">
          <SidebarLink
              :item="item"
              class="font-bold text-gray-darker text-md px-5"/>
        </div>
      </li>
    </ul>

    <slot name="bottom"/>
  </aside>
</template>

<script>
import {isActive} from '../../../utils'
import {resolveOpenGroupIndex} from '../../../utils/sidebar/resolve-group-index'
import NavLinks from '../navbar/NavLinks.vue'
import SidebarGroup from './SidebarGroup.vue'
import SidebarLink from './SidebarLink.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarGroup,
    SidebarLink,
    NavLinks
  },

  props: ['items', 'nav-items'],

  data() {
    return {
      openGroupIndex: 0
    }
  },

  created() {
    this.refreshIndex()
  },

  watch: {
    '$route'() {
      this.refreshIndex()
    }
  },

  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(
          this.$route,
          this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive(page) {
      return isActive(this.$route, page.path)
    }
  }
}
</script>
