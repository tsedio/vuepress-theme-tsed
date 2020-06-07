<template>
  <ul class="projects">
    <li class="projects__badge" v-for="project in projects">
      <a :href="project.href" target="_blank" @click="() => onClick(project)" :title="project.title">
        <img :src="project.src"/>
        <span>{{project.title}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'Projects',
    props: {
      type: {
        type: String,
        required: true
      }
    },
    computed: {
      projects () {
        const { frontmatter: { projects } } = this.$page

        return projects
      }
    },
    methods: {
      onClick (project) {
        if (this.$ga) {
          this.$ga.event({
            eventCategory: this.type + '-projects',
            eventAction: 'click',
            eventLabel: 'name',
            eventValue: project.login
          })
        }
      }
    }
  }
</script>
<style lang="scss" src="./Projects.scss"></style>
