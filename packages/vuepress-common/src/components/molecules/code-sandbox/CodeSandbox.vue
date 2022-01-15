<template>
  <div v-lazyload>
    <iframe
        class="iframe-sandbox w-full border-0"
        :data-url="href"
        :sandboxId="sandboxId"
        :title="title"
        :sandbox="sandbox"
        :allow="allow"
        :style="{height}"/>
  </div>
</template>

<script>
import Lazyload from '../observer/lazyload'

export default {
  name: 'CodeSandbox',
  directives:{
    lazyload: Lazyload
  },
  props: {
    sandboxId: {
      type: String,
      required: false
    },
    fontSize: {
      type: Number,
      required: false,
      default: 14
    },
    hideNavigation: {
      type: Number,
      required: false,
      default: 1
    },
    theme: {
      type: String,
      required: false,
      default: 'dark'
    },
    title: {
      type: String,
      required: false
    },
    allow: {
      type: String,
      required: false,
      default: 'accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
    },
    sandbox: {
      type: String,
      required: false,
      default: 'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
    },
    height: {
      type: String,
      required: false,
      default: '500px'
    }
  },
  computed: {
    href () {
      const { sandboxId, fontSize, hideNavigation, theme } = this
      return `https://codesandbox.io/embed/${sandboxId}?fontsize=${fontSize}&hidenavigation=${hideNavigation}&theme=${theme}`
    }
  }
}
</script>
