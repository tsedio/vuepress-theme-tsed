import config from '../../organisms/config'
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
    }
  },
  template: `
    <div style="width: 100vw" class="init">
      <Navbar site-title="Ts.ED" html-title="<span class='text-blue'>Ts</span>.ED" href="/" :social-urls="socialUrls" />
    </div>`
})
