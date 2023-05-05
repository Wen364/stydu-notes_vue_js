<template>
  <h3>{{x.y}}</h3>
  <button @click="x.y++">点击x加一</button>
  <hr>
  <h3>{{person}}</h3>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>员工薪水:{{staff.tom.salary}}k</h2>
  <button @click="name+='!'">修改姓名</button>
  <button @click="age++">点击年龄加一</button>
  <button @click="staff.tom.salary++">点击增加薪水</button>
</template>

<script> 
import {ref,reactive, toRef, toRefs,shallowReactive,shallowRef} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // let person = shallowReactive({  // 只考虑第一层的响应式
    let person = reactive({
      name:'张三',
      age:18,
      staff:{
          tom:{
            salary:20
          }
      }
    })

    // 只有当 shallowRef 是一个对象时，才不会让他有响应式， 如果时基本数据类型，ref和shallowRef都一样，会有响应式
    let x = shallowRef({
    // let x = ref({
      y:0
    })
    
    return {  
      person,
      x,
      ...toRefs(person)
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


