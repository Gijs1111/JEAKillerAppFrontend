import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App';
import router from './router';

import ApiService from '@/common/api.service';
import store from '@/store/index';

Vue.config.productionTip = false;

ApiService.init();

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
