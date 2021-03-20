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
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe',
    name: 'receipe_search',
    component: Receipe
  },
  {
    path: '/detail/:id',
    component: Detail,
    props: true
  },
  {
    path: '/random',
    component: Random
  },
  {
    path: "*",
    component: Error,
  }


]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
