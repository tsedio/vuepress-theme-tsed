<template>
  <div class="my-0 my-auto w-full">
      <iframe class="iframe-sandbox w-full border-0"
      :src="`${src}?fontsize=${fontSize}&hidenavigation=${hideNavigation}&theme=${theme}`"
      :sandboxId="sandboxId"
      :title="title"
      :sandbox="sandbox"
      :allow="allow" 
      :style="{height: '500px'}" />
  </div>    
</template>

<script>
export default {
  name: 'iframe-sandbox',
  props: {
    src: {
      type: String,
      required: true
    },
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
  },
};
</script>