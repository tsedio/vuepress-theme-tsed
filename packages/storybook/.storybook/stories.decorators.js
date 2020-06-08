import { addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/vue'

// addDecorator(withStaticMarkup)
addDecorator(withA11y)
addDecorator(withKnobs({
  escapeHTML: false,
}))
addDecorator(centered)
