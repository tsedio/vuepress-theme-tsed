<template>
  <div class="">
    <Feature v-for="feature in items"
             :src="feature.src"
             :title="feature.title"
             :desciption="feature.details" />
  </div>
</template>
<script>
  export default {
    name: 'Features',
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>
