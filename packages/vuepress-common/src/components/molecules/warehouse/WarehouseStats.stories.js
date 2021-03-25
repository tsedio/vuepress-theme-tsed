import WarehouseStats from './WarehouseStats'

export default {
  title: 'Molecules/WarehouseStats',
  component: WarehouseStats,
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
    WarehouseStats
  },
  props: Object.keys(argTypes),
  template: '<WarehouseStats v-bind="$props" />'
})

export const Overview = Template.bind({})

Overview.args = {
  plugins: 172,
  maintainers: 10,
  downloads: 100000
}
