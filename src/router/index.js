import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Payments from '../components/payments/Payments'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/payments',
            name: 'Payments',
            component: Payments
        }

    ], mode: 'history'
});