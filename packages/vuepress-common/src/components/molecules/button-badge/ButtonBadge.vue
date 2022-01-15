<template>
  <Link :href="href"
        :outbound="false"
        :title="title"
        :class="`reset-link transition-all duration-500 ease-in-out relative no-underline hover:scale-110 text-${textSize} text-${color} hover:text-${color}-active` ">
    <figure
        v-lazyload
        :class="`flex items-center justify-center relative z-2 overflow-hidden rounded-medium mb-2 bg-${bgColor} shadow-${shadow} p-${padding}`"
        :style="{width: `${width}px`, height: `${width}px`}">
      <img :data-url="src" v-if="src" class="w-full opacity-0 transition-all no-shadow">
      <span v-else
            class="flex items-center justify-center font-bold uppercase text-2xl h-full">{{ title | initial }}</span>
    </figure>
    <span
        v-lazyload
        v-if="blur > 0 && src"
        :class="`overflow-hidden z-1 rounded-medium absolute left-0 opacity-50 filter-blur-${blur}`"
        :style="{width: `${width}px`, top: `5px`, height: `${width}px`}">
      <img :data-url="src" v-if="src" :alt="title|initial" class="w-full opacity-0  transition-all">
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
import Lazyload from '../observer/lazyload'

export default {
  name: 'ButtonBadge',
  components: {Link},
  directives: {
    lazyload: Lazyload
  },
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
    initial(text = '') {
      return text.split(' ').map(text => text.slice(0, 1)).join('')
    },
    overflow(text = '') {
      return text.slice(0, 12) + (text.length > 12 ? '...' : '')
    }
  }
}
</script>
