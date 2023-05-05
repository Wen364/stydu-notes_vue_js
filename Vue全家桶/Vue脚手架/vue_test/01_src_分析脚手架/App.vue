<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <MySchool></MySchool>
    <MyStudent></MyStudent>
  </div>
</template>

<script>
    // 引入组件
    import MySchool from './components/School.vue'
    import MyStudent from './components/Student.vue'

    export default {
        name:'App',
        // 注册组件
        components:{
            MySchool,
            MyStudent
        }
    }
</script>

<style>

</style>