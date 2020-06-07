<template>
  <div class="testimonial">
    <h1 class="testimonial__heading" v-html="title"></h1>
    <p class="testimonial__details">
      {{details}}
    </p>
  </div>
</template>
<script>
  export default {
    name: 'Testimonial',
    props: {
      title: {
        type: String,
        required: true
      },
      details: {
        type: String,
        required: true
      }
    }
  };
</script>
<style lang="scss" src="./Testimonial.scss"></style>
