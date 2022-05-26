<template>
  <div class="sm:flex relative">
    <PricingItem class="w-full sm:w-1/4 justify-items-stretch sm:px-2" v-for="item of items" v-bind="item" :key="item.title" />
  </div>
</template>
<script>
import PricingItem from './PricingItem'

export default {
  components: {
    PricingItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
