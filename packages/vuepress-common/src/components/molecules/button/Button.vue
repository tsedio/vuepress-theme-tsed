<template>
  <component
      @click="onClick"
      :disabled="disabled"
      :is="component"
      :class="classes"
      :outbound="false"
      :href="href"
      :title="title">
    <span
        :class="`flex justify-center items-center w-full font-${fontWeight} px-${paddingX} py-${paddingY}`">
      <span class="m-1 text-center flex justify-center items-center"><slot/></span>
    </span>
  </component>
</template>
<script>
import Link from '../link/Link'

export default {
  name: 'Button',
  props: {
    component: {
      type: [Object, String],
      default: () => Link
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'white-button'
    },
    bgColor: {
      type: String,
      default: 'blue'
    },
    borderColor: {
      type: String,
      default: 'blue'
    },
    hover: {
      type: String,
      default: 'active'
    },
    fontWeight: {
      type: String,
      default: 'bold'
    },
    paddingX: {
      type: [Number, String],
      default: 4
    },
    paddingY: {
      type: [Number, String],
      default: 1
    },
    rounded: {
      type: String,
      default: 'small'
    },
    shadow: {
      type: String,
      default: 'none'
    },
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    Link
  },
  computed: {
    classes () {
      let {
        borderColor,
        bgColor,
        color,
        disabled,
        rounded,
        shadow,
        hover = 'active'
      } = this

      if (disabled) {
        bgColor = 'gray-light'
        borderColor = 'gray-light'
      }

      if (!borderColor) {
        borderColor = bgColor
      }

      return `reset-link inline-flex flex-col items-stretch overflow-hidden text-base transition-colors
  bg-${bgColor} border-${borderColor} text-${color} focus:bg-${bgColor}-active focus:border-${borderColor}-${hover}
  hover:bg-${bgColor}-${hover} hover:border-${borderColor}-${hover} focus:text-${color}-${hover} hover:text-${color}-${hover}
   cursor-pointer border-1 border-solid rounded-${rounded} shadow-${shadow}`
    }
  },
  methods: {
    onClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

