<template>
          <!-- 组件的结构 -->
     <div class="demo">
          <h2>学校名称: {{name}} </h2>
          <h2>学校地址: {{address}} </h2>
          <button @click="showNumber">点击出现x</button>
     </div>
</template>

<script>
//  组件交互相关的代码（数据、方法等）
     export default {
          // 指定组件在开发者工具中呈现的名字
          name:'School',
          data() {
               return {
                    name:'冷云',
                    address:'佳木斯',
                    x:9
               }
          },
          methods: {
               showNumber() {
                    alert(this.x)
               }
          },
    }
</script>

<style>
     /* 组件的样式 */
     .demo{
          background-color: orange;
     }
</style>