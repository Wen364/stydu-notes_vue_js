<template>
  <div>
    <Student name="张三"  sex="男" :age="18" />
  </div>
</template>

<script>
// 引入 Student 组件
import Student from './components/Student.vue'
export default {
    name:'App',
    data() {
        return {
            
        }
    },
    // 注册 Student 组件
    components:{ Student }
}
</script>

<style>

</style>