<script>
import { groupHeaders, hashRE, isActive } from '@tsed/vuepress-common'

export default {
  functional: true,

  props: ['item', 'class'],

  render (h, input) {
    const { parent: { $page, $site, $route }, props: { item }, data: { staticClass } } = input

    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path)
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto'
        ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
        : selfActive

    const configDepth = $page.frontmatter.sidebarDepth != null
        ? $page.frontmatter.sidebarDepth
        : $site.themeConfig.sidebarDepth

    const maxDepth = configDepth == null ? 1 : configDepth
    const displayAllHeaders = !!$site.themeConfig.displayAllHeaders

    if (item.type === 'auto') {
      return [renderChildren(h, item.children, item.basePath, $route, maxDepth)]
    }

    if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
      const children = groupHeaders(item.headers)
      return [renderChildren(h, children, item.path, $route, maxDepth)]
    }
  }
}

function renderLink (h, to, text, active, className = '') {
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: ''
    },
    class: {
      active,
      'page-sidebar-link': true,
      [className]: true
    }
  }, text)
}

function renderChildren (h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null
  return h('ul', { class: 'page-sidebar-sub-headers' }, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    return h('li', { class: 'page-sidebar-sub-header' }, [
      renderLink(h, path + '#' + c.slug, c.title, active),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1)
    ])
  }))
}
</script>
<style>
.page-sidebar-sub-headers {
  @apply relative;
}

.page-sidebar-sub-headers:after {
  @apply absolute left-0 bg-gray-light;
  content: "";
  top: 10px;
  bottom: 10px;
  width: 2px;
}

.page-sidebar-link {
  @apply relative block py-1 text-sm pl-6 transition duration-500 ease-in-out;

  &:before {
    @apply rounded-half transition duration-500 ease-in-out bg-white inline-block absolute z-2 border-gray-light border-2 bg-gray-lighter;
    transform: translateY(-50%);
    content: "";
    left: -3px;
    width: 8px;
    height: 8px;
    top: 50%;
  }

  &.active {
    @apply text-blue-600 font-bold;
  }
  &.active:before {
    @apply bg-blue-600 border-blue-600;
  }
}
</style>
