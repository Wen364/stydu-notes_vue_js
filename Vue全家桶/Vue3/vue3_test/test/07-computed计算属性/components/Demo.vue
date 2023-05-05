<template  >
  <h1>个人信息展示：</h1>
  姓: <input type="text" v-model="person.firstName"> <br>
  名: <input type="text" v-model="person.lastName"> <br>
  姓名：<span>{{person.fullName}}</span> <br>
  姓名: <input type="text" v-model="person.fullName"/>
  
</template>

<script> 
import {reactive,computed} from 'vue'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      firstName:'张',
      lastName:'三',
      })              
    // 没有考虑 计算属性会被修改得情况下
    // person.fullName = computed(() => {
    //   return person.firstName + '-' + person.lastName
    // })
    // 当计算属性被修改时 
    person.fullName = computed({
      set(value){
        // 把传过来得内容转换为数组
        const arr = value.split('-')
        person.firstName = arr[0]  
        person.lastName  = arr[1] 
      },
      get(){
        return person.firstName + '-' + person.lastName
      }
    })
    return {  
      person,
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


