<template>
  <ButtonBadges
      :items="items"
      :show-title="showTitle"
      :font-weight="fontWeight"
      :shadow="shadow"
      :padding="padding"
      :inner-padding="innerPadding"
      :bgColor="bgColor"
      :color="color"
      :text-size="textSize"
      :blur="blur"
      :width="width"
  />
</template>
<script>
import ButtonBadges from '../button-badge/ButtonBadges.vue'

export default {
  name: 'Contributors',
  components: { ButtonBadges },
  props: {
    contributors: {
      type: Array,
      default: () => []
    },
    showTitle: {
      type: Boolean,
      default: false
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
  computed: {
    items () {
      return this.contributors.map((item) => ({
        ...item,
        title: item.login
      }))
    }
  }
}
</script>
