<template>
  <div class="banner">
    <a :href="href" :style="{'minWidth': height + 'px'}">
      <img :src="src" :height="height">
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
        type: Number
      }
    }
  };
</script>
<style lang="scss">
  @import "../../styles/mixins/index";

  .banner {
    text-align: center;

    a {
      display: inline-block;
      margin: auto;
      padding: 20px;
      border-radius: 100%;
    }

    &.--darken {
      a {
        background-color: $primaryColor;
      }
    }
  }
</style>