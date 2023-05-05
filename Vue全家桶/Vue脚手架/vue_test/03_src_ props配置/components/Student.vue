<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>学生年龄：{{age+1}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'我是冷云小学的学生'
        }
    },
    // props:['name','age','sex'] // 简单声明接收

    // 接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 接收的同时对数据：进行类型限制 + 默认值的指定 + 必要性的限制
    props:{
        name:{
            type:String,   // name 的类型是 字符串（String）
            require:true  // 名字（name）是必须传的
        },
        age:{
            type:Number,
            default:99  //  如果没填年龄的话，则按照默认值是 99 岁
        },
        sex:{
            type:String,
            require:true
        }
    }
}
</script>

<style>

</style>