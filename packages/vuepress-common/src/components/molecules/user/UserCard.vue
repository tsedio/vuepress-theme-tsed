<template>
  <div class="rounded p-6 flex flex-col">
      <span
          :class="`flex items-center justify-center relative z-2 overflow-hidden rounded-medium mb-2 bg-white h-32 w-32 rounded-full mx-auto`">
          <img :src="src" v-if="src" class="w-full">
          <span v-else
                class="flex items-center justify-center font-bold uppercase text-2xl h-full">{{
              title | initial
            }}</span>
      </span>
    <div class="text-center pt-4 transition-colors duration-300 ease-linear">
      <h3 class="text-xl text-gray-darker">{{ title }}</h3>

      <div v-if="role" class="text-md text-api-default py-1">
        {{ job }}
      </div>

      <div class="text-sm py-2 font-bold" data-v-3fd1f7ec="">
        {{ city }}, {{ country }}
      </div>

      <div class="pb-2" data-v-3fd1f7ec="">
        <a v-if="github" :href="`https://github.com/${github}`"
           rel="noopener"
           target="_blank"
           class="mx-1">
          <BxIcon class="text-xl" name="bxl-github" color="gray"/>
        </a>

        <a v-if="twitter" :href="`https://twitter.com/${twitter}`"
           rel="noopener"
           target="_blank"
           class="mx-1">
          <BxIcon class="text-xl" name="bxl-twitter" color="blue-active"/>
        </a>

        <a v-if="website" :href="website"
           rel="noopener"
           target="_blank"
           class="mx-1">
          <BxIcon class="text-xl" name="bx-link" color="blue"/>
        </a>
      </div>
      <div
          v-if="role"
          class="flex flex-row flex-wrap justify-center">
        <span
            class="truncate uppercase tracking-wider font-medium text-xs px-2 py-1 rounded-medium mr-2 mb-2 border border-light-border transition-colors duration-300 ease-linear">
              {{role}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import BxIcon from '../../atoms/icons/BxIcon'

export default {
  name: 'UserCard',
  components: {
    BxIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    src: {
      type: String
    },
    github: {
      type: String
    },
    twitter: {
      type: String
    },
    website: {
      type: String
    },
    country: {
      type: String
    },
    city: {
      type: String
    },
    role: {
      type: String
    },
    job: {
      type: String
    }
  },
  filters: {
    initial (text = '') {
      return text.split(' ').map(text => text.slice(0, 1)).join('')
    },
    overflow (text = '') {
      return text.slice(0, 12) + (text.length > 12 ? '...' : '')
    }
  }
}
</script>