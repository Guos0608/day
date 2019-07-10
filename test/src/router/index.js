import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import More from '@/views/More'
import Qzing from '@/views/Qzing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },{
      path: '/qzing',
      name: 'Qzing',
      component: Qzing
    }
  ]
})
