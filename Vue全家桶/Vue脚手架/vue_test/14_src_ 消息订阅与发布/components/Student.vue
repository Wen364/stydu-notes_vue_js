<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="sendStudentName">将学生姓名传给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            age:18
        } 
    },
    methods: {
      // 当点击按钮后 触发该方法，然后触发 School 定义的 hello 事件，并将 学生的名字传过去
      sendStudentName(){
        // 发消息
        pubsub.publish('hello',666)
      }
    },
    
}
</script>

<style scoped>
  .student{
    background-color: orange;
    margin: 5px;
  }
</style>