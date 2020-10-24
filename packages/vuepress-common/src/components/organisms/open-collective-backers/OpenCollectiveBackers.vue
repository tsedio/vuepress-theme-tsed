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
                :items="backers"></ButtonBadges>
</template>
<script>
import { getBackers } from '../../..'
import ButtonBadges from '../../molecules/button-badge/ButtonBadges'

export default {
  name: 'OpenCollectiveBackers',
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
      backers: []
    }
  },
  components: {
    ButtonBadges
  },
  async mounted () {
    const {
      openCollective
    } = this.$site.themeConfig

    this.backers = await getBackers(openCollective)
  }
}
</script>
