<template>
  <Link :href="href"
        :outbound="false"
        :title="title"
        :class="`reset-link transition-all duration-500 ease-in-out relative flex flex-col no-underline hover:scale-110 text-${textSize} text-${color} hover:text-${color}-active` ">
    <span
        :class="`flex items-center justify-center relative z-2 overflow-hidden rounded-medium mb-2 bg-${bgColor} shadow-${shadow} p-${padding}`"
        :style="{width: `${width}px`, height: `${width}px`}">
        <img :src="src" v-if="src" class="w-full">
        <span v-else
              class="flex items-center justify-center font-bold uppercase text-2xl h-full">{{ title | initial }}</span>
    </span>
    <span
        v-if="blur > 0 && src"
        :class="`overflow-hidden z-1 rounded-medium absolute left-0 opacity-50 filter-blur-${blur}`"
        :style="{width: `${width}px`, top: `5px`, height: `${width}px`}">
      <img :src="src" class="w-full">
    </span>
    <span
        v-show="showTitle"
        class="flex items-center justify-center whitespace-pre"
        :class="`font-${fontWeight}`"
        :style="{width: `${width}px`}">{{ title | overflow }}</span>
  </Link>
</template>
<script>
import Link from '../link/Link'

export default {
  name: 'ButtonBadge',
  components: { Link },
  props: {
    href: {
      type: String
    },
    src: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 60
    },
    bgColor: {
      type: String,
      default: 'gray-lighter'
    },
    color: {
      type: String,
      default: 'blue'
    },
    blur: {
      type: [String, Number]
    },
    textSize: {
      type: String,
      default: 'xxs'
    },
    shadow: {
      type: String
    },
    padding: {
      type: [String, Number]
    },
    fontWeight: {
      type: String
    }
  },

  filters: {
    initial (text) {
      return text.split(' ').map(text => text.slice(0, 1)).join('')
    },
    overflow (text) {
      return text.slice(0, 12) + (text.length > 12 ? '...' : '')
    }
  }
}
</script>
