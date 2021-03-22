<template>
  <div class="flex-1 w-full sm:w-auto mb-8 sm:mb-0">
    <h3 class="font-bold uppercase text-lg pb-4 transition-colors duration-300 ease-linear">
      {{ title }}
    </h3>

    <ul class="transition-colors duration-300 ease-linear">
      <li class="py-2" v-for="item of items" :key="item.url">
        <Link :outbound="false" :href="item.url" class="text-gray-light font-bold hover:text-blue-active"
              aria-current="page">
          {{ item.label }}
        </Link>
      </li>
    </ul>
  </div>
</template>
<script>
import Link from '../link/Link'

export default {
  name: 'FooterSection',
  components: { Link },
  props: {
    title: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>