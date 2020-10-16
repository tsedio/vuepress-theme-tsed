import Share from './Share'

export default {
  title: 'Molecules/Share'
}

export const overview = () => ({
  components: {
    Share
  },
  props: {},
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
    <Share title="Introduction" class="m-auto"/>
    </div>`
})
