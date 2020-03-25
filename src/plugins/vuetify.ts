import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1ad15c',
        accent: '#364a5d',
        success: '#1ad15c',
      },
    },
  },
};

export default new Vuetify(opts);
