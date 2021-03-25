<template>
  <div class="flex flex-col h-full">
    <div class="relative flex flex-1 flex-col space-y-2 px-6 py-8 group">
      <a :href="homepage" :aria-label="homepage" target="_blank" rel="noopener" class="absolute inset-0"/>

      <div
          class="transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 absolute top-4 right-6 cursor-pointer">
        <BxIcon name='link-external'/>
      </div>

      <img
          v-if="icon"
          :src="icon"
          :alt="name"
          class="w-10 h-10"
          width="40px"
          height="40px"
      />

      <BxIcon v-else name="package" class="w-10 h-10 text-5xl text-blue-300" style="width: 40px;height:40px"/>

      <div class="flex text-lg font-bold items-center pt-2">
        <span>{{ name }}</span>
        <img
            v-if="type === 'official'"
            alt="official"
            src="./icons/official.svg"
            width="20"
            height="20"
            class="ml-1 mt-1"
        >
      </div>
      <div class="text-gray-500 group-hover:text-gray-800">
        {{ description }}
      </div>
    </div>

    <div class="border-t border-gray-200 bg-gray-100 grid grid-cols-3">
      <a :href="npm"
         aria-label="npm"
         target=" _blank"
         rel="noopener"
         class="stats-block group flex items-center space-x-2 border-r border-gray-200 hover:bg-gray-200 hover:bg-opacity-50 py-3 px-4 pl-6">

        <img alt="npm" src="./icons/npm.svg" width="32" height="32" class="icon">

        <div class="text-sm leading-5 text-gray-600 group-hover:text-gray-900 font-medium">
          {{ downloads | numberFormatter }}
        </div>
      </a>

      <a :href="repository"
         aria-label="stars"
         target=" _blank"
         rel="noopener"
         class="stats-block group flex items-center space-x-1 py-3 px-4 border-r border-gray-200 hover:bg-gray-200 hover:bg-opacity-50">
        <img alt="stars" src="./icons/star.svg" width="20" height="20" class="icon">
        <div class="text-sm leading-5 text-gray-600 group-hover:text-gray-900 font-medium truncate">
          {{ stars | numberFormatter }}
          <span class="hidden md:inline-block">star{{ stars > 1 ? 's' : '' }}</span></div>
      </a>

      <div
          class="stats-block group flex items-center space-x-1 py-3 px-4 z-0 overflow-hidden hover:bg-gray-200 hover:bg-opacity-50">
        <BxIcon name="bx-code-alt" class="mr-1"/>
        <a
            v-for="maintainer of maintainers"
            :key="maintainer.github"
            :aria-label="`${maintainer.username} github profile`"
            v-tooltip="{ content: maintainer.username, classes: ['bg-blue-900', 'text-white', 'px-2', 'py-1', 'rounded', 'text-sm'] }"
            :href="githubUrl(maintainer)"
            target="_blank"
            rel="noopener"
        >
          <img
              class="w-6 h-6 relative rounded-full text-white shadow-solid transition-opacity duration-200 opacity-75 group-hover:opacity-100"
              :src="`${maintainer.avatar}?s=24&d=mp`"
              :alt="maintainer.username"
              width="24"
              height="24"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VTooltip from 'v-tooltip'
import { numberFormatter } from '../../../utils/format/number-formatter'
import BxIcon from '../../atoms/icons/BxIcon'

Vue.use(VTooltip)

export default {
  name: 'CardPlugin',
  components: { BxIcon },
  filters: {
    numberFormatter (num) {
      return numberFormatter(num, { precision: 1 })
    }
  },
  props: {
    name: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    },
    homepage: {
      type: String
    },
    type: {
      type: String
    },
    downloads: {
      type: Number,
      default: 0
    },
    stars: {
      type: Number,
      default: 0
    },
    repository: {
      type: String
    },
    npm: {
      type: String
    },
    maintainers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    githubUrl ({ username }) {
      return `https://github.com/${username}`
    }
  }
}
</script>

<style>
.stats-block {
  & img {
    filter: grayscale(100%);

    &.icon {
      filter: grayscale(100%) contrast(0%);
    }
  }

  &:hover {
    & img {
      filter: none;

      &.icon {
        filter: none;
      }
    }
  }
}
</style>