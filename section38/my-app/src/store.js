import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    list: [
      { id: 0, name: "リンゴ", price: 100 },
      { id: 1, name: "バナナ", price: 200 }
    ],
    list2: [
      { id: 0, name: "レモン", price: 300 },
      { id: 1, name: "メロン", price: 400 }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    mutationType(state, payload) {
      state.count = payload;
    }
  },
  getters: {
    count(state, getters, rootState, rootGetter) {
      return state.count;
    },
    max(state) {
      return state.list.reduce((a, b) => {
        return a.price > b.price ? a.price : b.price;
      }, 0);
    },
    item(state) {
      return name => state.list.find(el => el.name == name)
    },
    name(state, getters) {
      return id => getters.item(id).name
    },
    price(state, getters) {
      return name => getters.item(name).price
    }
  },
  actions: {
    actionType({ commit }, payload) {
      commit('mutationType', payload)
    }
  }
});

export default store;
