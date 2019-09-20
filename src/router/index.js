import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Dashboard from '@/views/dashboard/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/dashboard',
            children: [
                {path:'/dashboard',name:'dashboard',component: Dashboard}
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/Login.vue'),
            hidden: true
        },
        {
            path: '/register',
            component: () => import('@/views/Register.vue'),
            hidden: true
        },
        {
            path: '/404',
            component: () => import('@/views/error/404'),
            hidden: true
        },
        {path: '*', redirect: '/404', hidden: true}
    ]
})
