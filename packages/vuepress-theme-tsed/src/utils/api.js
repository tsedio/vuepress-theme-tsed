import luceneQueryParser from 'lucene-query-parser'
import luceneFilter from 'lucene-filter'

const lucene = luceneFilter(luceneQueryParser)

function getLucene (keyword) {
  keyword = keyword
    .replace(/&#39;/gi, '"')
    .replace(/&quot;/gi, '"')
  try {
    return lucene(decodeURIComponent(keyword))
  } catch (er) {
    return lucene(`name: ${keyword}`)
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
          labels: symbol.status
        }
      })
    ]
  }, [])

  return (query) => {
    if (!query) {
      return symbols
    }

    const filter = getLucene(query)
    return symbols.filter(filter)
  }
}
