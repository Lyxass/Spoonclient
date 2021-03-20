import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Le store va permettre

export default new Vuex.Store({
  state: {
    //Merci de changer la clé d'API. Les points sont précieux pour le Gitlab pages ;)
    api:"16aa1b556b2943c785358b0311aa1043",
    //api: "1b4f50bd8bec4a209e854fcfdd201c82",
    lastResult: {},
    filters: { // contient la selection des différents filtres
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
    updateFilter(state, payload){ // met à jours les filtres séléctionnés
      state.filters[payload.name] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})
