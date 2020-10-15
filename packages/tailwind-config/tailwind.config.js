/*
Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

// let defaultConfig = require('tailwindcss/defaultConfig')()

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

const colors = {
  current: 'currentColor',
  transparent: 'transparent',
  inherit: 'inherit',

  /* Brand colors */
  amber: 'hsla(30, 67%, 53%, 1)', // #d78737
  'amber-active': 'hsla(30, 77%, 53%, 1)',

  ardoise: 'hsla(215, 19%, 43%, 1)', // #596A82
  'ardoise-active': 'hsla(215, 35%, 43%, 1)',

  blue: 'hsla(208, 100%, 43%, 1)', // #0074d9
  'blue-active': 'hsla(190, 81%, 42%, 1)',

  lightBlue: 'hsla(203, 100%, 27%, 0.1)',
  'lightBlue-active': 'hsla(203, 100%, 27%, 0.1)',

  deepBlue: 'hsla(216, 77%, 24%, 1)', // #0e356e : web declinaison of #235578
  'deepBlue-active': 'hsla(216, 87%, 30%, 1)',

  gold: 'hsla(42, 44%, 54%, 1)', // #bd9e55
  'gold-active': 'hsla(42, 54%, 54%, 1)',

  gray: 'hsla(0, 0%, 27%, 1)', // #444444
  'gray-active': 'hsla(0, 0%, 37%, 1)',

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
  'white-active': 'hsla(195, 22%, 96%, 1)',

  code: 'hsla(245, 17%, 29%, 1)',
  'code-active': 'hsla(246, 17%, 25%, 1)',


  /* Gray colors */
  'gray-lighter': '#f7f7f7',
  'gray-lighter-active': 'hsla(0, 0%, 92%, 1)',

  'gray-light': '#d4d1d1',
  'gray-medium': '#a8a0a0',
  'gray-dark': '#998e8e',

  'gray-darker': '#504747',
  'gray-darker-active': 'hsla(190, 81%, 42%, 1)',

  // api
  'api-default': '#507192'
}

const globalSpacing = {
  0: '0',
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
}

