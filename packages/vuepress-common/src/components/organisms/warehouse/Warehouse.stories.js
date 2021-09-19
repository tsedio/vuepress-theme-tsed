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
  template: '<Warehouse v-bind="$props">Discover our list of plugins to extend your Ts.ED project.<br/>Created by the Ts.ED team and community.</Warehouse>'
})

export const Overview = Template.bind({})

Overview.args = {
  url: 'https://api.tsed.io/rest/warehouse'
}
