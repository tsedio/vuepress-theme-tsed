<template>
    <div class="iframe-sandbox">
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
      type: String,
      required: false,
      default: false
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
  data() {
    return {
      iframe: null
    };
  },
  computed: {},
  methods: {
    initIframe() {
      this.iframe = document.createElement('iframe');
      this.iframe.setAttribute('style', `width:80%; height:500px; margin: 0 auto; border:0; border-radius: 4px; overflow:hidden; font-size: ${this.fontSize}px`);
      if (this.src) this.iframe.setAttribute('src', this.src);
      if (this.sandboxId) this.iframe.setAttribute('sandbox-id', this.sandboxId);
      if (this.hideNavigation) this.iframe.setAttribute('hide-navigation', this.hideNavigation);
      if (this.theme) this.iframe.setAttribute('theme', this.theme);
      if (this.title) this.iframe.setAttribute('title', this.title);
      if (this.sandbox) this.iframe.setAttribute('sandbox', this.sandbox);
      if (this.allow) this.iframe.setAttribute('allow', this.allow);
      this.$el.appendChild(this.iframe);
    },
  },
  mounted() {
    this.initIframe();
  }
};
</script>