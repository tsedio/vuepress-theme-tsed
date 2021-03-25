import CardPlugin from './CardPlugin'

export default {
  title: 'Molecules/CardPlugin',
  component: CardPlugin,
  argTypes: {},
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: {
    CardPlugin
  },
  props: Object.keys(argTypes),
  template: '<div class="relative flex flex-col overflow-hidden transition-transform duration-150 ease-in-out transform bg-white rounded-md shadow hover:shadow-lg hover:-translate-y-1"><CardPlugin v-bind="$props" /></div>'
})

export const Overview = Template.bind({})

Overview.args = {
  name: "@tsed/common",
  description: "Ts.ED a framework on top of Express.js/Koa.js",
  icon: '',
  homepage: "https://tsed.io"
}
