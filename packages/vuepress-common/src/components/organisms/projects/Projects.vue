<template>
  <div class="bg-gray-lighter rounded-small my-5  p-5">
    <div :class="`-m-${padding}`">
      <ul class="reset-list flex flex-wrap items-center">
        <li :class="`p-${padding}`"
            v-for="project in projects"
            :key="project.title">
          <ButtonBadge
              :title="project.title"
              :src="project.src"
              :href="project.href"
              :bgColor="bgColor"
              :color="color"
              :text-size="textSize"
              :blur="blur"
              :width="width"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ButtonBadge from '../../molecules/button-badge/ButtonBadge'

export default {
  name: 'Projects',
  components: {
    ButtonBadge
  },
  props: {
    width: {
      type: [String, Number],
      default: 65
    },
    bgColor: {
      type: String,
      default: 'white'
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
  },
  computed: {
    projects () {
      const { frontmatter: { projects } } = this.$page

      return projects
    }
  }
}
</script>
