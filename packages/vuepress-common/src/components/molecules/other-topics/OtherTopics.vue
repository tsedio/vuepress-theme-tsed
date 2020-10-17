<template>
  <section class="other-topics">
    <slot name="top"/>

    <ul class="flex justify-start flex-wrap -mx-1">
      <li class="p-1" v-for="(item, i) in items" :key="i">
        <router-link class="text-xs no-underline py-1 px-2 bg-gray-lighter rounded-small hover:bg-blue hover:text-white"
                     :to="item.path">{{ item.title }}
        </router-link>
      </li>
    </ul>

    <slot name="bottom"/>
  </section>
</template>
<script>
export default {
  name: 'OtherTopics',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
.other-topics a {
  transition: all ease-in-out 0.5s;
  text-decoration: none;
}
</style>