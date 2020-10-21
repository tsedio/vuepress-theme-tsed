import Api from './Api.vue'

export default {
  title: 'Organisms/Api'
}

export const overview = () => ({
  components: {
    Api
  },
  props: {},
  template: `
    <div style="min-width: 800px" class="p-5 content__default w-full max-w-site-large mx-auto px-3 pb-10">
    <Api/>
    </div>`
})
