import {configure} from '@storybook/vue'
import './stories.decorators'

configure(require.context('../../vuepress-common/src/components', true, /\.stories\.js$/), module)
