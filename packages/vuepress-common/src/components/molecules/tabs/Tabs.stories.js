import Tabs from './Tabs.vue'
import Tab from './Tab.vue'
import { COLORS_LIST } from '../../../utils'
import { select } from '@storybook/addon-knobs'

export default {
  title: 'Molecules/Tabs'
}

export const overview = () => ({
  components: {
    Tabs,
    Tab
  },
  props: {
    bgColor: {
      default: select('Background color', COLORS_LIST, 'gray-lighter')
    },
    color: {
      default: select('Color', COLORS_LIST, 'gray-darker')
    },
    lineColor: {
      default: select('Line color', COLORS_LIST, 'gray-darker')
    },
    alignment: {
      default: select('Alignment', [
        'left',
        'center',
        'right',
        'fixed'
      ], 'left')
    },
    position: {
      default: select('Position', [
        'top',
        'left',
        'right',
        'bottom'
      ], 'top')
    }
  },
  template: `
    <div class="container flex flex-col w-full max-w-site mx-auto px-3 pb-10">
      <div>
        <Tabs
          :alignment="alignment"
          :position="position"
          :bg-color="bgColor"
          :color="color"
          :line-color="lineColor">
          <Tab label="v5.56.0+" class="p-5">
            <p>
              Ts.ED provides @@PlatformTest@@ to create a new context to inject your Services, Controllers,
              Middlewares,
              etc... registered with annotations like @@Injectable@@.
            </p>

            <p>The process to test any components is the same thing:
            </p>

            <ul>
              <li>
                Create a new context for your unit test with \`PlatformTest.create\`,
              </li>
              <li>
                Inject or invoke your component with \`PlatformTest.inject\` or \`PlatformTest.invoke\`,
              </li>
              <li>
                Reset the context with \`PlatformTest.reset\`.
              </li>
            </ul>
          </Tab>
          <Tab label="Legacy">
            <Tabs
              alignment="center"
              bg-color="code"
              color="white"
              line-color="blue" class="mb-0">
              <Tab label="test">
                <p>
                  Ts.ED provides @@PlatformTest@@ to create a new context to inject your Services, Controllers,
                  Middlewares,
                  etc... registered with annotations like @@Injectable@@.
                </p>

                <p>The process to test any components is the same thing:
                </p>

                <ul>
                  <li>
                    Create a new context for your unit test with \`PlatformTest.create\`,
                  </li>
                  <li>
                    Inject or invoke your component with \`PlatformTest.inject\` or \`PlatformTest.invoke\`,
                  </li>
                  <li>
                    Reset the context with \`PlatformTest.reset\`.
                  </li>
                </ul>
              </Tab>
              <Tab label="test2">
                hello
              </Tab>
            </Tabs>
          </Tab>
        </Tabs>
      </div>
    </div>`
})
