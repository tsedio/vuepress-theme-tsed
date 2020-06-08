import WordsSlider from './WordsSlider.vue'

export default {
  title: 'Molecules/Features'
}

export const overview = () => ({
  components: {
    WordsSlider
  },
  props: {},
  template: `<div>
    <Feature></Feature>
  </div>`
})
