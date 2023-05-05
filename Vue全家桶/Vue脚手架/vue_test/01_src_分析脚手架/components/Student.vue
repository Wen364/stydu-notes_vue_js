<template>
          <!-- 组件的结构 -->
     <div>
          <h2>学生名称: {{name}} </h2>
          <h2>学生年龄: {{age}} </h2>
          <button @click="showNumber">点击出现x</button>
     </div>
</template>

<script>
//  组件交互相关的代码（数据、方法等）
     export default {
          // 指定组件在开发者工具中呈现的名字
          name:'Student',
          data() {
               return {
                    name:'小红',
                    age:18,
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

