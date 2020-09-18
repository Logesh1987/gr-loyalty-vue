import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    basicSetup: null
  },
  mutations: {
    updateLoader: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    getDate: ({ commit, state }) => {
      commit('updateLoader', true)
      return Axios.get
    }
  },
  modules: {
  }
})
