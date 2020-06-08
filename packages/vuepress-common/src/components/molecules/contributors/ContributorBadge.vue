<template>
  <a :href="href"
     target="_blank"
     :title="login"
     :class="`relative flex flex-col no-underline hover:scale-110 text-${textSize} text-${color} hover:text-${color}-active` ">
    <span :class="`relative z-2 overflow-hidden rounded-medium mb-2 bg-${bgColor}`"
          :style="{width: `${width}px`, height: `${width}px`}">
        <img :src="src" v-if="src" class="w-full">
        <span v-else
              class="flex items-center font-bold uppercase justify-center text-2xl h-full">{{login | initial}}</span>
    </span>
    <span
      v-if="blur > 0 && src"
      :class="`overflow-hidden z-1 rounded-medium absolute left-0 opacity-50 filter-blur-${blur}`"
      :style="{width: `${width}px`, top: `5px`, height: `${width}px`}">
        <img :src="src" class="w-full">
      </span>
    <span class="text-center">{{login | overflow}}</span>
  </a>
</template>
<script>
  export default {
    name: 'ContributorBadge',
    props: {
      href: {
        type: String
      },
      src: {
        type: String
      },
      login: {
        type: String,
        required: true
      },
      width: {
        type: Number,
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
      }
    },

    filters: {
      initial (text) {
        return text.split(' ').map(text => text.slice(0, 1)).join('')
      },
      overflow (text) {
        return text.slice(0, 12) + (text.length > 12 ? '...' : '')
      }
    },
    methods: {
      onClick (contributor) {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: this.type + '-contributors',
            eventAction: 'click',
            eventLabel: 'name',
            eventValue: contributor.login
          })
        }
      }
    }
  }
</script>
<style lang="css">

</style>
