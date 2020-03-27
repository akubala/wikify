import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import './vuetify.scss';

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1ad15c', // $color-primary
        accent: '#364a5d',
        success: '#1ad15c', // $color-primary
        background: '#282828', // $background-color-tertiary
      },
    },
  },
  icons: {
    iconfont: 'mdi' as 'mdi',
  },
};

export default new Vuetify(opts);
