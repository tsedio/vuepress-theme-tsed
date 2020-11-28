import luceneFilter from 'lucene-filter'
import luceneQueryParser from 'lucene-query-parser'

const lucene = luceneFilter(luceneQueryParser)

function isJS (query) {
  return query.includes('.includes(') || query.includes('.indexOf(') || query.includes(' == ') || query.includes(' === ')
}

function createRegExp (item) {
  const keys = Object.keys(item).join('|')
  return new RegExp('\\b(' + keys + ')\\b', 'g')
}

function getCustomFilter (query) {
  let q = null
  return (scope) => {
    try {
      q = q || query.replace(createRegExp(scope), `scope.$1`)
      return eval(q)
    } catch (er) {
      throw new Error('CustomFilterError:' + query)
    }
  }
}

function getLucene (query) {
  query = query
    .replace(/&#39;/gi, '"')
    .replace(/&quot;/gi, '"')
    .replace(/'/gi, '"')
  try {
    return lucene(decodeURIComponent(query))
  } catch (er) {
    try {
      return lucene(`name: ${query}`)
    } catch (er) {
      console.error('LuceneQueryError:', query)
    }
  }
}

function getFilter (query) {
  return isJS(query) ? getCustomFilter(query) : getLucene(query)
}

function getSymbols (api) {
  return Object.values(api.modules).reduce((symbols, current) => {
    return [
      ...symbols,
      ...current.symbols.map((symbol) => {
        return {
          ...symbol,
          module: current.name,
          name: symbol.symbolName,
          type: symbol.symbolType,
          tags: symbol.status.join(','),
          labels: symbol.status
        }
      })
    ]
  }, [])
}

export function filterSymbols (api) {
  const symbols = getSymbols(api)

  return (query) => {
    if (!query) {
      return symbols
    }

    const filter = getFilter(query)
    return filter ? symbols.filter(filter) : []
  }
}
