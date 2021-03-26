<template>
  <Warehouse :url="this.$site.themeConfig.warehouseUrl || 'https://api.tsed.io/rest/warehouse'" :initial-plugins="this.$site.themeConfig.warehouseItems">
    Discover our list of plugins to extend your Ts.ED project.
    <br/>Created by the Ts.ED team and community.
  </Warehouse>
</template>
<script>

import { Warehouse } from '@tsed/vuepress-common'

export default {
  name: 'WarehousePage',
  components: {
    Warehouse
  }
}
</script>