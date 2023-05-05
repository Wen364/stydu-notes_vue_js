<template  >
  <div class="son">
    <h2>我是Son组件</h2>
    <button @click="isShow=true">点击开启弹窗</button>
    <teleport to='body'>
      <div class="mask" v-if="isShow">
        <div class="dialog">
          <h2>我是一个弹窗</h2>
          <h3>一些内容</h3>
          <h3>一些内容</h3>
          <h3>一些内容</h3>
          <h3>一些内容</h3>
          <button @click="isShow=false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script> 
import { ref } from 'vue'

export default {
  name: 'Son',
  setup(){
    let isShow = ref(false)
    return {isShow}
  }

}
</script>

<style>
  .son{
    background-color: orange;
    padding: 10px;
  }
  .mask{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
  }
  .dialog{
    position: absolute;
    height: 400px;
    width: 300px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: skyblue;
  }
</style>


