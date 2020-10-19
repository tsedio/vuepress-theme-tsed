<template>
  <div class="px-5 md:px-10 max-w-site m-auto">
    <div class="page-content py-5">
      <div class="flex items-center">
        <div class="flex-1">
          <h4 class="text-xl mb-4 mt-2 px-2 font-semibold">Support us</h4>

          <div class="content__default">
            <p>
              {{ brand }} is an {{ licenseType }}-licensed open source project. It can grow thanks to the support by the
              community. If
              you'd like to join them, please read more <a href="/support.html">here</a>.
            </p>
            <div class="flex items-center justify-center pt-5 mt-5 mb-5">
              <Button :href="sponsorUrl" bg-color="white" color="blue" rounded="medium">
                Become sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from '../button/Button'

export default {
  name: 'SupportUs',
  components: {
    Button
  },
  props: {
    brand: {
      type: String
    },
    licenseType: {
      type: String
    },
    sponsorUrl: {
      type: String
    }
  }
}
</script>