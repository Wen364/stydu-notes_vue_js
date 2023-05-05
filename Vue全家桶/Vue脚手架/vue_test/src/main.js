// 引入 Vue
import Vue from 'vue'
//  引入 App组件
import App from './App.vue'
// 引入 ElementUI 组件库
// import ElementUI from 'element-ui';

import { Button, DatePicker,Row } from 'element-ui';
// 引入 ElementUI 全部样式
import 'element-ui/lib/theme-chalk/index.css';
// 关闭 Vue 生产提示
Vue.config.productionTip = false

// 应用 ElementUI
// Vue.use(ElementUI);


Vue.component('wen-button', Button);
Vue.component('wen-date-picker', DatePicker);
Vue.component('wen-row', Row);



// 创建 vm
new Vue({
    el:'#app',
    render: h => h(App),
})