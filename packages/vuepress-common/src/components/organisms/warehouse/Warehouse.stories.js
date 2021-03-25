import Warehouse from './Warehouse'

export default {
  title: 'Organisms/Warehouse',
  component: Warehouse,
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
    Warehouse
  },
  props: Object.keys(argTypes),
  template: '<Warehouse v-bind="$props" />'
})

export const Overview = Template.bind({})

Overview.args = {
  url: 'http://api.tsed.io/rest/warehouse'
}
