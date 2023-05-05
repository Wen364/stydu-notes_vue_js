<template  >
  <div class="child">
    <h2>我是Child组件</h2>
  </div>
</template>

<script setup> 
import {ref} from 'vue'

    let sum = ref(0)
    let p = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({sum})
      }, 3000);
    })
    
  


</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>


