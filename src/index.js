import * as components from './components'
import 'prismjs/themes/prism-tomorrow.css'
import './styles/theme.scss'

export default function install (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key]
    Vue.component(component.name, component)
  })
}

export * from './components'
export * from './utils/api'
export * from './utils/get-css'
export * from './utils/scroll-position'
export * from './utils/throttle'
export * from './utils'

