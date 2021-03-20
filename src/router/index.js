import Vue from 'vue'
import VueRouter from 'vue-router'
import Receipe from "@/components/recipe/Recipe";
import Home from "@/components/home/Home";
import Detail from "@/components/detail/Detail";
import Error from "@/components/error/Error";
import Random from "@/components/random/Random";
Vue.use(VueRouter)

const routes = [
  {
    path: '/', // Route par défaut.
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe', // Route vers la ercherche de recette
    name: 'receipe_search',
    component: Receipe
  },
  {
    path: '/detail/:id', // Route vers le détail d'une recette en passant l'id de la recette dans la route
    component: Detail,
    props: true
  },
  {
    path: '/random', // Sélectionne une route de manière aléatoire
    component: Random
  },
  {
    path: "*", // Route qui gère les erreurs (ne fonctionne pas avec apache)
    component: Error,
  }


]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
