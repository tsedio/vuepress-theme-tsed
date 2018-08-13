<template>

  <section class="hero-banner">
    <div class="hero-banner__content">
      <img v-if="logoSrc"
           :src="logoSrc"
           alt="hero">

      <h1>{{ title }}
        <small v-show="version">{{version}}</small>
      </h1>

      <p class="hero-banner__description">
        {{ description }}
      </p>

      <p class="hero-banner__actions">
        <slot></slot>
      </p>

      <ul v-if="terms" class="hero-banner__terms">
        <li v-for="term in terms">{{term}}</li>
      </ul>

    </div>

    <div class="hero-banner__bg hero-banner__bg-1">
      <div>
        <div class="sq-1">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
        </div>
        <div class="sq-2">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
        </div>
        <div class="sq-3">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
        </div>
        <div class="sq-4"></div>
        <div class="sq-5">
          <div class="sqv-1"></div>
        </div>
        <div class="sq-6">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
          <div class="sqv-3"></div>
        </div>
      </div>
    </div>

    <div class="hero-banner__bg hero-banner__bg-2">
      <div>
        <div class="sq-1">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
        </div>
        <div class="sq-2">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
        </div>
        <div class="sq-3">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
        </div>
        <div class="sq-4"></div>
        <div class="sq-5">
          <div class="sqv-1"></div>
        </div>
        <div class="sq-6">
          <div class="sqv-1"></div>
          <div class="sqv-2"></div>
          <div class="sqv-3"></div>
        </div>
      </div>
    </div>

  </section>

</template>
<script>
  export default {
    name: 'HeroBanner',
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
  };
</script>
<style lang="scss" src="./HeroBanner.scss"></style>