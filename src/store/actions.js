import API from './api';

const actions = {
  fetchPage({ commit }, params) {
    return API.fetchAction(params.name, params).then((result) => {
      commit('setPage', result);
    });
  },
};

export default actions;
