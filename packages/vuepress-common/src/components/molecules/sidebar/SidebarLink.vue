<script>
import {groupHeaders, hashRE, isActive} from '@tsed/vuepress-common'

export default {
  functional: true,

  props: ['item', 'class'],

  render(h, input) {
    const {parent: {$page, $site, $route}, props: {item}, data: {staticClass}} = input

    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = isActive($route, item.path)
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto'
        ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
        : selfActive
    const link = renderLink(h, item.path, item.title || item.path, active, staticClass)

    const configDepth = $page.frontmatter.sidebarDepth != null
        ? $page.frontmatter.sidebarDepth
        : $site.themeConfig.sidebarDepth
    const maxDepth = configDepth == null ? 1 : configDepth
    const displayAllHeaders = !!$site.themeConfig.displayAllHeaders
    if (item.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)]
    } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {
      const children = groupHeaders(item.headers)
      return [link, renderChildren(h, children, item.path, $route, maxDepth)]
    } else {
      return link
    }
  }
}

function renderLink(h, to, text, active, className = '') {
  if (to.startsWith('https://')) {
    return h('a', {
      attrs: {
        href: to,
      },
      props: {
        activeClass: '',
        exactActiveClass: ''
      },
      class: {
        active,
        'sidebar-link relative block py-2': true,
        [className]: true
      }
    }, text)
  }
  return h('router-link', {
    props: {
      to,
      activeClass: '',
      exactActiveClass: ''
    },
    class: {
      active,
      'sidebar-link relative block py-2': true,
      [className]: true
    }
  }, text)
}

function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null
  return h('ul', {class: 'sidebar-sub-headers'}, children.map(c => {
    const active = isActive(route, path + '#' + c.slug)
    return h('li', {class: 'sidebar-sub-header'}, [
      renderLink(h, path + '#' + c.slug, c.title, active),
      renderChildren(h, c.children, path, route, maxDepth, depth + 1)
    ])
  }))
}
</script>
<style>
a.sidebar-link:after {
  @apply bg-blue-600 absolute left-0;
  content: "";
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 0;
  transition: all .25s ease;
  border-radius: 0 5px 5px 0;
}

a.sidebar-link.active:after {
  height: 30px;
}
</style>
