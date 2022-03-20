// 数据预取
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {
  const store = new Vuex.Store({
    state: {
      name: ''
    },
    mutations: {
      setName(state, val) {
        console.log('setName val', val);
        state.name = val
      }
    },
    actions: {
      getName({ commit }) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('SSR')
          }, 300)
        }).then(val => {
          console.log('getName result', val)
          commit('setName', val)
        })
      }
    }
  })
  return store
}