<template>
  <h1>个人信息展示：</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">技能</button>
</template>

<script>
import {h} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = '李四'
    let age = 18
    function sayHello() {
      alert(`我是${name}，今年${age}岁了`)
    }
    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


