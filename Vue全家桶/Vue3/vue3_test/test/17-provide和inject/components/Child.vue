<template  >
  <div class="child">
    <h2>我是父组件(父)</h2>
    <Son></Son>
  </div>
</template>

<script> 
import Son from './Son.vue'
export default {
  name: 'Child',
  components:{Son},
  setup(){
    
  }

}
</script>

<style>
  .child{
    background-color: skyblue;
    padding: 10px;
  }
</style>


