import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classification',
    name: 'classification',
    component: () => import('../views/Classification.vue')
  }, {
    path: '/find',
    name: 'find',
    component: () => import('../views/Find.vue')
  },
  {
    path: '/shoppingcart',
    name: 'shoppingcart',
    component: () => import('../views/Shoppingcart.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/Mine.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
