import { addDecorator } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

// addDecorator(withKnobs({
//   escapeHTML: false
// }))

addDecorator(StoryRouter())
