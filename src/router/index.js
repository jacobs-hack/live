import Vue from 'vue'
import Router from 'vue-router'
import Announcements from '@/components/Announcements'
import Social from '@/components/Social'
import Schedule from '@/components/Schedule'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'News',
      component: Announcements
    },
    {
      path: '/you',
      name: 'You',
      component: Social
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: Schedule
    }
  ]
})
