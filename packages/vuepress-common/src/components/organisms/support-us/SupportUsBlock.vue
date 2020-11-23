<template>
  <div>
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
      <div v-if="sponsors.partners" class="flex flex-wrap mb-8 -mx-3 sm:-mx-5">
        <PartnerLogo
            class="w-1/3 sm:w-1/5 p-3 sm:p-5 flex items-center justify-center"
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
  </div>
</template>
<script>
import { Button, Showcase } from '../../molecules'
import { OpenCollectiveBackers } from '../index'

export default {
  name: 'SupportUsBlock',
  components: {
    OpenCollectiveBackers,
    Button,
    Showcase
  },
  computed: {
    backers () {
      const { backers } = this.$page.frontmatter
      return backers
    },
    sponsors () {
      const { sponsors } = this.$page.frontmatter
      return sponsors
    }
  }
}
</script>