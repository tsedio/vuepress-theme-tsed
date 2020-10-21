<template>
  <div class="showcase">
    <div :class="{'sm:flex': isCols}" class="w-full max-w-site mx-auto px-5 py-5 md:py-10">
      <div :class="{'mb-5 sm:pr-15 w-full sm:w-1/3 flex justify-center': isCols}" v-if="isCols && image">
        <Link :href="image.href" :title="image.title" :outbound="false" class="w-1/2 sm:w-full">
          <img :src="image.src" :alt="image.alt"/>
        </Link>
      </div>
      <div :class="{'flex justify-start items-center': isCols, 'sm:pr-10 w-full sm:w-1/3': isCols && !image}">
        <div>
          <h2 :class="{'sm:text-left': isCols}"
              class="text-center text-4xl normal-case mb-10"
              v-html="title"/>

          <p class="mb-8 text-md text-gray-dark" v-if="description" v-html="description"/>

          <div :class=" {'sm:hidden': isCols && !image}">
            <slot/>
          </div>

          <div v-if="cta" :class="{'sm:text-left': isCols}" class="mb-4 text-center">
            <slot name="showcase-cta"/>
          </div>
        </div>
      </div>

      <div v-if="isCols && !image" class="hidden flex-1 sm:flex justify-start items-center pt-5 pr-3">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
import Link from '../link/Link'

export default {
  name: 'Showcase',
  components: {
    Link
  },
  props: {
    type: {
      type: String,
      default: 'row'
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    image: {
      type: Object
    },
    cta: {
      type: Object
    }
  },
  computed: {
    isCols () {
      return ['cols'].includes(this.type)
    }
  }
}
</script>