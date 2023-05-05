// 引入 VUe
import Vue from 'vue'
//  引入 App组件
import App from './App.vue'
// 关闭 Vue生产提示
Vue.config.productionTip = false
// 引入 a
import {a} from './mixin'
// 全局使用 a
Vue.mixin(a)

new Vue({
    el:'#app',
    render: h => h(App)
})