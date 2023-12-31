import Vue from 'vue'
import Vuex from 'vuex'
import homestore from './home/index'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    active: 0,
    flag: true
  },
  mutations: {
    setActive(state, index) {
      state.active = index;
    },
    changFlag(state, bool) {
      state.flag = bool;
    }
  },
  actions: {
  },
  modules: {
    homestore
  },

})
