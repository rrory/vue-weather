import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/saved',
    name: 'Saved',
    component: () => import('../views/Saved.vue')
  },
  {
    path: '/saved/:location/',
    name: 'Weather',
    component: () => import('../components/Weather.vue'),
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
