<template>
  <div class="search-box sm:ml-1 dropdown-wrapper relative flex flex-col sm:flex-row sm:items-center"
       :class="{ open: showSuggestions, '-click': true, focused}">
    <label class="sm:flex items-center sm:h-full w-full sm:px-0">
      <InputText @input="query = $event.target.value"
                 class="w-full rounded-medium sm:rounded-small"
                 aria-label="Search"
                 v-model="query"
                 autocomplete="off"
                 spellcheck="false"
                 @focus="focused = true"
                 @blur="focused = false"
                 @keyup.enter="go(focusIndex)"
                 @keyup.up="onUp"
                 @keyup.down="onDown">
        <template #input-left>
          <BxIcon name="bx-search" class="mr-1 -ml-1"/>
        </template>
      </InputText>
    </label>

    <DropdownTransition>
      <div class="flex-1 search-dropdown text-gray-darker z-2" @mouseleave="unfocus">
        <ul class="reset-list text-gray-darker">
          <li class="hover:opacity-100"
              v-for="(s, i) in suggestions"
              :class="{'mt-3 opacity-75': i,  'text-blue opacity-100': i === focusIndex}"
              :key="i"
              @mousedown="go(i)"
              @mouseenter="focus(i)">
            <a :href="s.path"
               class="flex items-center text-sm block p-0 px-6 mt-1 mb-2 cursor-pointer transition-all"
               @click.prevent>
              <span class="font-bold">{{ s.title || s.path }}</span>
              <BxIcon name="bx-chevron-right"/>
              <span v-if="s.header" class="header">{{ s.header.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </DropdownTransition>
  </div>
</template>

<script>
import BxIcon from '../../atoms/icons/BxIcon'
import DropdownTransition from '../dropdown/DropdownTransition'
import InputText from '../input-text/InputText'

export default {
  name: 'SearchBox',
  components: { BxIcon, DropdownTransition, InputText },
  data () {
    return {
      query: '',
      focused: false,
      focusIndex: 0
    }
  },

  computed: {
    showSuggestions () {
      return (
          this.focused &&
          this.suggestions &&
          this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { pages, themeConfig } = this.$site
      const max = themeConfig.searchMaxSuggestions || 5
      const localePath = this.$localePath
      const matches = item => (
          item.title &&
          item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    }
  },

  mounted () {
    document.addEventListener('click', this.onClickOutside)
    document.addEventListener('focus', this.onClickOutside)
  },

  destroyed () {
    document.removeEventListener('click', this.onClickOutside)
    document.removeEventListener('focus', this.onClickOutside)
  },

  methods: {
    onClickOutside () {
      this.unfocus()
    },
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>
<style>
.search-box {
  width: 35px;
  @apply ml-1;
}

.search-box.focused {
  @apply m-0;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;

  > label {
    @apply px-4
  }

  .search-dropdown {
    @apply pt-5;
  }
}

@screen sm {
  .search-box,
  .search-box.focused {
    @apply ml-1;
    position: relative;
    background: transparent;
    top: auto;
    left: auto;
    width: auto;
    height: auto;
    z-index: 0;

    > label {
      @apply px-0
    }

    .search-dropdown {
      @apply absolute;
      @apply bg-white opacity-0 left-0 pt-0 rounded-medium rounded-tl-small;

      min-width: 200px;
      display: block !important;
      visibility: hidden;
      height: auto !important;
      box-sizing: border-box;
      max-height: calc(100vh - 2.7rem);
      overflow-y: auto;
      position: absolute;
      bottom: 0;
      transform: translateY(100%);
      padding: .5rem 0;
      text-align: left;
      white-space: nowrap;
      margin: -10px 0 0;
      transition: all .25s ease;
      box-shadow: 0 10px 20px -10px rgba(0, 0, 0, .1);
    }
  }

  .search-box.dropdown-wrapper.-click.open .search-dropdown {
    transform: translateY(calc(100% + 10px)) !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
}

</style>

