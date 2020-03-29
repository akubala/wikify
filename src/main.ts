import Vue from 'vue';
import _forEach from 'lodash/forEach';

import vuetify from '@/plugins/vuetify';
import components from '@/components';
import views from '@/views';

import App from './App.vue';

Vue.config.productionTip = false;

// register components
_forEach(components, (value, key) => {
  Vue.component(key, value);
});

// register views
_forEach(views, (value, key) => {
  Vue.component(key, value);
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
