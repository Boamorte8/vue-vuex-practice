import cartActions from './actions';
import cartGetters from './getters';
import cartMutations from './mutations';

export default {
  state: {
    cart: {
      items: [],
      total: 0,
      qty: 0,
    },
  },
  actions: cartActions,
  getters: cartGetters,
  mutations: cartMutations,
};