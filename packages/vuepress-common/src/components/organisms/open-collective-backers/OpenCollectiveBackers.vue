<template>
  <Contributors :blur="blur"
                :text-size="textSize"
                :bg-color="bgColor"
                :color="color"
                :width="width"
                :padding="padding"
                :contributors="backers"
                :showTitle="true"></Contributors>
</template>
<script>
import { getBackers } from '../../..'
import Contributors from '../../molecules/contributors/Contributors.vue'

export default {
  name: 'OpenCollectiveBackers',
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
      backers: []
    }
  },
  components: {
    Contributors
  },
  async mounted () {
    const {
      openCollective
    } = this.$site.themeConfig

    this.backers = await getBackers(openCollective)
  }
}
</script>
