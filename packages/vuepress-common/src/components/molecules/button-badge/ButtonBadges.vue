<template>
  <div :class="`-m-${padding} mb-5`">
    <ul class="reset-list flex flex-wrap items-center">
      <li :class="`p-${padding}`"
          v-for="item in items"
          :key="item.title">
        <ButtonBadge
            :show-title="showTitle"
            :title="item.title"
            :src="item.src"
            :href="item.href"
            :bgColor="bgColor"
            :color="color"
            :text-size="textSize"
            :blur="blur"
            :width="width"
            :shadow="shadow"
            :font-weight="fontWeight"
            :padding="innerPadding"/>
      </li>
    </ul>
  </div>
</template>
<script>
import ButtonBadge from '../button-badge/ButtonBadge.vue'

export default {
  name: 'ButtonBadges',
  components: { ButtonBadge },
  props: {
    items: {
      type: Array,
      default: () => []
    },
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
      type: [String, Number],
      default: 5
    },
    innerPadding: {
      type: [String, Number]
    },
    fontWeight: {
      type: String
    }
  }
}
</script>
