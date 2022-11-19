import {createApp} from 'vue/dist/vue.esm-bundler'
import {createRouter,createWebHistory } from 'vue-router'
import './assets/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import MainPage from './components/MainPage.vue' 
import AdvantagesOfToDo from './components/AdvantagesOfToDo.vue' 
import LoginPage from './components/LoginPage.vue' 
import RegisterPage from './components/RegisterPage.vue'
import LogOutPage from './components/LogOutPage.vue'

const routes = [
    { 
        path: '/app',
        component: App
    },
    { 
        path: '/',
        component: MainPage
    },
    { 
        path: '/advantages',
        component: AdvantagesOfToDo 
    },
    { 
        path: '/login',
        component: LoginPage
    },
    { 
        path: '/register',
        component: RegisterPage
    },
    { 
        path: '/logout',
        component: LogOutPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({})
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')


