<template>
  <div class="text-center flex flex-col p-3">
    <div class="p-2">
      <BxIcon v-if="icon" :name="icon" class="text-5xl" />
    </div>
    <h3 class="text-md font-bold text-blue">{{ title }}</h3>
    <p v-if="description" v-html="description"></p>
    <p><slot /></p>
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
