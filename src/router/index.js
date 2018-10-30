import Vue from 'vue'
import Router from 'vue-router'
import Announcements from '@/components/Announcements'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Announcements',
      component: Announcements
    }
  ]
})
