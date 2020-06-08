<template>
  <div :class="`-m-${padding} mb-5`">
    <ul class="reset-list flex flex-wrap items-center">
      <li :class="`p-${padding}`"
          v-for="contributor in contributors"
          :key="contributor.login">
        <ContributorBadge @click="onClick"
                          v-bind="contributor"
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
  import ContributorBadge from './ContributorBadge'

  export default {
    name: 'Contributors',
    components: { ContributorBadge },
    props: {
      contributors: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default: 'github'
      },
      width: {
        type: Number,
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
        type: Number,
        default: 3
      }
    },
    methods: {
      onClick (contributor) {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: `${this.type}-contributors`,
            eventAction: 'click',
            eventLabel: 'name',
            eventValue: contributor.login
          })
        }
      }
    }
  }
</script>
