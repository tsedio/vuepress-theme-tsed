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
      li-class="w-1/3 sm:w-auto"
  />
</template>
<script>
import ButtonBadge from '../../molecules/button-badge/ButtonBadge'
import ButtonBadges from '../../molecules/button-badge/ButtonBadges'

export default {
  name: 'Frameworks',
  components: {
    ButtonBadges,
    ButtonBadge
  },
  props: {
    showTitle: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 80
    },
    bgColor: {
      type: String,
      default: 'gray-lighter'
    },
    color: {
      type: String,
      default: 'platinium'
    },
    blur: {
      type: [String, Number]
    },
    textSize: {
      type: String,
      default: 'normal'
    },
    shadow: {
      type: String,
      default: 'md'
    },
    padding: {
      type: [String, Number]
    },
    innerPadding: {
      type: [String, Number],
      default: 4
    },
    fontWeight: {
      type: String,
      default: 'bold'
    }
  },
  computed: {
    items () {
      const { frameworks = [] } = this.$frontmatter

      return frameworks
    }
  }
}
</script>