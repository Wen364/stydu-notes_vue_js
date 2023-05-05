// 引入 Vue
import Vue from 'vue'
//  引入 App组件
import App from './App.vue'
// 引入
import vueResource from 'vue-resource'

// 引入 store
import store from './store/index'
// 关闭 Vue 生产提示
Vue.config.productionTip = false

// 使用插件
Vue.use(vueResource)


// 创建 vm
new Vue({
    el:'#app',
    // store:store,
    store,
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this  // 定义全局事件总线
    },
})