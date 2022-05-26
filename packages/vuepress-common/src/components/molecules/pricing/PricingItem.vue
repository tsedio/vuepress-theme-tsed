<template>
  <div class="relative flex flex-col">
    <div v-if="startHere"
         class="font-bolder uppercase tracking-wider text-center text-white flex items-center justify-center bg-gray-900 rounded-t-lg"
         style="min-height: 35px">
      Start here
    </div>
    <div v-else class="" style="min-height: 35px"></div>
    <div class="bg-white sm:mb-10 shadow-md flex-1" :class="{['border-gray-900 border-r-2 border-l-2 border-b-2']: startHere}">
      <div class="border-t-8 px-5 py-4 sm:px-3" :class="highlight ? 'border-green-300': 'border-blue-300'">
        <p class="text-gray-700 uppercase font-bold mb-2 text-sm">{{ category }}</p>
        <h2 class="text-4xl">{{ title }}</h2>

        <p class="text-sm" v-html="description" style="min-height: 50px"></p>

        <div class="pt-3 mb-3">
          <span class="text-5xl mr-2">{{ price.amount }}</span>
          <span class="text-sm">{{ price.by }}</span>
        </div>

        <Button :href="cta.url"
                class="w-full"
                :padding-y="2"
                :bg-color="startHere ? 'blue' : (highlight ? 'green' : 'white-button')"
                :border-color="startHere ? 'blue': (highlight ? 'green': 'blue')"
                :hover="highlight ? '800' : 'active'"
                :color="startHere ? 'white-button' : (highlight ? 'white-button' : 'blue')">
          {{ cta.label }}
        </Button>
      </div>

      <div class="px-5 pb-4 sm:px-3">
        <ul class="border-t-1 border-gray-300 pt-5">
          <li class="flex mb-2" :class="{['justify-center']: item === '+'}" v-for="item of items"
              :key="item">
            <template v-if="item === '+'">
              <BxIcon name="plus" color="blue-700" class="text-lg mr-1"/>
            </template>
            <template v-else>
              <BxIcon name="check" color="green" class="text-md mr-1" style="margin-top: 2px"/>
              <div v-html="item" class="text-sm"></div>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '../button/Button'
import BxIcon from '../../atoms/icons/BxIcon'

export default {
  components: {BxIcon, Button},
  props: {
    title: {
      type: String
    },
    category: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: Object,
      default: () => ({})
    },
    startHere: {
      type: Boolean,
      default: false
    },
    highlight: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    },
    cta: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
