import ReleaseNote from './ReleaseNote.vue'

export default {
  title: 'Organisms/ReleaseNote',
  component: ReleaseNote
}

const Template = (args, { argTypes }) => ({
  components: { ReleaseNote },
  props: Object.keys(argTypes),
  template: '<div class="content__default"><ReleaseNote v-bind="$props" /></div>'
})

export const Overview = Template.bind({})

Overview.args = {
  component: 'button'
}