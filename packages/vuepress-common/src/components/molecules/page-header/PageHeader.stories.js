import PageHeader from './PageHeader'

export default {
  title: 'Molecules/PageHeader'
}

export const overview = () => ({
  components: {
    PageHeader
  },
  props: {},
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
    <PageHeader title="Introduction"/>
    </div>`
})
