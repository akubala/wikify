import Vue from 'vue';
import _forEach from 'lodash/forEach';
import _kebabCase from 'lodash/kebabCase';

import vuetify from '@/plugins/vuetify';
import components from '@/components';
import views from '@/views';

import App from './App.vue';

Vue.config.productionTip = false;

// register components
_forEach({ ...components, ...views }, (value, key) => {
  Vue.component(_kebabCase(key), value);
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
