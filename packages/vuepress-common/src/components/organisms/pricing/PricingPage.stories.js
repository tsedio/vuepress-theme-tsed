import Pricing from '@tsed/vuepress-common/src/components/molecules/pricing/Pricing'

export default {
  title: 'Organisms/PricingPage'
}

const Template = (args, {argTypes}) => ({
  components: {Pricing},
  props: Object.keys(argTypes),
  template: `
    <div>
    <div class="bg-gray-200 pb-5">
      <div class="pt-16 pb-16 bg-blue-900 sm:pb-24">
        <div class="px-4 pb-10 text-center sm:px-6 lg:px-8">
          <h1 class="mt-4 text-4xl font-extrabold leading-10 text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Pricing
          </h1>
          <p class="max-w-xl mx-auto mt-5 text-lg leading-7 sm:text-xl text-gray-100">
            Support the Open-Source project by getting a premium support!
          </p>
        </div>
      </div>
      <div class="-mt-15 flex justify-center">
        <div>
          <Pricing v-bind="$props" class="max-w-screen-xl"/>

          <em class="block -mt-6 mb-5 mx-2">Prices include taxes - It use github sponsors.</em>
        </div>
      </div>
    </div>
    <div class="px-5 md:px-10 max-w-site m-auto">
      <div class="page-content">
        <div class="bg-white">
          <div class="container flex flex-col w-full max-w-site mx-auto px-5 py-5 md:py-10">
            <div>
              <h2 class="mb-5 text-hairline">Or getting punctual support</h2>
              
            </div>
          </div>
        </div>  
      </div>
    </div>
    </div>`
})

export const Overview = Template.bind({})

Overview.args = {
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
