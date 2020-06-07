<template>
  <ul class="contributors">
    <li class="contributors__badge" v-for="contributor in contributors">
      <a :href="contributor.href" target="_blank" @click="() => onClick(contributor)" :title="contributor.login">
        <img :src="contributor.src" v-if="contributor.src">
        <span class="contributors__empty-avatar" v-else>{{contributor.login | initial}}</span>
        <span>{{contributor.login | overflow}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'Contributors',
    props: {
      contributors: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        required: true
      }
    },

    filters: {
      initial (text) {
        return text.split(' ').map(text => text.slice(0, 1)).join('')
      },
      overflow (text) {
        return text.slice(0, 12) + (text.length > 12 ? '...' : '')
      }
    },
    methods: {
      onClick (contributor) {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: this.type + '-contributors',
            eventAction: 'click',
            eventLabel: 'name',
            eventValue: contributor.login
          })
        }
      }
    }
  }
</script>
<style lang="scss" src="./Contributors.scss"></style>
