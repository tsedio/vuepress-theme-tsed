import { resolveMatchingConfig, resolvePage } from '@vuepress/theme-default/util'

export * from '@vuepress/theme-default/util'
export * from './api'
export * from './get-css'
export * from './scroll-position'
export * from './throttle'
export * from './colors'

export function resolveOtherTopicsItems (page, regularPath, site, localePath) {
  const { pages, themeConfig } = site
  const localeConfig = localePath && themeConfig.locales
    ? themeConfig.locales[localePath] || themeConfig
    : themeConfig

  const otherTopicsConfig = localeConfig.otherTopics || themeConfig.otherTopics

  if (!otherTopicsConfig) {
    return []
  } else {
    const { base, config } = resolveMatchingConfig(regularPath, otherTopicsConfig)
    return config
      ? config.map(item => {
        return resolvePage(pages, item, base)
      })
      : []
  }
}
