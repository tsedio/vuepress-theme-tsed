<template>
  <footer>
    <slot name="top"/>
    <div class="px-5 md:px-10  m-auto bg-code-active relative">
      <div class="pt-5 pb-8 text-center text-white">
        <div class="flex items-center">
          <div class="flex-1 flex items-center justify-center">
            <IconLink
                v-for="item of socialItems"
                class="flex align-center justify-center text-xl py-4 mx-2"
                :key="item.title"
                :title="item.title"
                :href="item.url"
                :icon="item.icon"/>
          </div>
          <div class="absolute top-0 right-0 p-10 pr-13">
            <GithubStars border-color="white" color="blue"/>
          </div>
        </div>
        <div class="text-sm">
          Copyright © {{ copyrightDates.start }}-{{ copyrightDates.end }} <a
            class="text-blue font-bold hover:text-blue-active"
            href="/license.html">{{ licenseType }} License</a> <span
            class="inline-block text-gray-light px-1">|</span> By
          {{ author }}
        </div>
      </div>
    </div>
    <slot name="bottom"/>
  </footer>
</template>
<script>
import { SOCIALS } from '../../../utils/socials/socials'
import Button from '../button/Button'
import GithubStars from '../github-stars/GithubStars'
import IconLink from '../link/IconLink'

export default {
  components: { GithubStars, Button, IconLink },
  props: {
    author: {
      type: String
    },
    licenseType: {
      type: String
    },
    repoUrl: {
      type: String,
      default: undefined
    },
    copyrightDates: {
      type: Object,
      default: () => ({})
    },
    socialUrls: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    socialItems () {
      const { socialUrls = {}, repoUrl } = this

      return SOCIALS
          .filter((item) => item.type !== 'sponsor')
          .map((item) => {
            if (item.type === 'github' && repoUrl) {
              return {
                ...item,
                url: repoUrl
              }
            }

            if (socialUrls[`${item.type}Url`]) {
              return {
                ...item,
                url: socialUrls[`${item.type}Url`]
              }
            }
            return false
          })
          .concat(socialUrls.additionalItems || [])
          .filter(Boolean)
    }
  }
}
</script>
