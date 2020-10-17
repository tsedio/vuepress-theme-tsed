import { select } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/CustomBlock'
}

export const overview = () => ({
  props: {
    type: {
      default: select('Type', ['tip', 'warning', 'danger'], 'tip')
    }
  },
  template: `
    <main class="p-5 bg-white content__default max-w-site m-auto">
    <div class="custom-block" :class="type">
      <p class="custom-block-title">{{ type }}</p>
      <p>Compatibility for Koa.js with Passport.js is planed.</p>
    </div>
    </main>`
})
