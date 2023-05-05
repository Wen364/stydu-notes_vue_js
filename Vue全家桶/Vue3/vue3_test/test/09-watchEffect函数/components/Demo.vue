<template  >
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <h2>{{msg}}</h2>
  <button @click="msg+='!'">点我msg加入！</button>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>员工薪水:{{person.staff.tom.salary}}k</h2>
  <button @click="person.name+='!'">修改姓名</button>
  <button @click="person.age++">点击年龄加一</button>
  <button @click="person.staff.tom.salary++">点击增加薪水</button>
</template>

<script> 
import {reactive,computed, ref, watch, watchEffect} from 'vue'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let msg = ref('你好')
    let person = reactive({
      name:'张三',
      age:18,
      staff:{
          tom:{
            salary:20
          }
      }
    })

    // watchEffect没有参数，但是 watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
    watchEffect(()=> {
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
    })

    return {  
      sum,
      msg,
      person
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


