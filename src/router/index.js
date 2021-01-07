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
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/loading',
    name: 'Loading',
    component: () => import(/* webpackChunkName: "contact" */ '../components/Loading.vue')
  },
  {
    path: '/page1',
    name: 'Page1',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'Page2',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page2.vue')
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page3.vue')
  },
  {
    path: '/page4',
    name: 'Page4',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page4.vue')
  },
  {
    path: '/page5',
    name: 'Page5',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page5.vue')
  },
  {
    path: '/page6',
    name: 'Page6',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page6.vue')
  },
  {
    path: '/page7',
    name: 'Page7',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page7.vue')
  },
  {
    path: '/page8',
    name: 'Page8',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Page8.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
