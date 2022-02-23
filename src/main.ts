/*********配置参考地址：https://juejin.cn/post/6951649464637636622#heading-0
 *********2022.2.12 
 *******************修改vite配置文件，配置路由Vue Router、状态管理Vuex
 *******************集成UI框架Element Plus
 *******************集成HTTP工具Axios
 *******************继承CSS预编译器Less
****************************************************************************/

import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
.use(router)
.use(store)
.use(ElementPlus)
.mount('#app')
