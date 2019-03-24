<template>
  <section class="other-topics">
    <ul>
      <slot name="top"/>
      <li v-for="(item, i) in items" :key="i">
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
      <slot name="bottom"/>
    </ul>
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
  };
</script>
<style lang="scss" src="./OtherTopics.scss"></style>