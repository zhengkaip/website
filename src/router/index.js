import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import IndexDetail from '@/pages/Index/detail'
import History from '@/pages/History'
import Culture from '@/pages/Culture'
import News from '@/pages/News'
import NewsDetail from '@/pages/News/detail'
import House from '@/pages/House'
import Hotel from '@/pages/Hotel'
import Education from '@/pages/Education'
import Entertainment from '@/pages/Entertainment'
import EnterDetails from '@/pages/Entertainment/details'
import Recruitment from '@/pages/Recruitment'
import Contact from '@/pages/Contact'
import ShowDetail from '@/pages/Index/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/index/detail',
      name: 'IndexDetail',
      component: IndexDetail
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
      path: '/newsDetail/:id?',
      name: 'newsDetail',
      component: NewsDetail
    },
    {
      path: '/house',
      name: 'house',
      component: House
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    },
    {
      path: '/education',
      name: 'education',
      component: Education
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
    },
    {
      path: '/showDetail',
      name: 'showDetail',
      component: ShowDetail
    }
  ]
})
