<template  >
  <h3>{{person}}</h3>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>员工薪水:{{staff.tom.salary}}k</h2>
  <button @click="name+='!'">修改姓名</button>
  <button @click="age++">点击年龄加一</button>
  <button @click="staff.tom.salary++">点击增加薪水</button>
</template>

<script> 
import {reactive, toRef, toRefs} from 'vue'
export default {
  name: 'Demo',
  setup() {

    let person = reactive({
      name:'张三',
      age:18,
      staff:{
          tom:{
            salary:20
          }
      }
    })

    
    return {  
      person,
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.staff.tom,'salary')
      ...toRefs(person)
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


