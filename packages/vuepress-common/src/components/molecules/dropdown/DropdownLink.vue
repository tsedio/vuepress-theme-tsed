<template>
  <Dropdown class="h-full" :type="type">
    <template #dropdown-button>
      <a class="flex items-center hover:text-gray-darker cursor-pointer transition-all duration-500 ease-in-out"
         :title="item.title">
        <span>{{ item.text }}</span>
        <i :class=" item.icon || 'bx bx-chevron-down'"></i>
      </a>
    </template>

    <ul class="reset-list text-gray-darker">
      <li :key="subItem.link || index"
          :class="{'mt-3': index}"
          v-for="(subItem, index) in item.items">
        <h4 v-if="subItem.type === 'links'"
            class="p-0 px-4 m-1 mb-2 text-md">{{ subItem.text }}</h4>

        <ul class="dropdown-subitem-wrapper text-sm"
            v-if="subItem.type === 'links'">
          <li class="dropdown-subitem"
              :key="childSubItem.link"
              v-for="childSubItem in subItem.items">
            <Link :href="childSubItem.link"
                  :title="childSubItem.title"
                  class="block opacity-50 hover:opacity-100 p-0 px-6 mb-2 cursor-pointer transition-all duration-500 ease-in-out">
              {{ childSubItem.text }}
            </Link>
          </li>
        </ul>

        <Link v-else
              :href="subItem.link"
              :title="subItem.title"
              class="flex items-center justify-center text-sm block opacity-75 hover:opacity-100 p-0 px-6 mt-1 mb-2 cursor-pointer transition-all">
          <span class="flex-1">{{ subItem.text }}</span>
        </Link>
      </li>
    </ul>
  </Dropdown>
</template>

<script>
import Link from '../link/Link.vue'
import Dropdown from './Dropdown'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'DropdownLink',
  components: { Dropdown, Link, DropdownTransition },

  props: {
    item: {
      required: true
    },
    type: {
      type: String,
      default: 'hover'
    }
  }
}
</script>
<style>
.dropdown-wrapper > a .bx-chevron-down {
  display: block;
  transition: all .2s ease;
  transform-origin: center;
}

.dropdown-wrapper > a:hover {
  @apply opacity-100 text-blue-active;
}

.dropdown-wrapper > a:hover .bx-chevron-down {
  transform: rotate(-180deg);
}
</style>
