<template>
  <h3>{{sum}}</h3>
  <button @click="sum++">点击sum加一</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>员工薪水:{{staff.tom.salary}}k</h2>
  <button @click="name+='!'">修改姓名</button>
  <button @click="age++">点击年龄加一</button>
  <button @click="staff.tom.salary++">点击增加薪水</button>
</template>

<script> 
import {ref,reactive,toRefs, readonly, shallowReadonly,} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name:'张三',
      age:18,
      staff:{
          tom:{
            salary:20
          }
      }
    })
    // 让 person 变成只读的，不能被修改，深层次的内容也不能修改
    // person = readonly(person)

    // 让 person 变成只读的，不能被修改，深层次的内容可以修改
    person = shallowReadonly(person)

    // ref 的这俩效果一样，都是不能修改
    // sum = readonly(sum)
    // sum = shallowReadonly(sum)

    // 返回一个对象
    return {  
      sum,
      ...toRefs(person)
    }
  }
}
</script>