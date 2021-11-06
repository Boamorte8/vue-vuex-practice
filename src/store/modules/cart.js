export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  actions: {
    addProductToCart(context, { id }) {
      const productData = context.rootGetters['prods/products'].find(
        (product) => product.id === id
      );
      context.commit('addToCart', { productData });
    },
    removeProductFromCart(context, payload) {
      context.commit('removeFromCart', payload);
    },
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    cartTotal(state) {
      return state.total.toFixed(2);
    },
    cartQuantity(state) {
      return state.qty;
    },
  },
  mutations: {
    addToCart(state, { productData }) {
      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
    removeFromCart(state, { productId }) {
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === productId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
};