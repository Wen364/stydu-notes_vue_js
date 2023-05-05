<template  >
  <div class="app">
    <h2>我是app组件(祖)--- {{name}}-{{price}}</h2>
    <Child></Child>
  </div>
</template>

<script> 
import { provide, reactive, toRefs } from 'vue'
import Child from './components/Child.vue'
export default {
  name: 'App',
  components:{Child},
  setup(){
    let car = reactive({name:'奔驰',price:'50W'})
    // 把car 放到 carInfo 里面去，给 孙组件使用
    provide('carInfo',car)

    return {...toRefs(car)}
  }

}
</script>

<style>
  .app{
    background-color: gray;
    padding: 10px;
  }
</style>


