import Vue from 'vue'
import Router from 'vue-router'
import VueSelector from '@/components/VueSelector'
import CityList from '@/components/CityList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'VueSelector',
      component: VueSelector
    },
    {
      path: '/citylist',
      name: 'CityList',
      component: CityList
    }
  ]
})
