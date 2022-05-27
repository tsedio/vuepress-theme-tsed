import Offers from './Offers.vue'

export default {
  title: 'Organisms/Offers'
}

const Template = (args, {argTypes}) => ({
  components: {Offers},
  props: Object.keys(argTypes),
  template: `<Offers v-bind="$props"/>`
})

export const Overview = Template.bind({})

Overview.args = {
  title: 'Support pricing',
  description: 'Support the Open-Source project by getting a premium support!',
  legalInfo: 'Prices include taxes - It use github sponsors.',
  items: [
    {
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
    },
    {
      title: 'Individual',
      category: 'Starter',
      description: 'Premium support for individuals and non-profit organizations',
      items: [
        '<strong>Free options</strong>',
        '+',
        'Sponsor badge',
        '<strong>Slack private</strong> channel',
        '<strong>Direct message</strong> to the author',
        '<strong>Earlier access</strong> to private packages',
        '<strong>Prioritized</strong> issues',
        'Submit new features',
        'Hosted private packages on our repository',
        'Your name / logo will appear on the Ts.ED website as sponsor!'
      ],
      price: {
        amount: '$25',
        by: 'per month'
      },
      cta: {label: 'Get started'}
    },
    {
      title: 'Company',
      category: 'Premium',
      description: 'Premium support for company<br />startup, small business...',
      items: [
        '<strong>Free options</strong>',
        '+',
        'Sponsor badge',
        '<strong>Slack private</strong> channel',
        '<strong>Direct message</strong> to the author',
        '<strong>Earlier access</strong> to private packages',
        '<strong>Prioritized</strong> issues',
        'Submit new features',
        'Hosted private packages on our repository',
        'Your name / logo will appear on the Ts.ED website as sponsor!'
      ],
      price: {
        amount: '$50',
        by: 'per month'
      },
      cta: {label: 'Get started'}
    },
    {
      title: 'Company +',
      category: 'Golden',
      description: 'Now I have an answer to the question "Are you wasting time on GitHub again?"',
      highlight: true,
      items: [
        '<strong>Company options</strong>',
        '+',
        '<strong>Dedicated slack</strong> private channel',
        '<strong>Technical support</strong> (hangout, audio/video)',
        'Ask for personalized features',
        'Code review'
      ],
      price: {
        amount: '$100',
        by: 'per month'
      },
      cta: {label: 'Get started'}
    }
  ]
}
