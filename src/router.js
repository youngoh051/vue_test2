import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    mode: 'hash',
    routes: [
        {
            path: "/",
            name: "App",
            component: () => import('@/App.vue')
        },

    ]

})