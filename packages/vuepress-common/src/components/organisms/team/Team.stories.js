import Teams from './Team.vue'

export default {
  title: 'Organisms/Team',
  component: Teams
}

const Template = (args, { argTypes }) => ({
  components: { Teams },
  props: Object.keys(argTypes),
  template: '<Teams v-bind="$props" />'
})

export const Overview = Template.bind({})

Overview.args = {
  title: 'Ts.ED team',
  items: [
    {
      'title': 'Romain Lenzotti',
      'job': 'Tech Lead',
      'src': 'https://avatars3.githubusercontent.com/u/1763311?v=4',
      'github': 'Romakita',
      'twitter': 'RomainLenzotti',
      'website': 'https://tsed.io',
      'country': 'France',
      'city': 'Paris',
      'role': 'Framework Author'
    },
    {
      'title': 'Romain Lenzotti',
      'job': 'Tech Lead',
      'src': 'https://avatars3.githubusercontent.com/u/1763311?v=4',
      'github': 'Romakita',
      'twitter': 'RomainLenzotti',
      'website': 'https://tsed.io',
      'country': 'France',
      'city': 'Paris',
      'role': 'Framework Author'
    },
    {
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
  ]
}