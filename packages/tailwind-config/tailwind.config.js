const { variants, corePlugins } = require('tailwindcss/defaultConfig')
const defaultTheme = require('tailwindcss/defaultTheme')

const primary = 'hsla(208, 100%, 43%, 1)'
const secondary = 'hsla(190, 81%, 42%, 1)'

// eslint-disable-next-line import/no-commonjs,node/exports-style
Object.assign(exports, {
  theme: {
    colors: {
      ...Object.entries(defaultTheme.colors).reduce((colors, [key, obj]) => {
        if (typeof obj === 'object') {
          obj = {
            ...obj,
            DEFAULT: obj[600],
            default: obj[600]
          }
        }
        return {
          ...colors,
          [key]: obj
        }
      }, {}),
      current: 'currentColor',
      transparent: 'transparent',
      inherit: 'inherit',

      /* Brand colors */
      amber: 'hsla(30, 67%, 53%, 1)', // #d78737
      'amber-active': 'hsla(30, 77%, 53%, 1)',

      ardoise: 'hsla(215, 19%, 43%, 1)', // #596A82
      'ardoise-active': 'hsla(215, 35%, 43%, 1)',

      blue: {
        DEFAULT: primary,
        default: primary,
        50: 'hsla(208, 100%, 91%, 1)',
        100: 'hsla(208, 100%, 83%, 1)',
        200: 'hsla(208, 100%, 75%, 1)',
        300: 'hsla(208, 100%, 67%, 1)',
        400: 'hsla(208, 100%, 59%, 1)',
        500: 'hsla(208, 100%, 51%, 1)',
        600: primary,
        700: 'hsla(208, 100%, 35%, 1)',
        800: 'hsla(208, 100%, 27%, 1)',
        900: 'hsla(208, 100%, 19%, 1)'
      },

      'blue-active': 'hsla(190, 81%, 42%, 1)',

      lightBlue: 'hsla(203, 100%, 27%, 0.1)',
      'lightBlue-active': 'hsla(203, 100%, 27%, 0.1)',

      deepBlue: 'hsla(216, 77%, 24%, 1)', // #0e356e : web declinaison of #235578
      'deepBlue-active': 'hsla(216, 87%, 30%, 1)',

      gold: 'hsla(42, 44%, 54%, 1)', // #bd9e55
      'gold-active': 'hsla(42, 54%, 54%, 1)',

      grenadine: 'hsla(339, 49%, 54%, 1)', // #c35078
      'grenadine-active': 'hsla(339, 59%, 54%, 1)',

      pink: '#d81b60',

      kiwi: 'hsla(62, 68%, 37%, 1)', // #9ba01e
      'kiwi-active': 'hsla(62, 78%, 37%, 1)',

      lilas: 'hsla(215, 49%, 66%, 1)', // #7da0d2
      'lilas-active': 'hsla(215, 59%, 66%, 1)',

      mahogany: 'hsla(337, 62%, 21%, 1)', // #55142d
      'mahogany-active': 'hsla(337, 82%, 21%, 1)',

      ocher: 'hsla(45, 81%, 42%, 1)', // #c39614
      'ocher-active': 'hsla(45, 91%, 42%, 1)',

      pine: 'hsla(185, 60%, 20%, 1)', // #144b50
      'pine-active': 'hsla(185, 80%, 20%, 1)',

      platinum: 'hsla(0, 0%, 0%, 1)', // #000000
      'platinum-active': 'hsla(0, 0%, 0%, 1)',

      prune: 'hsla(312, 67%, 24%, 1)', // #671456 : web declinaison of #4b2355
      'prune-active': 'hsla(312, 87%, 24%, 1)',

      sand: 'hsla(41, 50%, 69%, 1)', // #d7be87
      'sand-active': 'hsla(41, 60%, 69%, 1)',

      sandPearl: 'hsla(36, 45%, 89%, 1)', // #f0e6d7
      'sandPearl-active': 'hsla(36, 55%, 89%, 1)',

      silver: 'hsla(220, 2%, 70%, 1)', // #b1b2b4
      'silver-active': 'hsla(220, 12%, 70%, 1)',

      skyBlue: 'hsla(185, 44%, 72%, 1)', // #97d2d7
      'skyBlue-active': 'hsla(185, 54%, 72%, 1)',

      southSea: 'hsla(186, 33%, 71%, 1)', // #9bc8cd
      'southSea-active': 'hsla(186, 43%, 71%, 1)',

      turquoise: 'hsla(190, 81%, 42%, 1)', // #14a5c2 : web declinaison of #78b4c3
      'turquoise-active': 'hsla(190, 91%, 42%, 1)',

      waterGreen: 'hsla(178, 100%, 23%, 1)', // #007672
      'waterGreen-active': 'hsla(178, 100%, 33%, 1)',

      /* Additional colors */
      black: 'hsla(0, 0%, 0%, 1)', // #000000

      deepRed: 'hsla(0, 70%, 45%, 1)', // #c42323
      'deepRed-active': 'hsla(0, 80%, 45%, 1)',

      emerald: 'hsla(136, 78%, 36%, 1)', // #14a53a
      'emerald-active': 'hsla(136, 88%, 36%, 1)',

      greenLight: '#7cb342',

      orange: 'hsla(15, 82%, 57%, 1)', // #eb6437
      'orange-active': 'hsla(15, 92%, 57%, 1)',

      red: 'hsla(0, 64%, 55%, 1)', // #d64242
      'red-active': 'hsla(0, 74%, 55%, 1)',

      yellow: 'hsla(51, 93%, 58%, 1)', // #F7D831

      white: 'hsla(0, 100%, 100%, 1)', // #ffffff
      'white-active': 'hsla(190, 81%, 42%, 1)',
      'white-button': 'hsla(0, 100%, 100%, 1)', // #ffffff
      'white-button-active': 'hsla(0, 100%, 100%, 1)',

      code: 'hsla(245, 17%, 29%, 1)',
      'code-active': 'hsla(246, 17%, 25%, 1)',

      /* Gray colors */
      'gray-lighter': '#f7f7f7',
      'gray-lighter-active': 'hsla(0, 0%, 92%, 1)',

      'gray-light': '#d4d1d1',
      'gray-medium': '#a8a0a0',
      //'gray-dark': '#998e8e',

      'gray-darker': '#504747',
      'gray-darker-active': 'hsla(190, 81%, 42%, 1)',

      // api
      'api-default': '#507192',
      'gray-xxl': '#2c3e50',
      'line-even': 'hsla(195, 22%, 96%, 1)'
    },
    spacing: {
      ...defaultTheme.spacing,
      0: '0',
      '0.5': '.125rem', // 2px
      1: '.25rem', // 4px
      '1.5': '.375rem', // 6px
      2: '.5rem', // 8px
      '2.5': '.625rem', // 10px
      3: '.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 24px
      '7.5': '1.875rem', // 30px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      11: '2.75rem', // 44px
      12: '3rem', // 48px
      15: '3.75rem', // 60px
      16: '4rem', // 64px
      20: '5rem', // 80px
      22: '5.5rem', // 88px
      24: '6rem', // 96px
      25: '6.25rem', // 100px
      26: '6.5rem', // 104px
      28: '8rem', // 128px
      30: '8.5rem', // 136px
      32: '9rem', // 144px
      48: '12rem', // 192px
      52: '13rem', // 208px
      56: '14rem', // 224px
      60: '15rem', // 240px
      68: '17rem' // 272px
    },
    screens: {
      // xs: '22.51em', /* 360px */
      sm: '40.01em' /* 640px --r-minS (phablet) */,
      md: '50.01em' /* 800px --r-minM (tablet) */,
      lg: '64.01em' /* 1024px --r-minL (desktop) */,
      xl: '76.26em' /* 1220px */
    },
    fontFamily: {
      brand: [
        'Source Sans Pro',
        'sans-serif'
      ],
      sans: [
        'Source Sans Pro',
        'sans-serif'
      ],
      serif: [
        'Source Sans Pro',
        'sans-serif'
      ],
      inconsolata: ['Inconsolata'],
      source: [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        'Courier New',
        'monospace'
      ]
    },
    fontSize: {
      micro: '.5rem', // 8px
      xxs: '.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '1.75rem', // 28px
      '3xl': '2rem', // 32px
      '4xl': '2.25rem', // 36px
      '5xl': '2.75rem', // 44px
      '7xl': '3.75rem', // 60px
      '11xl': '4.75rem' // 76px
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      hairline: 100
    },
    backgroundSize: {
      ...defaultTheme.backgroundSize
    },
    borderWidth: {
      ...defaultTheme.borderWidth,
      DEFAULT: '1px',
      default: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      5: '5px'
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray-light', 'current'),
      default: theme('colors.gray-light', 'current')
    }),
    borderRadius: {
      ...defaultTheme.borderRadius,
      none: '0',
      xs: '.15rem', // 5px
      small: '.3125rem', // 5px
      DEFAULT: '.5rem', // 8px
      medium: '1rem', // 16px
      large: '2rem',
      half: '50%',
      full: '100%'
    },
    width: (theme) => ({
      ...defaultTheme.width(theme),
      auto: 'auto',
      px: '1px',
      '1/5': '20%',
      '3/10': '30%',
      '7/10': '70%',
      '9/10': '90%',
      '12/25': '48%'
    }),
    height: (theme) => ({
      ...defaultTheme.height(theme),
      auto: 'auto',
      px: '1px'
    }),
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      site: '18.75rem',
      'input-mini': '17.5rem',
      'input-small': '31.25rem',
      'input-medium': '36.3125rem',
      'input-large': '61.45rem',
      'button-mini': '5.5rem',
      'button-small': '7rem',
      'button-medium': '9.875rem',
      'button-large': '10rem'
    },
    maxWidth: (theme, { breakpoints }) => ({
      ...defaultTheme.maxWidth(theme, { breakpoints }),
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/5': '60%',
      '4/5': '80%',
      '9/10': '90%',
      'site-mini': '17.5rem',
      'site-small': '31.25rem',
      'site-medium': '43.75rem',
      'site-large': '56.25rem',
      'site-xxl': '90rem',
      site: '73.75rem',
      full: '100%',
      screen: '100vw'
    }),
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    padding: (theme) => ({
      ...theme('spacing'),
      px: '1px'
    }),
    margin: (theme, { negative }) => ({
      px: '1px',
      '-px': '-1px',
      '-2px': '-2px',
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    boxShadow: {
      ...defaultTheme.boxShadow,
      default: '0 10px 20px 0 rgba(0,0,0,0.05)',
      sm: '0 1px 5px 0 rgba(0, 0, 0, .15)',
      strong: '0 2px 5px 0 rgba(0, 0, 0, 0.26)',
      md: '0 0 10px 0 rgba(0, 0, 0, 0.25)',
      lg: '0 0 20px rgba(0, 0, 0, 0.15)',
      top: '0 -2px 4px 0 rgba(0, 0, 0, 0.1)',
      inner: 'inset 0 0 20px rgba(0, 0, 0, 0.15)',
      outline: '0 0 0 3px rgba(52,144,220,0.5)',
      none: 'none',
      'symbol': '0 1px 2px rgba(10, 16, 20, 0.24)',
      'sidebar': '0 0 25px rgba(0, 0, 0, .1)'
    },
    zIndex: {
      auto: 'auto',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50
    },
    fill: {
      current: 'currentColor',
      transparent: 'transparent'
    },
    stroke: {
      current: 'currentColor'
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      '2': '2 2 0%',
      '3': '3 3 0%'
    },
    rotate: {
      '-180': '-180deg',
      '-135': '-135deg',
      '-90': '-90deg',
      '0': '0',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg'
    },
    inset: (theme) =>({
      '0': '0',
      auto: 'auto',
      ...theme('spacing')
    }),
  },
  variants: {
    ...variants,
    opacity: [
      ...variants.opacity,
      'group-hover'
    ],
    divideColor: [
      'responsive',
      'group-hover'
    ],
    divideOpacity: [
      'responsive',
      'group-hover'
    ]
  },
  purge: {
    enabled: false
  }
})
