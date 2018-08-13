<template>
  <div class="features">
    <div class="features__item" v-for="feature in items">
      <h2>{{ feature.title }}</h2>
      <p>{{ feature.details }}</p>
    </div>
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
  };
</script>
<style lang="scss" src="./Features.scss"></style>