// NOTE: We use module.exports here because it is actually a config file u_u.
// eslint-disable-next-line import/no-commonjs,node/exports-style
Object.assign(exports, {
  plugins: [
    require('tailwindcss-transforms')({
      '3d': false // defaults to false
    }),
    require('tailwindcss-inset')({
      insets: {
        '1/2': '50%',
        full: '100%'
      }
    }),
    // rtl
    ({ e, addUtilities }) => {
      const rtlSpacing = Object.keys(globalSpacing).map(key => {
        return {
          // margin-left
          [`div[dir="rtl"] .${e(`ml-${key}`)}`]: {
            marginRight: globalSpacing[key],
            marginLeft: 0
          },
          // margin-right
          [`div[dir="rtl"] .${e(`mr-${key}`)}`]: {
            marginLeft: globalSpacing[key],
            marginRight: 0
          }
        }
      })

      const rtlPadding = Object.keys(globalSpacing).map(key => {
        return {
          // padding-left
          [`div[dir="rtl"] .${e(`pl-${key}`)}`]: {
            paddingRight: globalSpacing[key],
            paddingLeft: 0
          },
          // padding-right
          [`div[dir="rtl"] .${e(`pr-${key}`)}`]: {
            paddingLeft: globalSpacing[key],
            paddingRight: 0
          }
        }
      })

      const rtlSpacingAuto = [
        // margin-left
        { [`div[dir="rtl"] .${e('rtl:ml-auto')}`]: { marginRight: 'auto' } },
        // margin-right
        { [`div[dir="rtl"] .${e('rtl:mr-auto')}`]: { marginLeft: 'auto' } }
      ]

      const rtlPins = [
        // left
        { [`div[dir="rtl"] .${e('rtl:left-0')}`]: { right: 0 } },
        // right
        { [`div[dir="rtl"] .${e('rtl:right-0')}`]: { left: 0 } }
      ]

      const rtlTextAlign = [
        // text-left
        {
          [`div[dir="rtl"] .${e('rtl:text-left')}`]: {
            'text-align': 'right'
          }
        },
        // text-right
        {
          [`div[dir="rtl"] .${e('rtl:text-right')}`]: {
            'text-align': 'left'
          }
        }
      ]

      const rtlFlexRow = [
        {
          [`div[dir="rtl"] .${e('rtl:flex-row')}`]: {
            'flex-direction': 'row-reverse'
          }
        }
      ]

      const rtlBorder = [
        {
          [`div[dir="rtl"] .${e('rtl:border-l-1')}`]: {
            'border-right-width': '1px',
            'border-left-width': 0
          }
        },
        {
          [`div[dir="rtl"] .${e('rtl:border-r-1')}`]: {
            'border-left-width': '1px',
            'border-right-width': 0
          }
        }
      ]

      addUtilities(
        [
          ...rtlSpacing,
          ...rtlSpacingAuto,
          ...rtlPins,
          ...rtlTextAlign,
          ...rtlFlexRow,
          ...rtlBorder,
          ...rtlPadding
        ],
        {
          variants: ['responsive']
        }
      )
    }
  ],
  theme: {
    order: {
      first: '-9999',
      last: '9999',
      normal: '0',
      second: '2',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    },
    /*
      |-----------------------------------------------------------------------------
      | Colors                                  https://tailwindcss.com/docs/colors
      |-----------------------------------------------------------------------------
      |
      | The color palette defined above is also assigned to the "colors" key of
      | your Tailwind config. This makes it easy to access them in your CSS
      | using Tailwind's config helper. For example:
      |
      | .error { color: config('colors.red') }
      |
      */

    colors: colors,

    /*
      |-----------------------------------------------------------------------------
      | Screens                      https://tailwindcss.com/docs/responsive-design
      |-----------------------------------------------------------------------------
      |
      | Screens in Tailwind are translated to CSS media queries. They define the
      | responsive breakpoints for your project. By default Tailwind takes a
      | "mobile first" approach, where each screen size represents a minimum
      | viewport width. Feel free to have as few or as many screens as you
      | want, naming them in whatever way you'd prefer for your project.
      |
      | Tailwind also allows for more complex screen definitions, which can be
      | useful in certain situations. Be sure to see the full responsive
      | documentation for a complete list of options.
      |
      | Class name: .{screen}:{utility}
      |
      */

    screens: {
      // xs: '22.51em', /* 360px */
      sm: '40.01em' /* 640px --r-minS (phablet) */,
      md: '50.01em' /* 800px --r-minM (tablet) */,
      lg: '64.01em' /* 1024px --r-minL (desktop) */
      // xl: '76.26em' /* 1220px */
    },
    translate: {
      // defaults to {}
      '0': '0%',
      '1/2': '50%',
      full: '100%',
      '100': '100%',
      down: '-100%',
      'right-up': ['100%', '-100%'],
      '3d': ['40px', '-60px', '-130px']
    },
    /*
      |-----------------------------------------------------------------------------
      | Fonts                                    https://tailwindcss.com/docs/fonts
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your project's font stack, or font families.
      | Keep in mind that Tailwind doesn't actually load any fonts for you.
      | If you're using custom fonts you'll need to import them prior to
      | defining them here.
      |
      | By default we provide a native font stack that works remarkably well on
      | any device or OS you're using, since it just uses the default fonts
      | provided by the platform.
      |
      | Class name: .font-{name}
      |
      */

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

    /*
      |-----------------------------------------------------------------------------
      | Text sizes                         https://tailwindcss.com/docs/text-sizing
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your text sizes. Name these in whatever way
      | makes the most sense to you. We use size names by default, but
      | you're welcome to use a numeric scale or even something else
      | entirely.
      |
      | By default Tailwind uses the "rem" unit type for most measurements.
      | This allows you to set a root font size which all other sizes are
      | then based on. That said, you are free to use whatever units you
      | prefer, be it rems, ems, pixels or other.
      |
      | Class name: .text-{size}
      |
      */

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

    /*
      |-----------------------------------------------------------------------------
      | Font weights                       https://tailwindcss.com/docs/font-weight
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your font weights. We've provided a list of
      | common font weight names with their respective numeric scale values
      | to get you started. It's unlikely that your project will require
      | all of these, so we recommend removing those you don't need.
      |
      | Class name: .font-{weight}
      |
      */

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    /*
      |-----------------------------------------------------------------------------
      | lineHeight (line height)              https://tailwindcss.com/docs/line-height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your line height values, or as we call
      | them in Tailwind, lineHeights.
      |
      | Class name: .lineHeight-{size}
      |
      */

    // lineHeight: {
    // none: 0,
    // one: 1,
    // half: 0.5,
    // tight: 1.2,
    // normal: 1.4,
    // loose: 1.8
    // },

    /*
      |-----------------------------------------------------------------------------
      | Text colors                         https://tailwindcss.com/docs/text-color
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your text colors. By default these use the
      | color palette we defined above, however you're welcome to set these
      | independently if that makes sense for your project.
      |
      | Class name: .text-{color}
      |
      */

    textColor: theme => theme('colors'),

    /*
      |-----------------------------------------------------------------------------
      | Background colors             https://tailwindcss.com/docs/background-color
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your background colors. By default these use
      | the color palette we defined above, however you're welcome to set
      | these independently if that makes sense for your project.
      |
      | Class name: .bg-{color}
      |
      */

    backgroundColor: theme => theme('colors'),

    /*
      |-----------------------------------------------------------------------------
      | Background sizes               https://tailwindcss.com/docs/background-size
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your background sizes. We provide some common
      | values that are useful in most projects, but feel free to add other sizes
      | that are specific to your project here as well.
      |
      | Class name: .bg-{size}
      |
      */

    backgroundSize: {
      // auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },

    /*
      |-----------------------------------------------------------------------------
      | Border widths                     https://tailwindcss.com/docs/border-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your border widths. Take note that border
      | widths require a special "default" value set as well. This is the
      | width that will be used when you do not specify a border width.
      |
      | Class name: .border{-side?}{-width?}
      |
      */

    borderWidth: {
      default: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      5: '5px',
      arrow: '0.5rem',
      'arrow-large': '1rem'
    },

    /*
      |-----------------------------------------------------------------------------
      | Border colors                     https://tailwindcss.com/docs/border-color
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your border colors. By default these use the
      | color palette we defined above, however you're welcome to set these
      | independently if that makes sense for your project.
      |
      | Take note that border colors require a special "default" value set
      | as well. This is the color that will be used when you do not
      | specify a border color.
      |
      | Class name: .border-{color}
      |
      */

    borderColor: theme => ({
      default: theme('colors.gray-light'),
      ...theme('colors')
    }),

    /*
      |-----------------------------------------------------------------------------
      | Border radius                    https://tailwindcss.com/docs/border-radius
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your border radius values. If a `default` radius
      | is provided, it will be made available as the non-suffixed `.rounded`
      | utility.
      |
      | If your scale includes a `0` value to reset already rounded corners, it's
      | a good idea to put it first so other values are able to override it.
      |
      | Class name: .rounded{-side?}{-size?}
      |
      */

    borderRadius: {
      none: '0',
      xs: '.15rem', // 5px
      small: '.3125rem', // 5px
      default: '.5rem', // 8px
      medium: '1rem', // 16px
      large: '2rem',
      half: '50%',
      full: '100%'
    },

    /*
      |-----------------------------------------------------------------------------
      | Width                                    https://tailwindcss.com/docs/width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your width utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based numeric scale, a percentage
      | based fraction scale, plus some other common use-cases. You
      | can, of course, modify these values as needed.
      |
      |
      | It's also worth mentioning that Tailwind automatically escapes
      | invalid CSS class name characters, which allows you to have
      | awesome classes like .w-2/3.
      |
      | Class name: .w-{size}
      |
      */

    width: {
      auto: 'auto',
      px: '1px',
      ...globalSpacing,
      '1/2': '50%',
      '1/3': '33.33333%',
      '1/4': '25%',
      '1/5': '20%',
      '1/6': '16.66667%',
      '2/3': '66.66667%',
      '3/4': '75%',
      '3/10': '30%',
      '7/10': '70%',
      '9/10': '90%',
      '12/25': '48%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      // '5/6': '83.33333%',
      full: '100%',
      screen: '100vw'
    },

    /*
      |-----------------------------------------------------------------------------
      | Height                                  https://tailwindcss.com/docs/height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your height utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based numeric scale plus some other
      | common use-cases. You can, of course, modify these values as
      | needed.
      |
      | Class name: .h-{size}
      |
      */

    height: {
      auto: 'auto',
      px: '1px',
      0: '0',
      // 1: '0.25rem',
      // 2: '0.5rem',
      // 3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      // 6: '1.5rem',
      8: '1.8rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      16: '4rem',
      24: '6rem',
      32: '8rem',
      // 48: '12rem',
      // 64: '16rem',
      full: '100%',
      screen: '100vh'
    },

    /*
      |-----------------------------------------------------------------------------
      | Minimum width                        https://tailwindcss.com/docs/min-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your minimum width utility sizes. These can
      | be percentage based, pixels, rems, or any other units. We provide a
      | couple common use-cases by default. You can, of course, modify
      | these values as needed.
      |
      | Class name: .min-w-{size}
      |
      */

    minWidth: {
      0: '0',
      site: '18.75rem',
      full: '100%',
      'input-mini': '17.5rem',
      'input-small': '31.25rem',
      'input-medium': '36.3125rem',
      'input-large': '61.45rem',
      'button-mini': '5.5rem',
      'button-small': '7rem',
      'button-medium': '9.875rem',
      'button-large': '10rem'
    },

    /*
      |-----------------------------------------------------------------------------
      | Minimum height                      https://tailwindcss.com/docs/min-height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your minimum height utility sizes. These can
      | be percentage based, pixels, rems, or any other units. We provide a
      | few common use-cases by default. You can, of course, modify these
      | values as needed.
      |
      | Class name: .min-h-{size}
      |
      */

    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh'
    },

    /*
      |-----------------------------------------------------------------------------
      | Maximum width                        https://tailwindcss.com/docs/max-width
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your maximum width utility sizes. These can
      | be percentage based, pixels, rems, or any other units. By default
      | we provide a sensible rem based scale and a "full width" size,
      | which is basically a reset utility. You can, of course,
      | modify these values as needed.
      |
      | Class name: .max-w-{size}
      |
      */

    maxWidth: {
      none: 'none',
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
      'site-large': '51.45rem',
      site: '73.75rem',
      full: '100%',
      screen: '100vw'
    },

    /*
      |-----------------------------------------------------------------------------
      | Maximum height                      https://tailwindcss.com/docs/max-height
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your maximum height utility sizes. These can
      | be percentage based, pixels, rems, or any other units. We provide a
      | couple common use-cases by default. You can, of course, modify
      | these values as needed.
      |
      | Class name: .max-h-{size}
      |
      */

    maxHeight: {
      full: '100%',
      screen: '100vh'
    },

    /*
      |-----------------------------------------------------------------------------
      | Padding                                https://tailwindcss.com/docs/padding
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your padding utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default we
      | provide a sensible rem based numeric scale plus a couple other
      | common use-cases like "1px". You can, of course, modify these
      | values as needed.
      |
      | Class name: .p{side?}-{size}
      |
      */

    padding: {
      px: '1px',
      ...globalSpacing
    },

    /*
      |-----------------------------------------------------------------------------
      | Margin                                  https://tailwindcss.com/docs/margin
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your margin utility sizes. These can be
      | percentage based, pixels, rems, or any other units. By default we
      | provide a sensible rem based numeric scale plus a couple other
      | common use-cases like "1px". You can, of course, modify these
      | values as needed.
      |
      | Class name: .m{side?}-{size}
      |
      */

    margin: {
      auto: 'auto',
      px: '1px',
      ...globalSpacing,
      '-px': '-1px',
      '-2px': '-2px',
      ...Object.entries(globalSpacing)
        .map(([key, value]) => ({ ['-' + key]: '-' + value }))
        .reduce((acc, item) => ({ ...acc, ...item }), {})
    },

    /*
      |-----------------------------------------------------------------------------
      | Shadows                                https://tailwindcss.com/docs/shadows
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your shadow utilities. As you can see from
      | the defaults we provide, it's possible to apply multiple shadows
      | per utility using comma separation.
      |
      | If a `default` shadow is provided, it will be made available as the non-
      | suffixed `.shadow` utility.
      |
      | Class name: .shadow-{size?}
      |
      */

    boxShadow: {
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

    /*
      |-----------------------------------------------------------------------------
      | Z-index                                https://tailwindcss.com/docs/z-index
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your z-index utility values. By default we
      | provide a sensible numeric scale. You can, of course, modify these
      | values as needed.
      |
      | Class name: .z-{index}
      |
      */

    zIndex: {
      // auto: 'auto',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      10: 10
      // 20: 20,
      // 30: 30,
      // 40: 40,
      // 50: 50,
    },

    /*
      |-----------------------------------------------------------------------------
      | Opacity                                https://tailwindcss.com/docs/opacity
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your opacity utility values. By default we
      | provide a sensible numeric scale. You can, of course, modify these
      | values as needed.
      |
      | Class name: .opacity-{name}
      |
      */

    opacity: {
      0: '0',
      5: '.05',
      10: '.1',
      15: '.15',
      25: '.25',
      50: '.5',
      75: '.75',
      85: '.85',
      100: '1'
    },

    /*
      |-----------------------------------------------------------------------------
      | SVG fill                                   https://tailwindcss.com/docs/svg
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your SVG fill colors. By default we just provide
      | `fill-current` which sets the fill to the current text color. This lets you
      | specify a fill color using existing text color utilities and helps keep the
      | generated CSS file size down.
      |
      | Class name: .fill-{name}
      |
      */

    fill: {
      current: 'currentColor',
      transparent: 'transparent'
    },

    /*
      |-----------------------------------------------------------------------------
      | SVG stroke                                 https://tailwindcss.com/docs/svg
      |-----------------------------------------------------------------------------
      |
      | Here is where you define your SVG stroke colors. By default we just provide
      | `stroke-current` which sets the stroke to the current text color. This lets
      | you specify a stroke color using existing text color utilities and helps
      | keep the generated CSS file size down.
      |
      | Class name: .stroke-{name}
      |
      */

    stroke: {
      current: 'currentColor'
    },

    flex: {
      '1': '1 1 0', // flex-grow flex-shrink flex-basis === "growth rate" "shrink rate" "base size"
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
    }
  },
  /*
    |-----------------------------------------------------------------------------
    | Modules                  https://tailwindcss.com/docs/configuration#modules
    |-----------------------------------------------------------------------------
    |
    | Here is where you control which modules are generated and what variants are
    | generated for each of those modules.
    |
    | Currently supported variants:
    |   - responsive
    |   - hover
    |   - focus
    |   - active
    |   - group-hover
    |   - first
    |   - last
    |
    | To disable a module completely, use `false` instead of an array.
    |
    */
  variants: {
    appearance: ['responsive'],
    backgroundColor: ['hover', 'active', 'focus'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderColor: ['hover', 'focus'],
    borderRadius: ['first', 'last'],
    borderStyle: [],
    borderWidth: ['responsive', 'last'],
    cursor: [],
    display: ['responsive'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive'],
    alignContent: ['responsive'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    float: ['responsive'],
    fontFamily: [],
    translate: ['responsive'],
    fontWeight: ['responsive', 'hover'],
    height: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: [],
    listStyleType: [],
    margin: ['responsive', 'last', 'first'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['hover'],
    outline: [],
    overflow: [],
    padding: ['responsive'],
    pointerEvents: [],
    position: ['responsive'],
    inset: ['responsive'],
    resize: [],
    boxShadow: ['responsive', 'hover'],
    fill: [],
    stroke: [],
    tableLayout: [],
    textAlign: ['responsive'],
    textColor: ['hover', 'focus', 'active'],
    fontSize: ['responsive'],
    fontStyle: ['focus', 'hover'],
    fontSmoothing: ['focus', 'hover'],
    textDecoration: ['focus', 'hover'],
    textTransform: ['focus', 'hover'],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    wordBreak: [],
    width: ['responsive'],
    zIndex: [],
    order: ['responsive']
  },
  corePlugins: {
    backgroundAttachment: false,
    borderCollapse: true,
    letterSpacing: false,
    userSelect: false
  }
})
