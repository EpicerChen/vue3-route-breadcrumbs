import { createApp } from 'vue'
import App from './App.vue'
import Vue3RouteBreadcrumbs from './Vue3RouteBreadcrumbs.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/a',
        name: '1st',
        component: App
    },
    {
        path: '/a/b',
        name: '2nd',
        component: App
    },
    {
        path: '/a/b/c',
        name: '3rd',
        component: App
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .component("Vue3RouteBreadcrumbs", Vue3RouteBreadcrumbs)
    .use(router)
    .mount('#app')
