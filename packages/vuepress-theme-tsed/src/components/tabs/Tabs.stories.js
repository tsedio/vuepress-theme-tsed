import Vue from 'vue';
import Tabs from './Tabs.vue';

export default { title: 'Tabs' };

export const asAComponent = () => ({
  components: { Tabs },
  template: '<Tabs :rounded="true">rounded</Tabs>'
});
