import Vue       from 'vue'
import VueRouter from 'vue-router'

import Color from '../sections/Color';

Vue.use(VueRouter)

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'color',
      component: Color
    },
    {
      path     : '*',
      redirect : '/'
    }
  ]
})
