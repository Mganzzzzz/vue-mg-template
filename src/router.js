import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Test from './views/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      title: 'Home',
    },
    {
      path: '/about',
      name: 'about',
      title: '联系我们',
      component: About,
    },
    {
      path: '/test',
      name: 'test',
      title: 'test',
      component: Test,
    }
  ]
})
