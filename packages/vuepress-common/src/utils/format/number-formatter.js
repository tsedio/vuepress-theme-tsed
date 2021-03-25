import millify from 'millify'

export function numberFormatter (num, options = { precision: 1 }) {
  return millify(num || 0, options)
}