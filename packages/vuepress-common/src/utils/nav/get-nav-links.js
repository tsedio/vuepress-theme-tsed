import { resolveNavLinkItem } from 'vuepress-theme-tsed/src/utils'

function getUserNav ({ $themeLocaleConfig, $site }) {
  return $themeLocaleConfig.nav || $site.themeConfig.nav || []
}

export function getNavLinks ({ $site, $router, $localeConfig, $themeLocaleConfig }) {
  const { locales } = $site

  if (locales && Object.keys(locales).length > 1) {
    const currentLink = this.$page.path
    const routes = $router.options.routes

    const themeLocales = $site.themeConfig.locales || {}

    const languageDropdown = {
      text: $themeLocaleConfig.selectText || 'Languages',
      items: Object.keys(locales).map(path => {
        const locale = locales[path]
        const text = themeLocales[path] && themeLocales[path].label || locale.lang
        let link
        // Stay on the current page
        if (locale.lang === this.$lang) {
          link = currentLink
        } else {
          // Try to stay on the same page
          link = currentLink.replace($localeConfig.path, path)
          // fallback to homepage
          if (!routes.some(route => route.path === link)) {
            link = path
          }
        }
        return { text, link }
      })
    }

    return [...getUserNav({ $site, $themeLocaleConfig }), languageDropdown]
  }

  return getUserNav({ $site, $themeLocaleConfig })
}

export function getUserNavLinks (options) {
  return (getNavLinks(options) || []).map(link => {
    return Object.assign(resolveNavLinkItem(link), {
      items: (link.items || []).map(resolveNavLinkItem)
    })
  })
}