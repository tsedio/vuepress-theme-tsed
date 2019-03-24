<template>
  <a :href="link"
     :class="classes"
     :title="name"><span :class="'symbol ' + type"></span>
    <template v-if="deprecated">
      <del>{{name}}</del>
    </template>
    <template v-else>{{name}}</template>
  </a>
</template>

<script>
  export default {
    name: 'ApiSymbol',
    props: {
      item: {
        type: Object,
        default: () => ({
          status: []
        })
      }
    },

    computed: {
      name () {
        return this.item.symbolName
      },
      type () {
        return this.item.symbolType
      },
      link () {
        return `${ this.item.path }.html`
      },
      classes () {
        return [
          'symbol-container',
          'symbol-type-' + this.item.symbolType
        ]
      },
      deprecated () {
        return this.item.status.find(status => status.key === 'deprecated')
      }
    }
  }
</script>
<style lang="scss" src="./ApiSymbol.scss"></style>
