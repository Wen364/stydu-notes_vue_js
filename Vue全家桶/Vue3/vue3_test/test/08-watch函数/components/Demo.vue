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
import {reactive,computed, ref, watch} from 'vue'
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
    // 监视
    // 情况一：监视ref所定义的一个响应式数据
    // watch(sum,(newValue,oldValue) => {
    //   console.log('sum被监视着',newValue,oldValue);
    // },{immediate:true})

    // 情况二：监视ref所定义的多个响应式数据
    // watch([sum,msg],(newValue,oldValue) => {
    //   console.log('sum被监视着',newValue,oldValue);
    // },{immediate:true})

    /*
        情况三：监视reactive所定义的响应式数据的全部属性
        1.注意：此处无法正确的捕获到 oldValue
        2.注意：强制开启了 深度监视 （deep配置无效）
    */
    // watch(person,(newValue,oldValue) => {
    //   console.log('person改变了',newValue,oldValue);
    // },{deep:false}) // 此处的deep配置无效

    // // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    // watch(()=>person.age,(newValue,oldValue) => {
    //   console.log('person的age改变了',newValue,oldValue);
    // }) // 此处的deep配置无效

    //  // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    // watch([()=>person.age,()=>person.name],(newValue,oldValue) => {
    //   console.log('person的age或name改变了',newValue,oldValue);
    // }) // 此处的deep配置无效

    // 特殊情况
    watch(()=>person.staff,(newValue,oldValue) => {
      console.log('person的staff改变了',newValue,oldValue);
    },{deep:true}) // 因为此处监视的是reactive对象里的某个属性，所以deep有效
    
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


