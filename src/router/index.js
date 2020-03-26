import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('view/home/home')
const category = () => import('view/category/category')
const profile = () => import('view/profile/profile')
const shopcart = () => import('view/shopcart/shopcart')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: shopcart
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
