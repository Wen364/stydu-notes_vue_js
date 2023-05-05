<template>
  <div >
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
    import Test from './components/Test'
    import Test2 from './components/Test2.vue'
    import Test3 from './components/Test3.vue'
    export default {
        name:'App',
        // 注册组件
        components:{Test,Test2,Test3}
       
       
    }
</script>

<style>

</style>