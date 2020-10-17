import topics from './__mock__/topics.json'
import OtherTopics from './OtherTopics'

export default {
  title: 'Molecules/OtherTopics'
}

export const overview = () => ({
  components: {
    OtherTopics
  },
  props: {
    items: {
      default: topics
    }
  },
  template: `
    <main class="p-5 bg-white max-w-site m-auto">
    <OtherTopics :items="items"/>
    </main>`
})
