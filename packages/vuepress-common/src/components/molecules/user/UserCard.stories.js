import UserCard from './UserCard.vue'

export default {
  title: 'Molecules/UserCard',
  component: UserCard
}

const Template = (args, { argTypes }) => ({
  components: { UserCard },
  props: Object.keys(argTypes),
  template: '<div class="w-full md:w-1/2 lg:w-1/3 p-4"><UserCard class="bg-gray-lighter" v-bind="$props" /></div>'
})

export const Overview = Template.bind({})

Overview.args = {
  'title': 'Romain Lenzotti',
  'job': 'Tech Lead',
  'src': 'https://avatars3.githubusercontent.com/u/1763311?v=4',
  'github': 'Romakita',
  'twitter': 'RomainLenzotti',
  'website': 'https://tsed.io',
  'country': 'France',
  'city': 'Paris',
  'role': 'Framework Author'
}