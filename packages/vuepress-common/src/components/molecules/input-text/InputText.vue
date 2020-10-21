<template>
  <div
      :class="classes"
      class="inline-flex items-center border-2 py-1 px-3 rounded-small text-gray-darker transition-all">
    <slot name="input-left"/>
    <div class="flex flex-1 px-1 relative items-center">
      <input v-bind="$attrs"
             :value="value"
             @input="$emit('input', $event.target.value)"
             @change="this.$emit('change', $event)"
             class="reset-input text-current w-full"/>
    </div>
    <slot name="input-right"/>
  </div>
</template>
<script>

export default {
  name: 'InputText',
  props: ['value', 'bgColor'],
  computed: {
    classes () {
      const { bgColor = 'gray-lighter' } = this
      return [
        `bg-${bgColor}`,
        `border-${bgColor}`,
        'focus-within:text-blue',
        'focus-within:border-blue'
      ]
    }
  }
}
</script>