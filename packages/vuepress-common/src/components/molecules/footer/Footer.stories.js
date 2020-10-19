import { text } from '@storybook/addon-knobs'
import config from '../../organisms/config'
import Footer from './Footer'

export default {
  title: 'Molecules/Footer'
}

export const overview = () => ({
  components: {
    Footer
  },
  props: {
    author: {
      default: text('author', 'Ts.Ed')
    },
    licenseType: {
      default: text('licenseType', 'MIT')
    },
    socialUrls: {
      default: config.themeConfig
    },
    repoUrl: {
      default: text('repoUrl', 'https://github.com/TypedProject/tsed')
    }
  },
  template: `
    <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <Footer :license-type="licenseType"
            :social-urls="socialUrls"
            :copyright-dates="{start: '2016', end: '2020'}"
            :author="author"
            :repo-url="repoUrl"/>
    </div>`
})
