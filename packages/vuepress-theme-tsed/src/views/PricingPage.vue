<template>
  <div>
    <div class="bg-gray-200 pb-5">
      <div class="pt-16 pb-16 bg-blue-900 sm:pb-24">
        <div class="px-4 pb-10 text-center sm:px-6 lg:px-8">
          <h1 class="mt-4 text-4xl font-extrabold leading-10 text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Pricing
          </h1>
          <p class="max-w-xl mx-auto mt-5 text-lg leading-7 sm:text-xl text-gray-100">
            <Content slot-key="pricing-header"/>
          </p>
        </div>
      </div>
      <div class="-mt-15 flex justify-center">
        <div>
          <Pricing v-bind="this.$site.themeConfig.pricing" class="max-w-screen-xl "/>
          <em class="block -mt-6 mb-5 mx-2">Prices include taxes - It use github sponsors.</em>

          <h2>
            Or getting punctual support
          </h2>
        </div>
      </div>
    </div>

    <div class="px-5 md:px-10 max-w-site m-auto">
      <div class="page-content">
        <Content/>
      </div>
    </div>
  </div>
</template>
<script>
import {Pricing} from '@tsed/vuepress-common'

export default {
  name: 'PricingPage',
  components: {
    Pricing
  }
}
</script>
