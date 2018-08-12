module.exports = {
  title: 'Ts.ED',
  description: 'A TypeScript Framework on top of Express',
  serviceWorker: false,
  theme: 'tsed',
  themeConfig: {
    repo: 'romakita/ts-express-decorators',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Default Theme Config',
            link: '/default-theme-config/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ]
        /*sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }*/
      }
    }
  }
};
