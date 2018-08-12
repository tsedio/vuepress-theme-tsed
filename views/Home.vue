<template>
  <div class="home">
    <HeroBanner :logoSrc="data.heroImage && $withBase(data.heroImage)"
                :title="data.heroText || $title || 'Hello'"
                :terms="data.heroTerms"
                :description="data.tagline || $description || 'Welcome to your VuePress site'">

      <NavLink class="button" v-if="data.actionText && data.actionLink" :href="data.actionLink">
        {{data.actionText}}
      </NavLink>

      <NavLink class="button transparent" v-if="data.repoText && data.repoLink" :href="data.repoLink">
        {{data.repoText}}
      </NavLink>

    </HeroBanner>

    <div class="container">

      <div class="features" v-if="data.features && data.features.length">
        <div class="feature" v-for="feature in data.features">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>

      <Content custom/>

    </div>
  </div>
</template>

<script>
  import HeroBanner from '../components/hero-banner/HeroBanner.vue';
  import NavLink from '../components/navbar/NavLink.vue';

  export default {
    components: {
      HeroBanner,
      NavLink
    },

    computed: {
      data() {
        return this.$page.frontmatter;
      },

      actionLink() {
        return {
          link: this.data.actionLink,
          text: this.data.actionText
        };
      },

      repoLink() {
        return {
          link: this.data.repoLink,
          text: this.data.repoText
        };
      }
    }
  };
</script>

<style lang="scss" src="./Home.scss"></style>
