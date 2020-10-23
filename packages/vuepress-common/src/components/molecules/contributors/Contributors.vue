<template>
  <div :class="`-m-${padding} mb-5`">
    <ul class="reset-list flex flex-wrap items-center">
      <li :class="`p-${padding}`"
          v-for="contributor in contributors"
          :key="contributor.login">
        <ButtonBadge
            :title="contributor.login"
            :src="contributor.src"
            :href="contributor.href"
            :bgColor="bgColor"
            :color="color"
            :text-size="textSize"
            :blur="blur"
            :width="width"/>
      </li>
    </ul>
  </div>
</template>
<script>
import ButtonBadge from '../button-badge/ButtonBadge'

export default {
  name: 'Contributors',
  components: { ButtonBadge },
  props: {
    contributors: {
      type: Array,
      default: () => []
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
    textSize: {
      type: String,
      default: 'xxs'
    },
    blur: {
      type: [String, Number]
    },
    padding: {
      type: [String, Number],
      default: 3
    }
  }
}
</script>
