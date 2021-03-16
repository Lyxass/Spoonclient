import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: "1b4f50bd8bec4a209e854fcfdd201c82",
    lastResult: {},
    filters: {
      intolerances: [],
      cuisines: [],
      excludeCuisine:[]
    }
  },
  getters:{
    getLastResult: (state) =>{
      return state.lastResult;
    },
    getIntolerences: (state)=>{
      return state.filters.intolerances
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
