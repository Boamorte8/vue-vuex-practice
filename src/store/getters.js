export default {
  userIsAuthenticated(state) {
    return state.isLoggedIn;
  },
  getProducts(state) {
    return state.products;
  },
};
