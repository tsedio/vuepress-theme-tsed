<template>
  <i :class="['bx', name.includes('bx') ? name : `bx-${name}`,  color ? `text-${color}` : '']"></i>
</template>
<script>
  export default {
    name: 'BxIcon',
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String
      }
    }
  }
</script>
