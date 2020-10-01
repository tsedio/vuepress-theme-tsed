<template>
  <section class="hero-banner">
    <div class="hero-banner__content">
      <Component :is="component" v-bind="info">
        <slot></slot>
      </Component>
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
  import HeroBannerContent from './HeroBannerContent'

  export default {
    name: 'HeroBanner',
    components: { HeroBannerContent },
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
      },
      component: {
        type: Object,
        required: false,
        default: () => HeroBannerContent
      }
    },
    computed: {
      info () {
        return {
          title: this.title,
          version: this.version,
          description: this.description,
          terms: this.terms,
          logoSrc: this.logoSrc
        }
      }
    }
  }
</script>
<style lang="scss" src="./HeroBanner.scss"></style>
