<template>
  <div>
    <div class="showcase relative">
      <div v-lazyload class="hidden lg:block absolute right-0  top-0 opacity-10 z-0 w-1/4 p-5 m-10">
        <img data-url="/sponsors.svg" alt="https://www.freepik.com/" title="https://www.freepik.com/"/>
      </div>
      <div class="w-full max-w-site mx-auto px-5 py-5 relative z-1">
        <div>
          <div class="flex flex-col items-center">
            <h2 v-if="sponsors.title" class="text-center text-4xl normal-case mb-5 text-blue font-bold"
                v-html="sponsors.title"/>

            <p v-if="sponsors.description" class="text-center font-normal text-normal m-auto max-w-md mb-10"
               v-html="sponsors.description"/>

            <template v-for="(item, index) in sponsorsBeforeBacker">
              <SponsorsBlock :item="item" :key="index"/>
            </template>

            <h3 class="text-xl font-bold mb-10">Our backers</h3>

            <div class="flex flex-wrap justify-center items-stretch w-full">
              <OpenCollectiveBackers v-bind="backers.badge"/>
            </div>

            <template v-for="(item, index) in sponsorsAfterBacker">
              <SponsorsBlock :item="item" :key="index"/>
            </template>

            <div class="mt-10 mb-5 text-center w-full">
              <Button
                class="w-full sm:w-1/4 md:w-1/6 mb-5 sm:mx-2"
                :bg-color="sponsors.cta.bgColor"
                :color="sponsors.cta.color"
                rounded="medium"
                :href="sponsors.cta.url">
                {{ sponsors.cta.label }}
              </Button>

              <Button
                class="w-full sm:w-1/3 md:w-1/6 mb-5 sm:mx-2"
                :bg-color="backers.cta.bgColor"
                :color="backers.cta.color"
                rounded="medium"
                :href="backers.cta.url">
                {{ backers.cta.label }}
              </Button>

              <Button
                v-if="support"
                bg-color="button-white"
                color="blue"
                data-mode="popup"
                class="w-full sm:w-1/3 md:w-1/6 sm:mx-2 typeform-share"
                rounded="medium"
                :href="support.url">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '../../molecules/button/Button'
import Showcase from '../../molecules/showcase/Showcase'
import OpenCollectiveBackers from '../open-collective-backers/OpenCollectiveBackers'
import SponsorsBlock from './SponsorsBlock'
import Lazyload from '../../molecules/observer/lazyload'

export default {
  name: 'SupportUsBlock',
  components: {
    SponsorsBlock,
    OpenCollectiveBackers,
    Button,
    Showcase
  },
  directives: {
    lazyload: Lazyload
  },
  computed: {
    backers () {
      if (this.$site.themeConfig.backers) {
        return this.$site.themeConfig.backers
      }

      const {backers} = this.$page.frontmatter
      return backers
    },
    sponsors () {
      if (this.$site.themeConfig.sponsors) {
        return this.$site.themeConfig.sponsors
      }

      const {sponsors} = this.$page.frontmatter
      return sponsors
    },

    sponsorsBeforeBacker () {
      const sponsors = this.sponsors

      return sponsors.items.filter((item) => {
        return item.position !== 'after-backers'
      })
    },

    support () {
      if (this.$site.themeConfig.support) {
        return this.$site.themeConfig.support
      }

      const {support} = this.$page.frontmatter
      return support
    },

    sponsorsAfterBacker () {
      const sponsors = this.sponsors
      const now = Date.now()
      let hasItems = false

      const list = sponsors.items.filter((item) => {
        return item.position === 'after-backers'
      })
        .map((item) => {
          const items = item.items.filter((item) => {
            return item.expireAt ? new Date(item.expireAt).getTime() > now : true
          })

          if (items.length) {
            hasItems = true
          }

          return {
            ...item,
            items
          }
        })

      if (!hasItems) {
        return []
      }
      return list
    }
  }
}
</script>
