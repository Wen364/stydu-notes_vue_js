<template>
    <div>
        <h2 v-text="msg" ref="title"></h2>
        <button @click="showDom" ref="btn">点击输出上方DOM元素</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
import School from './components/School.vue'
export default {
    name:'App', 
    data() {
        return {
            msg:'欢迎来到佳木斯'
        }
    },
    components: { School },
    methods: {
        showDom() {
            console.log(this.$refs.btn); // 真实 DOM 元素
            console.log(this.$refs.title); // 真实 DOM 元素
            console.log(this.$refs.sch); // 获取School组件的实例对象（vc）
        }
    },

}
</script>

<style>

</style>