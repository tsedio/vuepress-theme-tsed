import { COLORS_LIST, Contributors, Button } from '@tsed/vuepress-common'
import { number, select } from '@storybook/addon-knobs'
import contributors from '@tsed/vuepress-common/src/components/molecules/contributors/conrtributors.json'

export default {
  title: 'Organisms/BlockContributors'
}

export const overview = () => ({
  components: {
    Contributors,
    Button
  },
  props: {
    bgContainer: {
      default: select('Background container', COLORS_LIST, 'white')
    },
    color: {
      default: select('Text color', COLORS_LIST, 'gray')
    },
    bgColor: {
      default: select('Background color', COLORS_LIST, 'gray-lighter')
    },
    width: {
      default: number('Width', 60)
    },
    padding: {
      default: number('Padding', 3)
    },
    blur: {
      default: number('Blur', 0)
    },
    contributors: {
      default: contributors
        .map((contributor) => {
          const { avatar_url, html_url, login } = contributor
          return {
            src: avatar_url,
            href: html_url,
            login,

            ...contributor
          }
        })
    }
  },
  template: `
    <div :class="'bg-' + bgContainer + ' text-' + color" style="width: 100vw">
      <div class="container flex flex-col w-full max-w-site mx-auto px-3 pb-10">
        <div>
          <h2 class="mb-5">Our<br><b>Contributors</b></h2>

          <Contributors :color="color" :bg-color="bgColor" :blur="blur" :width="width" :padding="padding" :contributors="contributors"/>

          <div class="flex items-center justify-center">
            <Button>
              Become contributor
            </Button>
          </div>
          
        </div>
      </div>
    </div>`
})
