import { text } from '@storybook/addon-knobs'
import PartnerLogo from './PartnerLogo'

export default {
  title: 'Molecules/PartnerLogo'
}

export const overview = () => ({
  components: {
    PartnerLogo
  },
  props: {
    src: {
      default: text('src', 'https://artips.fr/resources/img/artips/artips.png')
    },
    href: {
      default: text('href', 'https://artips.fr')
    },
    title: {
      default: text('title', 'Artips')
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
    <PartnerLogo :title="title" :src="src" :href="href" class="inline-block w-1/5"/>
    </div>`
})
