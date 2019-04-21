import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import History from '@/pages/History'
import Culture from '@/pages/Culture'
import News from '@/pages/News'
import House from '@/pages/House'
import Entertainment from '@/pages/Entertainment'
import EnterDetails from '@/pages/Entertainment/details'
import Recruitment from '@/pages/Recruitment'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/culture',
      name: 'culture',
      component: Culture
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/house',
      name: 'house',
      component: House
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: Entertainment
    },
    {
      path: '/enterDetails',
      name: 'enterDetails',
      component: EnterDetails
    },
    {
      path: '/recruitment',
      name: 'recruitment',
      component: Recruitment
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
