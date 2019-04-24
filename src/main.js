// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/common.css'
import 'swiper/dist/css/swiper.css'
import Paginate from 'vuejs-paginate'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import * as filters from './filters'

Vue.use(VueAwesomeSwiper)
Vue.component('paginate', Paginate)
// register global utility filters.
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
