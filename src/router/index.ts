import{
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'
import Home from '../views/home.vue'
import Vuex from '../views/vuex.vue'
import About from '../views/about.vue'
import Info from '../views/info.vue'
import Refer from '../views/refer.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/vuex',
        name:'Vuex',
        component:Vuex
    },
    {
        path:'/axios',
        name:'Axios',
        component:()=>import('@/views/axios.vue')  //懒加载组件
    },
    {
        path:'/refer',
        name:'Refer',
        component:Refer
    },
    {
        path:'/info',
        name:'Info',
        component:Info
    },
    {
        path:'/about',
        name:'About',
        component:About
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router