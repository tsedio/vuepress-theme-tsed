<template>
  <div class="pb-5">
    <div v-if="title" class="pt-16 pb-16 bg-blue-900 sm:pb-24">
      <div class="px-4 pb-10 text-center sm:px-6 lg:px-8">
        <h1 class="mt-4 text-4xl font-extrabold leading-10 text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
          {{ title }}
        </h1>
        <p class="max-w-xl mx-auto mt-5 text-lg leading-7 sm:text-xl text-gray-100">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="-mt-15 flex justify-center">
      <div>
        <div class="sm:flex relative max-w-screen-xl">
          <Offer class="w-full sm:w-1/4 justify-items-stretch sm:px-2" v-for="item of items" v-bind="item"
                 :key="item.title"/>
        </div>

        <em class="block -mt-6 mb-5 mx-2">{{ legalInfo }}</em>
      </div>
    </div>
  </div>
</template>
<script>
import Offer from '../../molecules/offer/Offer'

export default {
  name: "Offers",
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    legalInfo: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Offer
  }
}
</script>
