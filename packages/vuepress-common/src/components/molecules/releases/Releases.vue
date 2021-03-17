<template>
   <div class="max-w-xl mx-auto p-8">
      <div class="flow-root">
        <ul class="-mb-8 reset-list">
          <li v-for="item of items" :key="item.id">
            <div class="relative pb-8">
              <span class="absolute top-10 bottom-2 left-5 -ml-px w-0.5 bg-gray-light" aria-hidden="true"></span>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div class="relative px-1">
                    <div class="h-8 w-8 bg-blue rounded-full ring-8 ring-white flex items-center justify-center">
                      <svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 flex-1 py-0">
                  <div class="text-md text-gray-darker">
                    <div class="flex items-center">
                      <a :href="item.html_url" class="reset-link font-bold text-base mr-2">{{ item.name }}</a>

                      <a :href="item.html_url"
                         class="reset-link mt-0.5 inline-flex items-center bg-white rounded-medium border border-gray-light px-3 py-0.5 text-sm">

                        <BxIcon :name="releaseType(item).icon" :color="releaseType(item).color"/>

                        <div class="ml-1 font-bold">{{ releaseType(item).label }}</div>
                      </a>
                    </div>
                    <span class="whitespace-nowrap text-gray-dark text-sm">{{ item.published_at | fromNow }}</span>
                  </div>
                  <div class="bg-gray-lighter rounded-small p-5 pb-1 content__default content__release mt-2"
                       v-html="getHtml(item)">
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import moment from 'moment'
import BxIcon from '../../atoms/icons/BxIcon'
import { createMarkdown } from './markdown'

const markdown = createMarkdown()

const RELEASE_TYPES = {
  BREAKING_CHANGE: {
    label: 'Breaking changes',
    color: 'red',
    icon: 'bx-cloud-lightning'
  },
  FEAT: {
    label: 'Feature',
    color: 'emerald',
    icon: 'bx-rocket'
  },
  FIX: {
    label: 'Bug fixes',
    color: 'orange',
    icon: 'bx-bug'
  },
  TECH: {
    label: 'Feature',
    color: 'emerald',
    icon: 'bx-brush'
  },
  DOC: {
    label: 'Docs',
    color: 'gray-dark',
    icon: 'bxs-news'
  }
}

export default {
  name: 'Releases',
  components: {
    BxIcon
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    fromNow (date) {
      return moment(new Date(date)).fromNow()
    }
  },
  methods: {
    releaseType (item) {
      if (item.body.includes('### BREAKING CHANGES')) {
        return RELEASE_TYPES.BREAKING_CHANGE
      }

      if (item.body.includes('### Features')) {
        return RELEASE_TYPES.FEAT
      }

      if (item.body.includes('### Bug Fixes')) {
        return RELEASE_TYPES.FIX
      }

      if (item.body.includes('### chore')) {
        return RELEASE_TYPES.TECH
      }

      if (item.body.includes('### docs')) {
        return RELEASE_TYPES.DOC
      }

      return RELEASE_TYPES.TECH
    },
    getHtml (item) {
      const [, ...newContent] = item.body.split('\n\n\n')

      return markdown.render(newContent.join('\n'), {}).html
    }
  }
}
</script>
<style>
.content__release.content__default h3 {
  font-size: 17px;
  font-weight: bold;
  margin: 0;
  padding: 0;
}
</style>