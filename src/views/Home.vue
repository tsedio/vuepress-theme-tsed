<template>
  <div class="home">
    <HeroBanner :logoSrc="data.heroImage && $withBase(data.heroImage)"
                :title="data.heroText || $title || 'Hello'"
                :version="data.heroVersion || $site.themeConfig.version"
                :terms="data.heroTerms"
                :description="data.heroDescription || $description || 'Welcome to your VuePress site'"
                :component="data.heroComponent">

      <ul class="home__actions">
        <li>
          <NavLink class="button" v-if="data.actionText && data.actionLink" :href="data.actionLink"
                   @click="onClickAction()">
            {{data.actionText}}
          </NavLink>
        </li>
        <li>
          <GithubStars v-if="data.repoText && data.repoLink"></GithubStars>
        </li>
      </ul>
    </HeroBanner>

    <article>
      <div class="container--grey-lighter" v-if="data.testimonial">
        <div class="container">
          <Testimonial :title="data.testimonial.title" :details="data.testimonial.details"></Testimonial>
        </div>
      </div>

      <div class="container container--padded" v-if="data.features && data.features.length">
        <h2 class="heading">Our <br/><b>features</b></h2>

        <Features :items="data.features"></Features>
      </div>

      <div class="container container--padded" v-if="data.showContent">
        <Content custom/>
      </div>

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
    </article>

  </div>
</template>

<script>
  import Features from '../components/features/Features.vue'
  import GithubContributors from '../components/github-contributors/GithubContributors.vue'
  import HeroBanner from '../components/hero-banner/HeroBanner.vue'
  import NavLink from '../components/navbar/NavLink.vue'
  import Testimonial from '../components/testimonial/Testimonial.vue'
  import GithubStars from '../components/github-stars/GithubStars'
  import OpenCollectiveBackers from '../components/open-collective-backers/OpenCollectiveBackers'
  import OpenCollectiveSponsors from '../components/open-collective-sponsors/OpenCollectiveSponsors'

  export default {
    name: 'Home',
    components: {
      GithubStars,
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
    },

    methods: {
      onClickAction () {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: 'home',
            eventAction: 'click',
            eventLabel: 'action',
            eventValue: this.data.actionText
          })
        }
      },
      onClickRepo () {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: 'home',
            eventAction: 'click',
            eventLabel: 'repository',
            eventValue: this.data.repoText
          })
        }
      }
    }
  }
</script>

<style lang="scss" src="./Home.scss"></style>
