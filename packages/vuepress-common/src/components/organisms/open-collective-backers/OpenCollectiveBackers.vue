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
    },
    ignore: {
      type: Array,
      default: []
    },
    type: {
      type: String,
      default: 'BACKER'
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

    const backers = await getBackers(openCollective, this.type)
    .reduce((map, backer) => {
      return map.set(map.name, backer)
    }, new Map())

    this.backers = [...backers.values()]
  }
}
</script>
