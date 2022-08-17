import { createRouter, createWebHistory } from 'vue-router'
import AboutFlags from '../views/AboutFlagsCreator.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutFlags
  },
  {
    path: '/love',
    name: 'love',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "art" */ '../views/AboutLoveCalculator.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
