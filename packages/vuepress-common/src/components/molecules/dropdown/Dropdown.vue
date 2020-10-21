<template>
  <div class="dropdown-wrapper relative flex items-center" :class="{ open, [`-${type}`]: true}">
    <div class="flex items-center h-full w-full" @click.stop="toggle">
      <slot name="dropdown-button"/>
    </div>
    <DropdownTransition>
      <div class="nav-dropdown absolute text-gray-darker z-2">
        <slot/>
      </div>
    </DropdownTransition>
  </div>
</template>

<script>
import DropdownTransition from './DropdownTransition.vue'

export default {
  name: 'Dropdown',
  components: { DropdownTransition },
  data () {
    return {
      open: false
    }
  },

  props: {
    type: {
      type: String,
      default: 'hover'
    }
  },

  mounted () {
    document.addEventListener('click', this.onClickOutside)
    document.addEventListener('focus', this.onClickOutside)
  },

  destroyed () {
    document.removeEventListener('click', this.onClickOutside)
    document.removeEventListener('focus', this.onClickOutside)
  },

  methods: {
    toggle () {
      this.open = !this.open
    },
    onClickOutside (e) {
      const { current: dataListNode } = this.$el

      if (!this.open) {
        return
      }

      if (!dataListNode || !dataListNode.contains(e.target)) {
        this.open = false
      }
    }
  }
}
</script>
<style>
.dropdown-wrapper:after {
  content: "";
  position: absolute;
  bottom: -12px;
  width: 100%;
  height: 20px;
  background: transparent;
  display: none;
}

.dropdown-wrapper.-click.open:after,
.dropdown-wrapper.-hover:hover:after {
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

.dropdown-wrapper.-click.open .nav-dropdown,
.dropdown-wrapper.-hover:hover .nav-dropdown {
  transform: translateY(calc(100% + 10px)) !important;
  visibility: visible !important;
  opacity: 1 !important;
}

</style>
