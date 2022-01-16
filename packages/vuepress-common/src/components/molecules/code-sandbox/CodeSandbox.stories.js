import { text, number, select } from '@storybook/addon-knobs'
import CodeSandbox  from './CodeSandbox'

const NAVIGATION_LIST = {
  true: 1,
  false: 0
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
    sandboxId: {
      default: text('sandboxId', 'rough-frost-6bi81')
    },
    fontSize: {
      default: number('fontSize', 15)
    },
    hideNavigation: {
      default: select('hideNavigation', NAVIGATION_LIST, 1)
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
    <div class="init">
      <CodeSandbox
          class="rounded-medium border-2 border-gray-darker bg-white"
        :sandboxId="sandboxId"
        :title="title"
        :allow="allow"
        :sandbox="sandbox">
      </CodeSandbox>
    </div>`
})
