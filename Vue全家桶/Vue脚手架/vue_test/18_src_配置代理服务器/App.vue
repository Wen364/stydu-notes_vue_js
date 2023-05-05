<template>
  <div>
    <button @click="getStudent">点击获取学生数据</button>
     <button @click="getCar">点击获取汽车数据</button>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods: {
          getStudent() {
            axios.get('http://localhost:8080/wen/students').then( response => {
              console.log('请求成功了',response.data);
            },error => {
              console.log('请求失败了',error.message);
            })
          },

          getCar() {
            axios.get('http://localhost:8080/demo/cars').then(response => {
              console.log('请求成功了',response.data);
            },error => {
              console.log('请求失败了',error.message);
            })
          }
        },
        
    }
</script>


   