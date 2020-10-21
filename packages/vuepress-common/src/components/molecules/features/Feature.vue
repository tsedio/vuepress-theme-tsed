<template>
  <div class="text-center flex flex-col p-3">
    <div class="p-2 text-api-default mb-3">
      <BxIcon v-if="icon" :name="icon" class="text-7xl" />
    </div>
    <h3 class="text-md font-bold text-blue mb-2">{{ title }}</h3>
    <div style="max-width: 250px" class="m-auto">
      <template v-if="description" v-html="description"></template>
      <slot />
    </div>
  </div>
</template>
<script>
  import BxIcon from '../../atoms/icons/BxIcon'
  export default {
    name: 'Feature',
    components: { BxIcon },
    props: {
      title: {
        type: String
      },
      icon: {
        type: String
      },
      description: {
        type: String
      }
    }
  }
</script>
