import { text, array } from '@storybook/addon-knobs'
import PageHeader from './PageHeader'

export default {
  title: 'Molecules/PageHeader'
}

export const overview = () => ({
  components: {
    PageHeader
  },
  props: {
    title: {
      default: text('Title', 'Introduction')
    },
    brand: {
      default: text('Brand', 'Ts.ED')
    },
    url: {
      default: text('Url', 'https://tsed.io')
    },
    shareText: {
      default: text('ShareText', 'Share text')
    },
    hashTags: {
      default: array('HashTags', ['awesome', 'tsed', 'nodejs'])
    },
    npmPackageUrl: {
      default: text('NpmPackageUrl', 'https://npmjs.com/@tsed/common')
    },
    repoUrl: {
      default: text('RepoUrl', 'https://github.com/TypedProject/tsed')
    },
    editUrl: {
      default: text('EditUrl', 'https://github.com/TypedProject/tsed')
    },
    createIssueUrl: {
      default: text('CreateIssueUrl', 'https://github.com/TypedProject/tsed')
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh" class="init">
    <PageHeader :title="title"
                :brand="brand"
                :hash-tags="hashTags"
                :url="url"
                :share-text="shareText"
                :npm-package-url="npmPackageUrl"
                :repo-url="repoUrl"
                :edit-url="editUrl"
                :create-issue-url="createIssueUrl"/>
    </div>`
})
