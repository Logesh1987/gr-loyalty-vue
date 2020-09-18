import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Profile from '../views/profile/Profile.vue'
import Points from '../views/points/Points.vue'
import History from '../views/history/History.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/mypoints',
    name: 'Points',
    component: Points
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
  // {
  //   path: '/main',
  //   name: 'Main',
  //   component: Main
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
  routes
})

export default router
