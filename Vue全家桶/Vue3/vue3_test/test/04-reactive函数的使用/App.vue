<template  >
  <h1>个人信息展示：</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工作：{{person.job.type}}</h2>
  <h2>薪水：{{person.job.salary}}</h2>
  <h2>测试c：{{person.job.a.b.c}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script> 
import {h, reactive, ref} from 'vue'
export default {
  name: 'App',
  setup() {
    let person = reactive({
      name:'李四',
      age:18,
      job:{
          type:'前端工程师',
          salary:'20k',
          a:{
            b:{
              c:666
            }
          }
        },
      hobby:['抽烟','喝酒','烫头']
      })

    function changeInfo(){
      person.name = '张三'
      person.age = 20
      // console.log(job);
      person.job.type = '后端工程师'
      person.job.salary = '50k'
      person.job.a.b.c = 998
      person.hobby[0] = '学习'
    }
        // 返回一个对象（常用）
    return {
      person,
      changeInfo
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','哈哈')
  }
}
</script>


