const getters = {
  currentBox(state) {
    return state.box;
  },

  page(state) {
    return state.page;
  },

  home(state) {
    if (!state.page) return null;
    return state.page.Home;
  },

  common(state) {
    return state.common;
  },

  user(state) {
    return state.account.user;
  },

  authToken(state) {
    return state.account.auth;
  },

  orders(state) {
    return state.account.orders;
  },

  isAuthModalVisible(state) {
    return state.showAuthModal;
  },
};

export default getters;
