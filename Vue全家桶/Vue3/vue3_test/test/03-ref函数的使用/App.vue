<template  >
  <h1>个人信息展示：</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作：{{job.type}}</h2>
  <h2>薪水：{{job.salary}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script> 
import {h, ref} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref('李四')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'20k'
    })

    function changeInfo(){
      name.value = '张三'
      age.value = 20
      console.log(job);
      job.value.type = '后端工程师'
      job.value.salary = '50k'

    }
        // 返回一个对象（常用）
    return {
      name,
      age,
      job,
      changeInfo
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


