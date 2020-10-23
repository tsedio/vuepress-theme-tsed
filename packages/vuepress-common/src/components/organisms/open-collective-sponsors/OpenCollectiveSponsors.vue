<template>
  <Contributors :blur="blur"
                :text-size="textSize"
                :bg-color="bgColor"
                :color="color"
                :width="width"
                :padding="padding"
                :contributors="sponsors"></Contributors>
</template>
<script>
import { getSponsors } from '../../..'
import Contributors from '../../molecules/contributors/Contributors.vue'

export default {
  name: 'OpenCollectiveSponsors',
  props: {
    bgColor: {
      type: String
    },
    width: {
      type: Number,
      default: 60
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
    padding: {
      type: Number,
      default: 3
    }
  },
  data: () => {
    return {
      sponsors: []
    }
  },
  components: {
    Contributors
  },
  async mounted () {
    const {
      openCollective
    } = this.$site.themeConfig

    this.sponsors = await getSponsors(openCollective)
  }
}
</script>
