import { PLUGINS } from '@vuepress/markdown/lib/constant'
import highlightLinesPlugin from '@vuepress/markdown/lib/highlightLines'
import lineNumbersPlugin from '@vuepress/markdown/lib/lineNumbers'
import markdownIt from 'markdown-it'
import Config from 'markdown-it-chain'
import emojiPlugin from 'markdown-it-emoji'
import prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'

function wrap (code, lang) {
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

function getLangCodeFromExtension (extension) {
  const extensionMap = {
    vue: 'markup',
    html: 'markup',
    md: 'markdown',
    rb: 'ruby',
    ts: 'typescript',
    py: 'python',
    sh: 'bash',
    yml: 'yaml',
    styl: 'stylus',
    kt: 'kotlin',
    rs: 'rust'
  }

  return extensionMap[extension] || extension
}

function highlight (str, lang) {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang

  lang = getLangCodeFromExtension(lang)

  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }

  return wrap(str, 'text')
}


/**
 * Create markdown by config.
 */

export const createMarkdown = (markdown = {}) => {
  const {
    lineNumbers
  } = markdown

  // using chainedAPI
  const config = new Config()

  config
    .options
    .html(true)
    .highlight(highlight)
    .end()

    .plugin(PLUGINS.HIGHLIGHT_LINES)
    .use(highlightLinesPlugin)
    .end()

    .plugin(PLUGINS.EMOJI)
    .use(emojiPlugin)
    .end()

  if (lineNumbers) {
    config
      .plugin(PLUGINS.LINE_NUMBERS)
      .use(lineNumbersPlugin)
  }

  const md = config.toMd(markdownIt, markdown)

  dataReturnable(md)

  return md
}

export function dataReturnable (md) {
  // override render to allow custom plugins return data
  const render = md.render
  md.render = (...args) => {
    md.$data = {}
    md.$data.__data_block = {}
    md.$dataBlock = md.$data.__data_block
    const html = render.call(md, ...args)
    return {
      html,
      data: md.$data,
      dataBlockString: toDataBlockString(md.$dataBlock)
    }
  }
}

function toDataBlockString (ob) {
  if (Object.keys(ob).length === 0) {
    return ''
  }
  return `<data>${JSON.stringify(ob)}</data>`
}
