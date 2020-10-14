<template>
  <div class="dropdown-wrapper relative flex items-center h-full" :class="{ open }">
    <a class="flex items-center hover:text-gray-darker cursor-pointer transition-all" @click="toggle"
       :title="item.title">
      <span>{{ item.text }}</span>
      <i :class=" item.icon || 'bx bx-chevron-down'"></i>
    </a>
    <DropdownTransition>
      <ul class="nav-dropdown absolute text-gray-darker" v-show="open">
        <li :key="subItem.link || index"
            :class="{'mt-3': index}"
            v-for="(subItem, index) in item.items">
          <h4 v-if="subItem.type === 'links'"
              class="p-0 px-3 m-1 text-md">{{ subItem.text }}</h4>

          <ul class="dropdown-subitem-wrapper"
              v-if="subItem.type === 'links'">
            <li class="dropdown-subitem"
                :key="childSubItem.link"
                v-for="childSubItem in subItem.items">
              <Link :href="childSubItem.link"
                    :title="childSubItem.title"
                    class="block opacity-50 hover:opacity-100 p-0 px-5 mb-2 cursor-pointer transition-all">
                {{ childSubItem.text }}
              </Link>
            </li>
          </ul>

          <Link v-else
                :href="subItem.link"
                :title="subItem.title"
                class="flex items-center justify-center block opacity-75 hover:opacity-100 p-0 px-5 mt-1 mb-2 cursor-pointer transition-all">
            <span class="flex-1">{{ subItem.text }}</span>
          </Link>
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import Link from '../link/Link.vue'
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'DropdownLink',
  components: { Link, DropdownTransition },

  data () {
    return {
      open: false
    }
  },

  props: {
    item: {
      required: true
    }
  },

  methods: {
    toggle () {
      this.open = !this.open
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

.dropdown-wrapper > a:hover .bx-chevron-down {
  transform: rotate(-180deg);
}

.dropdown-wrapper:after {
  content: "";
  position: absolute;
  bottom: -12px;
  width: 100%;
  height: 20px;
  background: transparent;
  display: none;
}

.dropdown-wrapper:hover:after {
  display: block;
}

.dropdown-wrapper .nav-dropdown {
  @apply bg-white opacity-0 left-0 rounded-medium rounded-tl-small;

  min-width: 200px;
  display: block !important;
  visibility: hidden;
  height: auto !important;
  box-sizing: border-box;
  max-height: calc(100vh - 2.7rem);
  overflow-y: auto;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  padding: .5rem 0;
  text-align: left;
  white-space: nowrap;
  margin: -10px 0 0;
  transition: all .25s ease;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, .1);
}

.dropdown-wrapper:hover .nav-dropdown {
  transform: translateY(calc(100% + 10px)) !important;
  visibility: visible !important;
  opacity: 1 !important;
}

</style>
