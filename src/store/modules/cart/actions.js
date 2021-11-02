export default {
  addProductToCart(context, payload) {
    context.commit('addToCart', payload);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeFromCart', payload);
  },
};
