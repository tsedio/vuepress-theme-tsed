<template>
  <div id="docsearch"></div>
</template>

<script>
import docsearch from '@docsearch/js'
import '@docsearch/css/dist/style.css'

function isSpecialClick (event) {
  return (
      event.button === 1 ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
  )
}

export default {
  name: 'AlgoliaSearchBox',
  props: ['options'],
  watch: {
    $lang (newValue) {
      this.update(this.options, newValue)
    },

    options (newValue) {
      this.update(newValue, this.$lang)
    }
  },

  mounted () {
    this.initialize(this.options, this.$lang)
  },

  methods: {
    getRelativePath (absoluteUrl) {
      const {pathname, hash} = new URL(absoluteUrl)
      return pathname.replace(this.$site.base, '/') + hash
    },
    initialize (userOptions, lang) {
      const router = this.$router
      docsearch(
          {
            placeholder: this.$site.themeConfig.searchPlaceholder,
            ...userOptions,
            container: '#docsearch',
            // #697 Make DocSearch work well in i18n mode.
            searchParameters: Object.assign(
                {},
                lang && {
                  facetFilters: [`lang:${lang}`].concat(
                      userOptions.facetFilters || []
                  )
                },
                userOptions.searchParameters
            ),
            navigator: {
              navigate: ({suggestionUrl}) => {
                const {pathname: hitPathname} = new URL(
                    window.location.origin + suggestionUrl
                )

                // Vue Router doesn't handle same-page navigation so we use
                // the native browser location API for anchor navigation.
                if (router.history.current.path === hitPathname) {
                  window.location.assign(
                      window.location.origin + suggestionUrl
                  )
                } else {
                  router.push(suggestionUrl)
                }
              }
            },
            transformItems: items => {
              return items.map(item => {
                return Object.assign({}, item, {
                  url: this.getRelativePath(item.url)
                })
              })
            },
            hitComponent:  ({ hit, children }) =>
                ({
                  type: 'a',
                  ref: undefined,
                  constructor: undefined,
                  key: undefined,
                  props: {
                    href: hit.url,
                    // handle `onClick` by `router.push`
                    onClick: (event) => {
                      if (isSpecialClick(event)) {
                        return
                      }
                      event.preventDefault()
                      router.push(hit.url)
                    },
                    children,
                  },
                  __v: null,
                })
          })
    },

    update (options, lang) {
      this.$el.innerHTML = '<div id="docsearch"></div>'
      this.initialize(options, lang)
    }
  }
}
</script>
<style>
.DocSearch {
  --docsearch-primary-color: theme('colors.blue.600');
  --docsearch-highlight-color: var(--docsearch-primary-color);
  --docsearch-searchbox-shadow: inset 0 0 0 2px var(--docsearch-primary-color);
}
</style>
