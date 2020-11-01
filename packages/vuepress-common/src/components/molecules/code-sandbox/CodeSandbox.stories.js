import { text, number, select } from '@storybook/addon-knobs'
import CodeSandbox  from './CodeSandbox'

const NAVIGATION_LIST = {
  show: true,
  hide: false
}

const THEME_LIST = {
  dark: 'dark',
  light: 'light'
}

export default {
  title: 'Molecules/CodeSandbox'
}

export const overview = () => ({
  components: {
    CodeSandbox,
  },
  props: {
    src: {
      default: text('src', 'https://codesandbox.io/embed/laughing-kepler-ripfl?fontsize=14&hidenavigation=1&theme=dark')
    },
    sandboxId: {
      default: text('sandboxId', 'laughing-kepler-ripfl')
    },
    fontSize: {
      default: number('fontSize', 15)
    },
    hideNavigation: {
      default: select('hideNavigation', NAVIGATION_LIST, false)
    },
    theme: {
      default: select('theme', THEME_LIST, 'dark')
    },
    title: {
      default: text('title', 'Iframe title')
    },
    allow: {
      default: text('allow', 'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking')
    },
    sandbox: {
      default: text('sandbox', 'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts')
    },
  },
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
      <CodeSandbox  
        :src="src" 
        :sandboxId="sandboxId"
        :fontSize="fontSize"
        :hideNavigation="hideNavigation"
        :theme="theme"
        :title="title"
        :allow="allow"
        :sandbox="sandbox">
      </CodeSandbox>
    </div>`
})