import {configure} from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'

addDecorator(StoryRouter())

configure(require.context('../../vuepress-common/src/components', true, /\.stories\.js$/), module)
