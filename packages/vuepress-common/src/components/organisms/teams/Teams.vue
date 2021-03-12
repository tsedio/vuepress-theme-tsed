<template>
  <div class="bg-gray-lighter w-full rounded-small p-8">
    <h2 class="text-2xl xl:text-3xl text-center font-medium mb-6 pt-4">
      {{ title }}
    </h2>

    <div class="flex flex-wrap -mx-2 md:-mx-4">
      <div class="w-full md:w-1/2 lg:w-1/3 p-4"
           v-for="item in users"
           :key="item.title">
        <UserCard v-bind="item"/>
      </div>
    </div>
  </div>
</template>
<script>
import UserCard from '../../molecules/user/UserCard'

export default {
  name: 'Teams',
  components: {
    UserCard
  },
  props: {
    title: {
      type: String,
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    users () {
      if (this.items.length) {
        return this.items
      }

      const { frontmatter: { teams } } = this.$page

      return teams
    }
  }
}
</script>
