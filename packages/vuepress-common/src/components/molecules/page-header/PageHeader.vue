<template>
  <div class="page-header" :class="{'-fixed': fixed}">
    <div class="bg-gray-lighter z-5" :class="{relative: !fixed, fixed}">
      <div class="page-header-container px-5 md:px-10 max-w-site m-auto flex items-center">
        <div class="flex-1">
          <div ref="title" id="page-header" class="transition-all"
               :class="{'text-xl font-bold md:font-normal md:text-4xl': !fixed, 'font-bold': fixed}">
            {{ title }}
          </div>
        </div>
        <ul class="flex items-center justify-center text-md -ml-2">
          <li title="Share">
            <ClientOnly>
              <Share class="p-2" :title="title" :brand="brand" :text="shareText"
                     :hash-tags="hashTags"/>
            </ClientOnly>
          </li>
          <li class="px-2" title="Package NPM" v-if="npmPackageUrl">
            <a class="hover:text-blue-active" target="_blank" :href="npmPackageUrl">
              <i class="bx bx-package"></i>
            </a>
          </li>
          <li class="p-2" title="View Code Github" v-if="repoUrl">
            <a class="hover:text-blue-active" target="_blank" :href="repoUrl">
              <i class="bx bx-code-alt"></i>
            </a>
          </li>
          <li class="p-2" title="Edit Page" v-if="editUrl">
            <a class="hover:text-blue-active" target="_blank" :href="editUrl">
              <i class="bx bx-edit"></i>
            </a>
          </li>
          <li class="p-2 last:pr-0" title="Report a Bug" v-if="createIssueUrl">
            <a class="hover:text-blue-active"
               target="_blank"
               :href="createIssueUrl">
              <i class="bx bx-bug"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Share from '../share/Share'

export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      default: ''
    },
    shareText: {
      type: String,
      default: ''
    },
    hashTags: {
      type: Array,
      default: []
    },
    npmPackageUrl: {
      type: String
    },
    repoUrl: {
      type: String
    },
    editUrl: {
      type: String
    },
    createIssueUrl: {
      type: String
    },
    fixed: {
      type: Boolean
    }
  },
  components: {
    Share
  },
  mounted () {
    setTimeout(() => {
      const el = document.querySelector('.content__default > h1')

      if (el) {
        this.$refs.title.innerHTML = ''
        this.$refs.title.appendChild(el)
      }
    }, 100)
  }
}
</script>
<style>
.page-header-container {
  transition: all ease 0.5s;
  height: 100px;
}

.page-header.-fixed > div {
  left: 0;
  right: 0;
}

@screen md {
  .page-header-container {
    height: 200px;
  }
}

.page-header.-fixed:after {
  content: "";
  display: block;
  height: 200px;
}

.page-header.-fixed .page-header-container {
  height: 45px;
}
</style>