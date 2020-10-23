<template lang="html">
  <div
    :class="[`-position-${position}`]"
    class="tabs">
    <div
      class="tabs__header">
      <ul
        ref="ul"
        :class="[`-${alignment}`]"
        class="tabs__header--ul">
        <li
          v-for="(child,index) in children"
          ref="li"
          :class="{'activeChild': childActive === index}"
          class="tabs__header--li"
          @mouseover="hover = true"
          @mouseout="hover = false">

          <button
            v-bind="child.attrs"
            :style="styleAlignIcon(child.icon)"
            class="tabs__header--btn"
            type="button"
            @click="activeChild(index)"
            v-on="child.listeners">
            <!--            <vs-icon-->
            <!--              v-if="child.icon"-->
            <!--              :icon-pack="child.iconPack"-->
            <!--              :icon="child.icon"-->
            <!--              :color="color"-->
            <!--              class="tabs__header--btn-icon"></vs-icon>-->
            <span v-if="child.label">{{ child.label }}</span>
          </button>

<!--          <button-->
<!--            v-if="child.tag"-->
<!--            class="tabs__header&#45;&#45;btn-tag"-->
<!--            @click="clickTag(child)"-->
<!--          >-->
<!--            <vs-icon-->
<!--              :icon-pack="child.iconPack"-->
<!--              :icon="child.tag"-->
<!--              :color="child.tagColor"></vs-icon>-->
<!--          </button>-->
        </li>
      </ul>
      <span
        :style="stylex"
        class="tabs__header--line"/>
    </div>
    <div class="tabs__body">
      <slot/>
    </div>
  </div>
</template>

<script>
  import Tab from "./Tab"

  export default {
    name: 'Tabs',
    components: { Tab },
    props: {
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
      topx: 'auto',
      heightx: 2,
      hover: false,
      children: [],
      childActive: 0,
      leftx: 0,
      widthx: 0,
      these: false
    }),
    computed: {
      stylex () {
        return {
          top: `${this.topx}px`,
          left: `${this.leftx}px`,
          width: `${this.widthx}px`,
          height: `${this.heightx}px`
          // background: `linear-gradient(30deg, ${_color.getColor(this.color, 1)} 0%, ${_color.getColor(this.color, .5)} 100%)`,
          // boxShadow: `0px 0px 8px 0px ${_color.getColor(this.color, .5)}`,
          // transform: `scaleX(${this.these ? 1.3 : 1})`
        }
      }
    },
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
      styleAlignIcon (icon) {
        return icon ? 'display:flex;align-items:center' : ''
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
          this.these = true
          elem.classList.add('isActive')
          setTimeout(() => {
            elem.classList.remove('isActive')
            this.these = false
          }, 200)
        }
        this.$children.map((item, item_index) => {
          if (item_index !== index) {
            item.active = false
          }
        })
        if (this.childActive > index) {
          this.$children[index].invert = true
          this.$children[this.childActive].invert = false
        } else {
          this.$children[this.childActive].invert = true
          this.$children[index].invert = false
        }
        this.$children[index].active = true
        this.childActive = index
        this.$emit('input', this.childActive)
        if (this.position === 'left' || this.position === 'right') {
          this.$children[index].vertical = true
        }
        this.changePositionLine(elem, initialAnimation)
      },
      changePositionLine (elem, initialAnimation) {
        if (this.position === 'left' || this.position === 'right') {
          this.topx = elem.offsetTop
          this.heightx = elem.offsetHeight
          this.widthx = 2
        } else {
          const update = () => {
            this.leftx = elem.offsetLeft
            this.widthx = elem.offsetWidth
            this.topx = (elem.offsetHeight + (elem.getBoundingClientRect().top - this.$refs.ul.getBoundingClientRect().top))
          }
          if (!initialAnimation) {
            update()
          } else {
            setTimeout(update, 100)
          }
        }
      }
    }
  }
</script>
<style lang="scss" src="./Tabs.scss"></style>
