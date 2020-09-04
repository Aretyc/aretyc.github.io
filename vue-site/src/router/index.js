import Vue from 'vue'
import VueRouter from 'vue-router'
import Web from '../views/Web.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/web',
      name: 'Web',
      component: Web
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
})

export default router
