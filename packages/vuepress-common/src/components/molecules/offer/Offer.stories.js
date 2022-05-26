import Offer from './Offer'

export default {
  title: 'Molecules/Offer',
  component: Offer
}

const Template = (args, {argTypes}) => ({
  components: {Offer},
  props: Object.keys(argTypes),
  template: `
    <div class="container flex flex-col w-full max-w-site-large mx-auto pb-10">
    <Offer v-bind="$props"/>
    </div>`
})

export const Overview = Template.bind({})
Overview.args = {
  title: 'Free',
  category: 'Community',
  description: 'Ask community to resolve your issue.<br /><br />',
  startHere: true,
  items: [
    'Github issues',
    'Github discussions',
    'Slack public channel',
    'Voting for new features'
  ],
  price: {
    amount: '$0',
    by: 'per month'
  },
  cta: {label: 'Start for free'}
}
