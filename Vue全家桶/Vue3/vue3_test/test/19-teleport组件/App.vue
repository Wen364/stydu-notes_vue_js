<template  >
  <div class="app">
    <h2>我是app组件</h2>
    <Child></Child>
  </div>
</template>

<script> 
import Child from './components/Child.vue'
export default {
  name: 'App',
  components:{Child},
  

}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>


