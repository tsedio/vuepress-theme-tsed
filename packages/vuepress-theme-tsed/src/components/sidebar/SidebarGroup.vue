<template>
  <div class="sidebar-group" :class="{ first, collapsable }">
    <p class="sidebar-heading"
       :class="{ open }"
       @click="$emit('toggle')">
      <span>{{ item.title }}</span>
      <span class="arrow"
            v-if="collapsable"
            :class="open ? 'down' : 'right'">
      </span>
    </p>

    <DropdownTransition>
      <ul ref="items"
          class="sidebar-group-items"
          v-if="open || !collapsable">
        <li v-for="child in item.children">
          <SidebarLink :item="child"/>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
  import DropdownTransition from '../dropdown/DropdownTransition.vue';
  import SidebarLink from './SidebarLink.vue';

  export default {
    name: 'SidebarGroup',
    props: ['item', 'first', 'open', 'collapsable'],
    components: { SidebarLink, DropdownTransition }
  };
</script>

<style lang="scss" src="./SidebarGroup.scss">

</style>
