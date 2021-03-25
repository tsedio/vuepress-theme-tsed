<template>
  <dl class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
    <div
        class="flex justify-center p-4 text-center border-b border-gray-lighter sm:flex-col sm:p-6 sm:border-0 sm:border-r">
      <dt id="item-1"
          class="order-2 ml-2 font-medium leading-6 text-gray-darker sm:mt-2 sm:ml-0 sm:text-md sm:capitalize">
        plugins
      </dt>
      <dd aria-describedby="item-1"
          class="order-1 text-2xl font-extrabold leading-none text-blue-active sm:text-4xl">
        {{ plugins || '-' }}
      </dd>
    </div>
    <div
        class="flex justify-center p-4 text-center border-t border-b border-gray-lighter sm:flex-col sm:p-6 sm:border-0 sm:border-l sm:border-r">
      <dt class="order-2 ml-2 font-medium leading-6 text-gray-darker sm:mt-2 sm:ml-0 sm:text-md sm:capitalize">
        downloads last 30 days
      </dt>
      <dd class="order-1 text-2xl font-extrabold leading-none text-blue-active sm:text-4xl">
        {{ downloads | numberFormatter }}
      </dd>
    </div>
    <div
        class="flex justify-center p-4 text-center border-t border-gray-lighter sm:flex-col sm:p-6 sm:border-0 sm:border-l">
      <dt class="order-2 ml-2 font-medium leading-6 text-gray-darker sm:mt-2 sm:ml-0 sm:text-md sm:capitalize">
        maintainers
      </dt>
      <dd class="order-1 text-2xl font-extrabold leading-none text-blue-active sm:text-4xl">
        {{ maintainers || '-' }}
      </dd>
    </div>
  </dl>
</template>
<script>
import { numberFormatter } from '../../../utils/format/number-formatter'

export default {
  name: 'WarehouseStats',
  filters: {
    numberFormatter (num) {
      return numberFormatter(num, { precision: 1 })
    }
  },
  props: {
    maintainers: {
      type: Number,
      default: 0
    },
    downloads: {
      type: Number,
      default: 0
    },
    plugins: {
      type: Number,
      default: 0
    }
  }
}
</script>