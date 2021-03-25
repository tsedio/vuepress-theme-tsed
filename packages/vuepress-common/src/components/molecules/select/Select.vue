<template>
  <Dropdown type="click">
    <template #dropdown-button>
      <button
          class="inline-flex items-center border-2 py-1 px-3 pr-2 rounded-small text-gray-darker transition-all"
          :class="classes">
        <strong>{{ label }}:</strong>
        <div class="flex flex-1 items-center pl-2">
          <span :class="`symbol ${current.value || 'all'}`"></span>
          <span class="symbol-text">{{ current.label }}</span>
        </div>
        <BxIcon name="bx-chevron-down" class="text-md"/>
      </button>
    </template>

    <ul class="select-dropdown reset-list px-2">
      <li role="button" tabindex="0" @click="() => onClick({label: 'All'})">
        <span v-if="symbol" class="symbol all"></span>All
      </li>

      <li v-for="(item, index) in items"
          role="button"
          :key="index"
          :tabindex="index"
          :class="{selected: item.value === current.value}"
          @click="() => onClick(item)">
        <span v-if="symbol" :class="'symbol ' + item.value"></span>{{ item.label }}
      </li>
    </ul>
  </Dropdown>
</template>
<script>
import BxIcon from '../../atoms/icons/BxIcon'
import Dropdown from '../dropdown/Dropdown'
import DropdownTransition from '../dropdown/DropdownTransition'

export default {
  name: 'Select',
  components: { Dropdown, BxIcon, DropdownTransition },
  props: {
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    },
    bgColor: {
      type: String
    },
    symbol: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      open: false,
      current: { label: 'All' }
    }
  },
  computed: {
    classes () {
      const { bgColor = 'gray-lighter' } = this
      return [
        'block',
        'w-full',
        `bg-${bgColor}`,
        `border-${bgColor}`,
        'focus-within:text-blue',
        'focus-within:border-blue'
      ]
    }
  },
  methods: {
    onClick (item) {
      this.current = item

      this.$emit('change', item)
    }
  }
}
</script>
<style>
.select-dropdown li {
  @apply rounded-small px-2 flex items-center;
  cursor: pointer;
  font-size: 14px;
  line-height: 32px;
  margin: 0;
  position: relative;
  transition: all .2s;

  &:hover {
    @apply text-blue-active bg-gray-lighter;
  }

  &.selected {
    @apply text-blue-600;

    &:hover {
      @apply text-blue-active bg-gray-lighter;
    }
  }

  .symbol.all {
    display: block;
    opacity: 0;
  }
}
</style>