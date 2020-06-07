<template>
  <div class="features">
    <div :class="'features__item ' + (feature.src ? ' -icon': '')" v-for="feature in items">
      <div v-if="feature.src" class="features__icon-wrapper">
        <img :src="feature.src">
      </div>
      <h3>{{ feature.title }}</h3>
      <p v-html="feature.details"/>
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
  }
</script>
<style lang="scss" src="./Features.scss"></style>
