<template>
  <div class="sidebar-group" :class="{ first, collapsable }">
    <p class="font-bold text-gray-darker flex items-center justify-center text-md pl-5 pr-2 py-1"
       :class="{ open }"
       @click="$emit('toggle')">
      <span class="flex-1">{{ item.title }}</span>
      <i v-if="collapsable" :class="{'bx bx-chevron-down text-xl transition-all': true, '-rotate-90': !open}"></i>
    </p>

    <DropdownTransition>
      <ul ref="items"
          v-if="open || !collapsable">
        <li v-for="child in item.children">
          <SidebarLink :item="child" class="pl-7"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import DropdownTransition from '../dropdown/DropdownTransition.vue'
import SidebarLink from './SidebarLink.vue'

export default {
  name: 'SidebarGroup',
  props: ['item', 'first', 'open', 'collapsable'],
  components: { SidebarLink, DropdownTransition }
}
</script>
<style>

</style>