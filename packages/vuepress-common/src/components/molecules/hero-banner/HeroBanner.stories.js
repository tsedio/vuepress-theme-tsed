import { text } from '@storybook/addon-knobs'
import HeroBannerCta from '../hero-banner-cta/HeroBannerCta'
import HeroBanner from './HeroBanner'

export default {
  title: 'Molecules/HeroBanner'
}

export const overview = () => ({
  components: {
    HeroBanner,
    HeroBannerCta
  },
  props: {
    keywords: {
      default: text('keywords', '#Decorators, #Rest API, #DI, #Controller')
    },
    gettingStartedText: {
      default: text('gettingStartedText', 'Getting started')
    },
    gettingStartedUrl: {
      default: text('gettingStartedUrl', '/getting-started/')
    },
    messengerText: {
      default: text('messengerText', 'Discussions')
    },
    messengerUrl: {
      default: text('messengerUrl', 'https://gitter.im/Tsed-io/community')
    },
    messengerIcon: {
      default: text('messengerIcon', 'bx-message-rounded-dots')
    },
    sponsorUrl: {
      default: text('sponsorUrl', 'https://github.com/sponsors/Romakita')
    },
    sponsorText: {
      default: text('sponsorText', 'Sponsor @romakita')
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
    <HeroBanner :keywords="keywords">
      <template #hero-brand>
        <strong>Ts.ED</strong> Framework<br/>
        <small>for <a class="text-darker-gray">Node.js</a> and <a class="text-darker-gray">TypeScript</a></small>
      </template>

      <template #hero-slogan>
        Build your awesome server-size <strong>application.</strong>
      </template>

      <template #hero-cta>
        <HeroBannerCta :getting-started-text="gettingStartedText"
                       :getting-started-url="gettingStartedUrl"
                       :messenger-text="messengerText"
                       :messenger-icon="messengerIcon"
                       :messenger-url="messengerUrl"
                       :sponsor-text="sponsorText"
                       :sponsor-url="messengerUrl"/>
      </template>
    </HeroBanner>
    </div>`
})
