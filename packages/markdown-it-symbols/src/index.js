'use strict'

const { atSymbolName } = require('./at-symbol-name')
const { atSymbols } = require('./at-symbols')

module.exports = function ins_plugin (md) {
  atSymbols(md)
  atSymbolName(md)
}
