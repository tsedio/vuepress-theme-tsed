<template>
  <div>
    <HeroBanner>
      <template slot="hero-brand">
        <Content slot-key="hero-brand"/>
      </template>

      <template slot="hero-slogan">
        <Content slot-key="hero-slogan"/>
      </template>

      <template slot="hero-content">
        <Content slot-key="hero-content"/>
      </template>

      <template slot="hero-cta">
        <HeroBannerCta :getting-started-text="gettingStartedText"
                       :getting-started-url="gettingStartedUrl"
                       :messenger-text="messengerText"
                       :messenger-url="messengerUrl"/>
      </template>
    </HeroBanner>

    <div class="bg-gray-lighter py-10">
      <div class="container flex flex-col w-full max-w-md mx-auto px-3 pb-5 text-center">
        <h2 class="text-2xl mb-5 normal-case">
          <Content slot-key="testimonial-title"/>
        </h2>
        <Content slot-key="testimonial-content"/>
      </div>
    </div>

    <div v-if="features.length">
      <div class="container flex flex-col w-full max-w-site mx-auto px-5 py-5">
        <div>
          <div class="flex flex-wrap align-center justify-center">
            <Feature v-for="feature in features"
                     :title="feature.title"
                     :icon="feature.icon"
                     class="w-full sm:w-1/2 md:w-1/3 mb-5">
              <div v-html="feature.details">
              </div>
            </Feature>
          </div>

          <div class="flex items-center justify-center pt-5 mb-5">
            <div>
              <Button
                  rounded="medium"
                  class="m-2"
                  :href="gettingStartedUrl">
                See more
              </Button>

              <Button
                  v-if="liveDemoUrl"
                  :href="liveDemoUrl"
                  rounded="medium"
                  class="m-2"
                  bg-color="white-button"
                  color="blue">
                Live demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot name="page-top"/>

    <Content/>

    <Showcase :class="contributors.classes"
              v-bind="contributors"
              v-if="contributors">

      <GithubContributors v-bind="contributors.badge"/>

      <template #showcase-cta>
        <Button
            :bg-color="contributors.cta.bgColor"
            :color="contributors.cta.color"
            rounded="medium"
            :href="contributors.cta.url">
          {{ contributors.cta.label }}
        </Button>
      </template>
    </Showcase>

    <Showcase :class="backers.classes"
              v-bind="backers"
              v-if="backers">

      <OpenCollectiveBackers v-bind="backers.badge"/>

      <template #showcase-cta>
        <Button
            :bg-color="backers.cta.bgColor"
            :color="backers.cta.color"
            rounded="medium"
            :href="backers.cta.url">
          {{ backers.cta.label }}
        </Button>
      </template>
    </Showcase>

    <Showcase :class="sponsors.classes"
              v-bind="sponsors">

      <OpenCollectiveSponsors v-bind="sponsors.badge"/>

      <div v-if="sponsors.partners" class="flex flex-wrap mb-8 -mx-5">
        <PartnerLogo
            class="w-1/5 p-5 flex items-center justify-center"
            v-for="partner in sponsors.partners"
            :key="partner.href"
            :src="partner.src"
            :href="partner.href"
            :title="partner.title"/>
      </div>

      <template #showcase-cta>
        <Button
            :bg-color="sponsors.cta.bgColor"
            :color="sponsors.cta.color"
            rounded="medium"
            :href="sponsors.cta.url">
          {{ sponsors.cta.label }}
        </Button>
      </template>
    </Showcase>

    <slot name="page-bottom"/>
  </div>
</template>
<script>
import {
  Button,
  Feature,
  GithubContributors,
  HeroBanner,
  HeroBannerCta,
  OpenCollectiveBackers,
  OpenCollectiveSponsors,
  Showcase,
  WordsSlider
} from '@tsed/vuepress-common'

export default {
  name: 'Home',
  components: {
    HeroBanner,
    HeroBannerCta,
    WordsSlider,
    Feature,
    GithubContributors,
    OpenCollectiveBackers,
    OpenCollectiveSponsors,
    Button,
    Showcase
  },
  computed: {

    gettingStartedUrl () {
      const { gettingStartedUrl } = this.$page.frontmatter
      return gettingStartedUrl
    },
    gettingStartedText () {
      const { gettingStartedText } = this.$page.frontmatter
      return gettingStartedText
    },
    messengerUrl () {
      const { messengerUrl } = this.$page.frontmatter
      return messengerUrl
    },
    messengerText () {
      const { messengerText } = this.$page.frontmatter
      return messengerText
    },
    features () {
      const { features = [] } = this.$page.frontmatter
      return features
    },
    contributors () {
      const { contributors } = this.$page.frontmatter
      return contributors
    },
    backers () {
      const { backers } = this.$page.frontmatter
      return backers
    },
    sponsors () {
      const { sponsors } = this.$page.frontmatter
      return sponsors
    },
    liveDemoUrl () {
      const { liveDemoUrl } = this.$page.frontmatter
      return liveDemoUrl
    }
  }
}
</script>
