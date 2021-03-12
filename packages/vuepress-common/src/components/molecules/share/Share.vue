<template>
  <button class="share border-0 relative flex items-center justify-center transition-all p-1">
    <i class="bx bx-share-alt" role="img"></i>

    <ul class="absolute rounded-small opacity-0 invisible transition-all duration-500 ease-in-out bg-white text-gray-darker">
      <li>
        <a target="_blank"
           class="text-gray-darker hover:text-blue-active no-underline"
           :href="twitterUrl">
          <i class="bx bxl-twitter"></i>
        </a>
      </li>
      <li>
        <a target="_blank"
           class="text-gray-darker hover:text-blue-active no-underline"
           :href="facebookUrl">
          <i class="bx bxl-facebook-square"></i>
        </a>
      </li>
      <li>
        <a target="_blank"
           class="text-gray-darker hover:text-blue-active no-underline"
           :href="linkedinUrl">
          <i class="bx bxl-linkedin-square"></i>
        </a>
      </li>
    </ul>
  </button>
</template>
<script>

function mapParams (params) {
  return params.map(item => item.join('='))
      .join('&')
}

export default {
  name: 'Share',
  props: {
    title: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    hashTags: {
      type: Array,
      default: () => []
    },
    source: {
      type: String,
      default: ''
    }
  },
  computed: {
    url () {
      return typeof window !== 'undefined' ? window.location.origin : '/'
    },
    twitterUrl () {
      const params = mapParams([
        ['url', encodeURIComponent(this.url)],
        ['text', this.text.replace(/ /gi, '+')],
        ['hashtags', this.hashTags.map(encodeURIComponent).join(',')]
      ])

      return `https://twitter.com/intent/tweet?${params}`
    },
    facebookUrl () {
      return `https://www.facebook.com/sharer.php?u=${encodeURIComponent(this.url)}`
    },
    linkedinUrl () {
      const params = mapParams([
        ['mini', 'true'],
        ['url', encodeURIComponent(this.url)],
        ['title', this.brand.replace(/ /gi, '+')],
        ['summary', this.title.replace(/ /gi, '+')],
        ['hashtags', this.hashTags.map(encodeURIComponent).join(',')],
        ['source', encodeURIComponent(this.source)]
      ])

      return `https://www.linkedin.com/shareArticle?${params}`
    },
    reditUrl () {
      const params = mapParams([
        ['url', encodeURIComponent(this.url)],
        ['title', this.text.replace(/ /gi, '+')]
      ])

      return `https://www.reddit.com/submit?${params}`
    }
  }
}
</script>
<style>
.share ul {
  top: 0;
  transform: translateY(5px)
}

.share:hover ul {
  @apply opacity-100 visible;
  transform: translateY(0px);
}

.share ul li a {
  @apply flex items-center justify-center rounded-small transition-all p-1;
}
</style>
