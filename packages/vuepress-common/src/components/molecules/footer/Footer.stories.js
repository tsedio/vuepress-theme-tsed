import config from '../../organisms/__mock__/config'
import Footer from './Footer'

export default {
  title: 'Molecules/Footer',
  argTypes: {

  },
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
    Footer
  },
  props: Object.keys(argTypes),
  template: '<Footer v-bind="$props" />'
})

export const Overview = Template.bind({})

Overview.args = {
  author: 'Ts.Ed',
  licenseType: 'MIT',
  socialUrls: config.themeConfig,
  repoUrl: 'https://github.com/TypedProject/tsed',
  sections: [
    {
      title: 'Discover',
      items: [
        {
          label: 'Our team',
          url: '/'
        },
        {
          label: 'Contact us',
          url: '/'
        }
      ]
    },
    {
      title: 'Help',
      items: [
        {
          label: 'Resources',
          url: '/'
        },
        {
          label: 'Chat with us',
          url: '/'
        },
        {
          label: 'Contribution guide',
          url: '/'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          label: 'Issues',
          url: '/'
        },
        {
          label: 'Sponsoring & donations',
          url: '/'
        }
      ]
    }
  ]
}

//
// export const overview = () => ({
//   components: {
//     Footer
//   },
//   props: {
//
//   },
//   template: `
//     <div style="min-width: 800px" class="p-5 container flex flex-col w-full max-w-site-large mx-auto px-3 pb-10">
//     <Footer :license-type="licenseType"
//             :social-urls="socialUrls"
//             :copyright-dates="{start: '2016', end: '2020'}"
//             :author="author"
//             :repo-url="repoUrl"/>
//     </div>`
// })
