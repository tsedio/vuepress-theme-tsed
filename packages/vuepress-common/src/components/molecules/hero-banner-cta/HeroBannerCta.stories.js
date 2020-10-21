import HeroBannerCta from '../hero-banner-cta/HeroBannerCta'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/HeroBannerCta'
}

export const overview = () => ({
  components: {
    HeroBannerCta
  },
  props: {
    gettingStartedText: {
      default: text('gettingStartedText', 'Getting started')
    },
    gettingStartedUrl: {
      default: text('gettingStartedUrl', '/getting-started/')
    },
    messengerText: {
      default: text('messengerText', 'Gitter')
    },
    messengerUrl: {
      default: text('messengerUrl', 'https://gitter.im/Tsed-io/community')
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
    <HeroBannerCta :getting-started-text="gettingStartedText"
                   :getting-started-url="gettingStartedUrl"
                   :messenger-text="messengerText"
                   :messenger-url="messengerUrl"/>
    </div>`
})
