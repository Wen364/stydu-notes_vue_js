<template  >
  <div class="app">
    <h2>我是app组件</h2>
    <Suspense>
      <template v-slot:default>
        <Child></Child>  
      </template>
      <template v-slot:fallback>
        <h2>请稍等几秒，内容加载中....</h2>
      </template>
    </Suspense>
    
  </div>
</template>

<script setup> 
import {defineAsyncComponent, ref} from 'vue'  
// import Child from './components/Child.vue'  // 静态引入
let Child = defineAsyncComponent(() => import('./components/Child.vue'))  // 动态引入

</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>


