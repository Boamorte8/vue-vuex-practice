export default {
  cartItems(state) {
    return state.cart.items;
  },
  cartTotal(state) {
    return state.cart.total.toFixed(2);
  },
  cartQuantity(state) {
    return state.cart.qty;
  },
};
