const BRAND_COLORS = {
  AMBER: 'amber',
  ARDOISE: 'ardoise',
  BLUE: 'blue',
  DEEP_BLUE: 'deepBlue',
  GOLD: 'gold',
  GRAY: 'gray',
  GRENADINE: 'grenadine',
  KIWI: 'kiwi',
  LILAS: 'lilas',
  MAHOGANY: 'mahogany',
  OCHER: 'ocher',
  PINE: 'pine',
  PLATINUM: 'platinum',
  PRUNE: 'prune',
  SAND: 'sand',
  SAND_PEARL: 'sandPearl',
  SILVER: 'silver',
  SKY_BLUE: 'skyBlue',
  SOUTH_SEA: 'southSea',
  TURQUOISE: 'turquoise',
  WATER_GREEN: 'waterGreen',
  CODE: 'code'
}

const APP_ADDITIONAL_COLORS = {
  BLACK: 'black',
  DEEP_RED: 'deepRed',
  EMERALD: 'emerald',
  ORANGE: 'orange',
  RED: 'red',
  YELLOW: 'yellow',
  WHITE: 'white'
}

const APP_GRAY_COLORS = {
  GRAY_LIGHTER: 'gray-lighter',
  GRAY_LIGHT: 'gray-light',
  GRAY_MEDIUM: 'gray-medium',
  GRAY_DARK: 'gray-dark',
  GRAY_DARKER: 'gray-darker'
}

const APP_COLORS = {
  BOOKING: 'booking',
  DANGER: 'danger',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning'
}

const COLORS = {
  ...BRAND_COLORS,
  ...APP_ADDITIONAL_COLORS,
  ...APP_GRAY_COLORS,
  ...APP_COLORS
}

const BRAND_COLORS_LIST = Object.values(BRAND_COLORS)

const APP_ADDITIONAL_COLORS_LIST = Object.values(APP_ADDITIONAL_COLORS)

const APP_GRAY_COLORS_LIST = Object.values(APP_GRAY_COLORS)

const APP_COLORS_LIST = Object.values(APP_COLORS)

const COLORS_LIST = [
  ...BRAND_COLORS_LIST,
  ...APP_ADDITIONAL_COLORS_LIST,
  ...APP_GRAY_COLORS_LIST,
  ...APP_COLORS_LIST
]

export { COLORS, COLORS_LIST }
