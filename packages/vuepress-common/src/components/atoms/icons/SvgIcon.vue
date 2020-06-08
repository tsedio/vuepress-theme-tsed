<template>
  <span :class="`inline-block overflow-hidden relative ${color ? 'text-' + color: ''}`"
        :style="{height: `${height}px`, width: `${height}px`}">
    <span class="relative w-full h-full block">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="absolute fill-current h-full top-0 left-0 right-0 bottom-0 w-full"
           :viewBox="viewBox"
           :aria-labelledby="iconName">
      <title
        :id="iconName"
        lang="en">{{ iconName }} icon</title>
      <g fill="currentColor">
        <slot />
      </g>
    </svg>
    </span>
  </span>
</template>
<script>
  export default {
    props: {
      iconName: {
        type: String,
        default: 'box'
      },
      width: {
        type: [Number, String],
        default: 18
      },
      height: {
        type: [Number, String],
        default: 18
      },
      color: {
        type: String
      },
      viewBox: {
        type: String,
        default: '0 0 18 18'
      }
    },
    computed: {}
  }
</script>
