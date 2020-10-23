import { text } from '@storybook/addon-knobs'
import SupportUs from './SupportUs'

export default {
  title: 'Organisms/SupportUs'
}

export const overview = () => ({
  components: {
    SupportUs
  },
  props: {
    brand: {
      default: text('author', 'Ts.Ed')
    },
    licenseType: {
      default: text('licenseType', 'MIT')
    },
    sponsorUrl: {
      default: text('sponsorUrl', 'https://github.com/TypedProject/tsed')
    }
  },
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <SupportUs :license-type="licenseType"
               :brand="brand"
               :sponsor-url="sponsorUrl"/>
    </div>`
})
