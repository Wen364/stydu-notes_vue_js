<template  >
    <h2>我是app组件</h2>
</template>

<script> 
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, toRefs ,ref} from 'vue'

export default {
  name: 'App',
  setup(){
    let car = reactive({name:'奔驰',price:'40W'})
    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum));
    console.log(isReadonly(car2));
    console.log(isReactive(car));
    console.log(isProxy(car));

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


