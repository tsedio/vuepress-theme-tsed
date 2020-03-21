<template>
  <div>
    <img v-if="logoSrc"
         :src="logoSrc"
         alt="hero">

    <h1>{{ title }}
      <small v-show="version">{{version}}</small>
    </h1>

    <p class="hero-banner__description">
      {{ description }}
    </p>

    <ul v-if="terms" class="hero-banner__terms">
      <li v-for="term in terms">{{term}}</li>
    </ul>

    <p class="hero-banner__actions">
      <slot></slot>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'HeroBannerContent',
    props: {
      title: {
        type: String,
        required: true
      },
      version: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: true
      },
      terms: {
        type: Array,
        required: false
      },
      logoSrc: {
        type: String,
        required: false
      }
    }
  }
</script>
