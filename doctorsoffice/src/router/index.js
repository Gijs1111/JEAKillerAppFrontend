import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Clients from '@/components/client/Clients'
import Appointment from '@/components/appointment/Appointment'
import Familydoctor from '@/components/familydoctor/Familydoctor'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/appointments',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/familydoctors',
      name: 'Familydoctors',
      component: Familydoctor
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
