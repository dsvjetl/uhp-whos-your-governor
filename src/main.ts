import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';
import i18n from './i18n';
import { TranslationsService } from '@/utils/services/TranslationsService';

Vue.config.productionTip = false;

const translationsService = new TranslationsService(i18n);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
