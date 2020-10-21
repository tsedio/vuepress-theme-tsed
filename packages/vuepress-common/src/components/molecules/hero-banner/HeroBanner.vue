<template>
  <div class="hero-banner flex pt-5 md:items-center">
    <div class="container flex w-full max-w-site mx-auto px-10 pb-10">
      <div class="flex flex-col sm:w-1/2 justify-center">
        <div class="mb-5 text-center md:text-left">
          <h1 class="text-2xl normal-case mb-4 leading-8 md:font-light md:text-5xl md:leading-10">
            <slot name="hero-brand"/>
          </h1>
          <div class="mt-0 text-gray-dark md:text-lg pb-3">
            <slot name="hero-slogan"/>
          </div>
        </div>

        <slot name="hero-cta"/>
      </div>

      <div class="hidden sm:block w-1/2">
        <slot name="hero-content"/>
      </div>
    </div>
  </div>
</template>
<script>
import WordsSlider from '../words-slider/WordsSlider'

export default {
  name: 'HeroBanner',
  components: {
    WordsSlider
  },
  props: {
    keywords: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.hero-banner {
  min-height: 400px;
  height: 60vh;
}
</style>