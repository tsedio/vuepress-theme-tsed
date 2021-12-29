<template>
  <div class="flex flex-wrap">
    <div v-if="gettingStartedUrl" class="pb-5 pr-3 md:pb-0 w-1/2 md:w-auto">
      <Button :href="gettingStartedUrl"
              color="white-button"
              bg-color="blue"
              rounded="medium"
              class="border-2 w-full">
        {{ gettingStartedText }}
      </Button>
    </div>
    <div v-if="messengerUrl" class="pb-5 pr-0 md:pr-3 w-1/2 md:w-auto">
      <Button :href="messengerUrl"
              color="gray-darker"
              bg-color="transparent"
              border-color="gray-darker"
              rounded="medium"
              class="border-2 mr-2 w-full">
        <BxIcon v-if="messengerIcon" :name="messengerIcon" class="mr-2 -ml-1 text-lg"></BxIcon>
        {{ messengerText }}
      </Button>
    </div>

    <div v-if="sponsorUrl" class="pr-3 flex-1 md:flex-none md:w-auto">
      <Button :href="sponsorUrl"
              color="gray-darker"
              bg-color="transparent"
              border-color="gray-darker"
              rounded="medium"
              class="border-2 mr-2 w-full">
        <BxIcon v-if="sponsorIcon" :name="sponsorIcon" class="mr-2 -ml-1 text-lg"></BxIcon>
        {{ sponsorText }}
      </Button>
    </div>

    <GithubStars class="md:w-auto"></GithubStars>
  </div>
</template>
<script>
import BxIcon from '../../atoms/icons/BxIcon'
import Button from '../button/Button'
import GithubStars from '../github-stars/GithubStars'

export default {
  name: 'HeroBanner',
  components: {
    GithubStars,
    BxIcon,
    Button
  },
  props: {
    gettingStartedText: {
      type: String,
      default: 'Getting started'
    },
    gettingStartedUrl: {
      type: String
    },
    messengerText: {
      type: String,
      default: 'Gitter'
    },
    messengerUrl: {
      type: String
    },
    messengerIcon: {
      type: String,
      default: 'bx-message-rounded-dots'
    },
    sponsorText: {
      type: String
    },
    sponsorUrl: {
      type: String
    },
    sponsorIcon: {
      type: String,
      default: 'bx-heart'
    }
  }
}
</script>
