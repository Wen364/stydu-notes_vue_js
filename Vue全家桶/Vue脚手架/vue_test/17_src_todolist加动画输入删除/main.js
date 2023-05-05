// 引入 Vue
import Vue from 'vue'
//  引入 App组件
import App from './App.vue'
// 关闭 Vue 生产提示
Vue.config.productionTip = false

// 创建 vm
new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this  // 定义全局事件总线
    }
})