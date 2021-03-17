import releases from './releases.json'
import Releases from './Releases.vue'

export default {
  title: 'Molecules/Releases',
  component: Releases
}

const Template = (args, { argTypes }) => ({
  components: { Releases },
  props: Object.keys(argTypes),
  template: '<Releases v-bind="$props" />'
})

export const Overview = Template.bind({})

Overview.args = {
  items: releases
}