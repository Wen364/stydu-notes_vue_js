<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第一种写法，使用 @ 或 v-on) -->
    <Student @atguigu="getStudentName"  @demo="m1" />

     <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 (第二种写法，使用ref)-->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'你好啊！！！'
            }
        },
        methods: {
            getSchoolName(name) {
                console.log('getSchoolName被调用了',name);
            },
            getStudentName(name,...params) {
                console.log('getStudentName被调用了',name,params);
            },
            m1() {
                console.log('demo事件被触发了');
            },
            show() {
                alert(123)
            }
        },
        // mounted() {
        //     this.$refs.student.$on('atguigu',this.getStudentName)  // 绑定自定义事件
        //      this.$refs.student.$once('atguigu',this.getStudentName)  // 绑定自定义事件(一次性)
        // },
    }
</script>

<style scoped>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>