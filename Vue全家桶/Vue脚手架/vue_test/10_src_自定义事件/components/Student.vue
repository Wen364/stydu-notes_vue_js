<template>
  <div class="student">
    <h2>学生姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="sendSchoolName">点击获取学生姓名</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>

export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            age:18
        } 
    },
    methods: {
      sendSchoolName(){
        // 触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name,666,555,444)
        // 触发Student组件实例身上的demo事件
        // this.$emit('demo')
      },
      unbind(){
        this.$off('atguigu')  // 只适合解绑一个自定义事件
        // this.$off(['atguigu','demo'])  // 适合解绑多个自定义事件
        // this.$off()  // 如果没有参数，则Student组件上的自定义事件全部解绑
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