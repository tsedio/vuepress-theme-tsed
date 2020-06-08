<template lang="html">
  <div
    :class="[`-position-${position}`, 'text-' + color]"
    class="tabs">
    <div
      :class="[`bg-${bgColor}-active`]"
      class="tabs__header">
      <ul
        ref="ul"
        :class="[`-${alignment}`]"
        class="tabs__header--ul">
        <li
          v-for="(child,index) in children"
          ref="li"
          :class="{'active': childActive === index}"
          class="tabs__header--li"
          @mouseover="hover = true"
          @mouseout="hover = false">

          <button
            v-bind="child.attrs"
            class="tabs__header--btn"
            type="button"
            @click="activeChild(index)"
            v-on="child.listeners">
            <span v-if="child.label">{{ child.label }}</span>
          </button>
          <span class="tabs__header--btn-line" :class="[`bg-${lineColor}`]"></span>
        </li>
      </ul>
    </div>
    <div
      :class="[`bg-${bgColor}`]"
      class="tabs__body ">
      <slot/>
    </div>
  </div>
</template>

<script>
  import Tab from './Tab'

  export default {
    name: 'Tabs',
    components: { Tab },
    props: {
      bgColor: {
        type: String,
        default: 'gray-lighter'
      },
      color: {
        type: String,
        default: 'gray-darker'
      },
      lineColor: {
        type: String,
        default: 'gray-darker'
      },
      value: {
        default: 0,
        type: [Number, String]
      },
      alignment: {
        default: 'left',
        type: String
      },
      position: {
        default: 'top',
        type: String
      }
    },
    data: () => ({
      hover: false,
      children: [],
      childActive: 0
    }),
    watch: {
      value (index) {
        const activeIndex = this.parseIndex(index)
        this.activeChild(activeIndex)
      }
    },
    mounted () {
      const activeIndex = this.parseIndex(this.value)
      this.childActive = activeIndex
      this.$nextTick(() => {
        this.activeChild(activeIndex, true)
      })
    },
    methods: {
      clickTag (child) {
        this.$emit('click-tag', child)
      },
      parseIndex (index) {
        let activeIndex = this.childActive
        if (index < 0) {
          activeIndex = 0
        } else if (index >= this.$children.length) {
          activeIndex = this.$children.length - 1
        } else if (typeof this.$children[index].$attrs.disabled === 'undefined') {
          activeIndex = parseInt(index)
        }
        return activeIndex
      },
      activeChild (index, initialAnimation) {
        initialAnimation = !!initialAnimation

        const elem = this.$refs.li[index]

        if (this.childActive === index && !initialAnimation) {
          elem.classList.add('active')
          setTimeout(() => {
            elem.classList.remove('active')
          }, 200)
        }
        this.$children.map((item, item_index) => {
          if (item_index !== index) {
            item.active = false
          }
        })

        this.$children[index].active = true
        this.childActive = index
        this.$emit('input', this.childActive)
      }
    }
  }
</script>
<style lang="css" src="./Tabs.css"></style>
