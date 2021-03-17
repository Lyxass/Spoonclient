import Vue from 'vue'
import VueRouter from 'vue-router'
import Receipe from "@/components/Receipe";
import Home from "@/components/Home";
import Detail from "@/components/Detail";
import Error from "@/components/Error";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/receipe',
    name: 'receipe_search',
    component: Receipe
  },
  {
    path: '/detail/:id',
    component: Detail,
    props: true
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
