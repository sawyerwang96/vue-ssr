import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/user',
    component: () => import('./components/User.vue')
  }
]

export default function() {
  const router = new VueRouter({
    mode: 'history',
    routes
  })
  return router
}