<template>
  <span class="overflow-hidden align-top relative inline-block">
    &nbsp;
    <span class="absolute top-0 block animation-words-slider" ref="container">
      <span class="block text-left whitespace-no-wrap" v-for="word of words" :key="word">{{word}}</span>
      <!-- This last word needs to duplicate the first one to ensure a smooth infinite animation -->
      <span class="block text-left whitespace-no-wrap">{{words[0]}}</span>
    </span>
  </span>
</template>
<script>

  export default {
    name: 'SliderWords',
    props: {
      height: {
        type: String,
        default: 'span'
      }
    },
    data () {
      return {
        words: [],
        translateValue: 0
      }
    },
    created () {
      this.words = this.getContent()
    },
    beforeUpdate () {
      this.words = this.getContent()
      this.run()
    },
    mounted () {
      this.$el.style.width = `${this.$refs.container.getBoundingClientRect().width}px`
      this.run()
    },
    destroyed () {
      clearInterval(this.timer)
    },
    methods: {
      run () {
        const step = 100 / (this.words.length + 1)
        let current = 0

        if (this.timer) {
          clearInterval(this.timer)
        }


        this.timer = setInterval(() => {
          const container = this.$refs.container

          if (!container.classList.contains('transition-all')) {
            container.classList.add('transition-all')
          }

          current = (current + step) % 100
          container.style.transform = `translateY(-${current}%)`

          if ((current + step) % 100 === 0) {
            setTimeout(() => {
              container.classList.remove('transition-all')
              current = current + step
              setTimeout(() => {
                container.style.transform = `translateY(0%)`
              })
            }, 600)
          }
        }, 2000)
      },
      getContent () {
        return this.$slots.default ? this.$slots.default
          .map((node) => node.text && node.text.trim())
          .join(' ')
          .split(',')
          .map(text => text.trim())
          .filter(Boolean) : []
      }
    }
  }
</script>
<style src="./WordsSlider.css"></style>
