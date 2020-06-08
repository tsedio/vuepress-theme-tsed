<script>
  const types = {
    'tip': 'bg-emerald',
    'error': 'bg-red',
    'warn': 'bg-orange',
    'warning': 'bg-orange'
  }
  export default {
    name: 'Badge',
    functional: true,
    props: {
      type: {
        type: String,
      },
      color: {
        type: String,
        default: 'emerald'
      },
      text: String,
      vertical: {
        type: String,
        default: 'top'
      }
    },
    render (h, { props, slots }) {
      return h('span', {
        class: [
          'inline-block',
          'rounded-small',
          'px-2',
          'text-white',
          'text-sm',
          'normal-case',
          types[props.type || props.color] || `bg-${props.color}`
        ].filter(Boolean),
        style: {
          verticalAlign: props.vertical
        }
      }, props.text || slots().default)
    }
  }
</script>
