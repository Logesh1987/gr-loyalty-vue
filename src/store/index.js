import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import dData from './data';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    initialData: null
  },
  mutations: {
    updateLoader: (state, payload) => {
      state.loading = payload
    },
    updateInitialData: (state, payload) => {
      state.initialData = payload
    }
  },
  actions: {
    getData: ({ commit }) => {
      commit('updateLoader', true)
      Axios.get('https://jai.devam.pro/gr/services/v2/loyalty?id=3817&includes=shop,rewards,events')
      .then(({data}) => {
        commit('updateInitialData', data.data)
        return data.data;
      })
    }
  },
  modules: {
  }
})
