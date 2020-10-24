import luceneFilter from 'lucene-filter'
import luceneQueryParser from 'lucene-query-parser'

const lucene = luceneFilter(luceneQueryParser)

function getLucene (keyword) {
  keyword = keyword
    .replace(/&#39;/gi, '"')
    .replace(/&quot;/gi, '"')
  try {
    return lucene(decodeURIComponent(keyword))
  } catch (er) {
    try {
      return lucene(`name: ${keyword}`)
    } catch (er) {
      console.error('Lucene query error:', keyword)
    }
  }
}

export function filterSymbols (api) {
  const symbols = Object.values(api.modules).reduce((symbols, current) => {
    return [
      ...symbols,
      ...current.symbols.map((symbol) => {
        return {
          ...symbol,
          name: symbol.symbolName,
          type: symbol.symbolType,
          tags: symbol.status.join(',')
        }
      })
    ]
  }, [])

  return (query) => {
    if (!query) {
      return symbols
    }

    const filter = getLucene(query)
    return filter ? symbols.filter(filter) : []
  }
}
