import SupportUs from './SupportUs'

export default {
  title: 'Organisms/SupportUs',
  component: SupportUs
}

const Template = (args, {argTypes}) => ({
  components: {SupportUs},
  props: Object.keys(argTypes),
  template: `
  <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
    <SupportUs v-bind="$props" />
  </div>`
})

export const Overview = Template.bind({})
Overview.args = {
  author: 'Ts.ED',
  'licenseType': 'MIT',
  'sponsorUrl': 'https://github.com/tsedio/tsed'
}
