<template>
  <div class="page">
    <article class="container">
      <slot name="page-top"/>

      <Content :custom="false"/>

      <slot name="page-bottom"/>
    </article>
  </div>
</template>

<script>
// import PageNav from '../components/page-nav/PageNav'

export default {
  name: 'Page',
  // components: { PageNav },
  // props: ['sidebarItems']
}
</script>

