<template>
  <div class="contributing">
    <HeroBanner :logoSrc="data.heroImage && $withBase(data.heroImage)"
                :title="data.heroText || $title || 'Hello'"
                :version="data.heroVersion || $version"
                :terms="data.heroTerms"
                :description="data.heroDescription || $description || 'Welcome to your VuePress site'">
    </HeroBanner>


    <article>
      <div class="container container--padded">
        <Content custom/>
      </div>
    </article>

    <div class="container--primary-color" v-if="data.contributors">
      <div class="container container--padded">

        <h2 class="heading -white" v-html="data.contributors.title"></h2>

        <GithubContributors class="-white"></GithubContributors>

        <div class="container--centered container--padded" v-if="data.contributors.button">
          <NavLink v-if="data.contributors.button" class="button" :href="data.contributors.button.link">
            {{data.contributors.button.text}}
          </NavLink>
        </div>
      </div>
    </div>

    <div class="container--grey-lighter" v-if="data.backers">
      <div class="container container--padded">
        <h2 class="heading" v-html="data.backers.title"></h2>

        <p>
          {{data.backers.details}}
        </p>

        <OpenCollectiveBackers></OpenCollectiveBackers>

        <div class="container--centered container--padded" v-if="data.backers.button">
          <NavLink class="button" :href="data.backers.button.link">
            {{data.backers.button.text}}
          </NavLink>
        </div>
      </div>
    </div>

    <div class="container--white" v-if="data.sponsors">
      <div class="container container--padded">
        <h2 class="heading" v-html="data.sponsors.title"></h2>

        <p>
          {{data.sponsors.details}}
        </p>

        <OpenCollectiveSponsors></OpenCollectiveSponsors>

        <div class="container--centered container--padded" v-if="data.sponsors.button">
          <NavLink class="button primary-color" :href="data.sponsors.button.link">
            {{data.sponsors.button.text}}
          </NavLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Features from '../components/features/Features.vue'
  import GithubContributors from '../components/github-contributors/GithubContributors.vue'
  import OpenCollectiveBackers from '../components/open-collective-backers/OpenCollectiveBackers.vue'
  import OpenCollectiveSponsors from '../components/open-collective-sponsors/OpenCollectiveSponsors.vue'
  import HeroBanner from '../components/hero-banner/HeroBanner.vue'
  import NavLink from '../components/navbar/NavLink.vue'
  import Testimonial from '../components/testimonial/Testimonial.vue'

  export default {
    name: 'Contributing',
    components: {
      HeroBanner,
      Testimonial,
      NavLink,
      Features,
      GithubContributors,
      OpenCollectiveBackers,
      OpenCollectiveSponsors
    },

    computed: {
      data () {
        return this.$page.frontmatter
      },

      actionLink () {
        return {
          link: this.data.actionLink,
          text: this.data.actionText
        }
      },

      repoLink () {
        return {
          link: this.data.repoLink,
          text: this.data.repoText
        }
      }
    }
  }
</script>

<style lang="scss" src="./Contributing.scss"></style>
