import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api:"16aa1b556b2943c785358b0311aa1043",
    //api: "1b4f50bd8bec4a209e854fcfdd201c82",
    lastResult: {},
    filters: {
      intolerances: [],
      cuisines: [],
      excludeCuisine:[],
      diet:[]
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
    updateFilter(state, payload){
      state.filters[payload.name] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
