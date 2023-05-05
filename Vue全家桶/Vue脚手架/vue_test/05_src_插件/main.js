// 引入 Vue
import Vue from 'vue'
//  引入 App组件
import App from './App.vue'
// 引入 插件 plugins
import plugins from './plugins'
// 关闭 Vue 生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(plugins)
// 创建 vm
new Vue({
    el:'#app',
    render: h => h(App)
})