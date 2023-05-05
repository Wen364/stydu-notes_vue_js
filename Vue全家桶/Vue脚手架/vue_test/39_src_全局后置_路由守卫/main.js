// 引入 Vue
import Vue from 'vue'
//  引入 App组件
import App from './App.vue'
// 引入 VueRouter 插件
import VueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
// 关闭 Vue 生产提示
Vue.config.productionTip = false


// 应用插件 VueRouter
Vue.use(VueRouter)


// 创建 vm
new Vue({
    el:'#app',
    render: h => h(App),
    router
})