<template  >
  <div class="son">
    <h2>我是孙组件(孙) -- {{car.name}} -- {{car.price}}</h2>
  </div>
</template>

<script> 
import { inject } from 'vue'

export default {
  name: 'Son',
  setup(){
    // 孙组件使用 inject 来接收传来的数据
    let car =  inject('carInfo')

    console.log(car);
    return {car}
  }

}
</script>

<style>
  .son{
    background-color: orange;
    padding: 10px;
  }
</style>


