import Vue from 'vue';
import Vuex from 'vuex';
import { croatiaPlacesStoreModule } from '@/store/modules/croatia-places';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    croatiaPlacesStoreModule,
  },
});
