<template>
  <div class="flex justify-center items-center">
    <a :class="`block m-auto p-${padding} rounded-full bg-${bgColor}`"
       :style="{width: `${height}px`, height: `${height}px`}"
       :href="href">
      <div class="h-full w-full bg-contain bg-no-repeat bg-center" :style="{backgroundImage: `url(${src})`}"></div>
      <img class="hidden" :src="src" :height="height">
    </a>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      src: {
        type: String
      },
      href: {
        type: String
      },
      height: {
        type: [Number, String]
      },
      bgColor: {
        type: String,
        default: ''
      },
      padding: {
        type: Number,
        default: 5
      }
    }
  }
</script>
