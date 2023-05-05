export default {
    install(Vue) {
        // 定义全局过滤器
        Vue.filter('mySlice',function(value) {
            return value.slice(0,4)
        }),
        // 定义全局指令
        Vue.directive('fbind',{
                    // 指令与元素成功绑定时（一上来）
                    bind(element,binding) {
                        element.value = binding.value
                    },
                    // 指令所在的元素被插入到页面中 时
                    inserted(element,binding) {
                        // 当前 input 标签 聚焦的js方法
                        element.focus()
                    },
                    // 指令所在的元素被重新解析时
                    update(element,binding) {
                        element.value = binding.value
                        // element.focus()
                    }
                }),
        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x:111
                }
            },
        }),
        // 给 Vue 原型上添加一个方法 (vm和vc都能用)
        Vue.prototype.hello = () => {alert('你好')};
    }
    
    
}