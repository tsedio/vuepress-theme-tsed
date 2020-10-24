<template>
  <ButtonBadges :blur="blur"
                :text-size="textSize"
                :bg-color="bgColor"
                :color="color"
                :width="width"
                :padding="padding"
                :innerPadding="innerPadding"
                :font-weight="fontWeight"
                :shadow="shadow"
                :show-title="true"
                :items="sponsors"></ButtonBadges>
</template>
<script>
import { getSponsors } from '../../..'
import ButtonBadges from '../../molecules/button-badge/ButtonBadges'

export default {
  name: 'OpenCollectiveSponsors',
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 60
    },
    bgColor: {
      type: String,
      default: 'gray-lighter'
    },
    color: {
      type: String,
      default: 'blue'
    },
    blur: {
      type: [String, Number]
    },
    textSize: {
      type: String,
      default: 'xxs'
    },
    shadow: {
      type: String
    },
    padding: {
      type: [String, Number]
    },
    innerPadding: {
      type: [String, Number]
    },
    fontWeight: {
      type: String
    }
  },
  data: () => {
    return {
      sponsors: []
    }
  },
  components: {
    ButtonBadges
  },
  async mounted () {
    const {
      openCollective
    } = this.$site.themeConfig

    this.sponsors = await getSponsors(openCollective)
  }
}
</script>
