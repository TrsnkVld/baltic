import Vue from 'vue';
// import router from '../router/index';
import config from '@/config';

const mutations = {
  setPage(state, payload) {
    if (payload.page) {
      Object.keys(payload.page).forEach((key) => {
        Vue.set(state.page, key, payload.page[key]);
      });
    }
    if (payload.common) {
      Object.keys(payload.common).forEach((key) => {
        Vue.set(state.common, key, payload.common[key]);
      });
    }
  },
};

export default mutations;
