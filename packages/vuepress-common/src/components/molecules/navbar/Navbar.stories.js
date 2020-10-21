import { getUserNavLinks } from '../../../utils'
import config from '../../organisms/__mock__/config'
import Navbar from './Navbar.vue'

export default {
  title: 'Molecules/Navbar'
}

export const overview = () => ({
  components: {
    Navbar
  },
  props: {
    socialUrls: {
      default: config.themeConfig
    },
    links: {
      default: getUserNavLinks({
        $site: config.themeConfig,
        $router: {},
        $localeConfig: {
          path: ''
        },
        $themeLocaleConfig: config.themeConfig.locales['/']
      })
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
      <Navbar
          site-title="Ts.ED"
          html-title="<span class='text-blue'>Ts</span>.ED" href="/"
          :social-urls="socialUrls"
          :items="links"/>
    </div>`
})
