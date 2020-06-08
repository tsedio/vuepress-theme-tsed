<template>
  <component :disabled="disabled" :is="component" :class="classes">
     <span
       :class="`flex justify-center items-center w-full font-${fontWeight} px-${paddingX} py-${paddingY}`">
        <span class="m-1 text-center flex justify-center items-center"><slot/></span>
      </span>
  </component>
</template>
<script>
  export default {
    name: 'Button',
    props: {
      component: {
        type: String,
        default: 'div'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'white'
      },
      bgColor: {
        type: String,
        default: 'blue'
      },
      borderColor: {
        type: String,
        default: 'blue'
      },
      fontWeight: {
        type: String,
        default: 'bold'
      },
      paddingX: {
        type: Number,
        default: 4
      },
      paddingY: {
        type: Number,
        default: 1
      },
      rounded: {
        type: String,
        default: 'small'
      },
      shadow: {
        type: String,
        default: 'none'
      }
    },
    computed: {
      classes () {
        let {
          borderColor,
          bgColor,
          color,
          disabled,
          rounded,
          shadow
        } = this

        if (disabled) {
          bgColor = 'gray-light'
          borderColor = 'gray-light'
        }

        if (!borderColor) {
          borderColor = bgColor
        }

        return `reset-button inline-flex flex-col items-stretch overflow-hidden text-base transition-colors
  bg-${bgColor} border-${borderColor} text-${color} focus:bg-${bgColor}-active focus:border-${borderColor}-active
  hover:bg-${bgColor}-active hover:border-${borderColor}-active focus:text-${color}-active hover:text-${color}-active
   cursor-pointer border-1 border-solid rounded-${rounded} shadow-${shadow}`
      }
    }
  }
</script>
