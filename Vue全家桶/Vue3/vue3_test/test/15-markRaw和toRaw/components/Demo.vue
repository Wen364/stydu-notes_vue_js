<template>
  <h3>{{sum}}</h3>
  <button @click="sum++">点击sum加一</button>
  <hr>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>员工薪水:{{staff.tom.salary}}k</h2>
  <h2 v-show="person.car">座驾信息：{{person.car}}</h2>
  <button @click="name+='!'">修改姓名</button>
  <button @click="age++">点击年龄加一</button>
  <button @click="staff.tom.salary++">点击增加薪水</button>
  <button @click="addCar">点击增加座驾</button>
  <button @click="person.car.name+='!'">换车名</button>
  <button @click="changeCarPrice">换价格</button>
  <hr>
  <h2>p的age：{{p.age}}</h2>
  <button @click="p.age++">点击p的age+1</button>
</template>

<script> 
import {ref,reactive,toRefs, readonly, shallowReadonly, markRaw, toRaw,} from 'vue'
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
    
    // toRaw 是把 reactive生成的响应式对象转换为普通对象,这样的话对这个普通对象的所以操作，都不会引起页面更新
    const p = toRaw(person)

    function addCar() {
        let car = {name:'奔驰',price:60}
        // 由于vue3 使用的是proxy代理，所以可以监视到对象的增加，这样直接就是响应式
        // person.car = car 
        // 不让它是响应式的 就用 markRaw 
        // markRaw 标记一个对象，让它永远不会成为响应式对象
        person.car = markRaw(car)
    }

    

    function changeCarPrice() {
      person.car.price++
      console.log(person.car.price);
    }

    // 返回一个对象
    return {  
      sum,
      person,
      p,
      ...toRefs(person),
      addCar,
      changeCarPrice
    }
  }
}
</script>