<template  >
  <input type="text" v-model="keyWord">
  <h2>{{keyWord}}</h2>
  
</template>

<script> 
import {customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    // 自定义ref   myRef实际上就是我自定义的ref
    let keyWord = myRef('hello',500)

    function myRef(value,delay) {
      return customRef((track,trigger) => {
        let timer = null
        return {
            get(){
              // 跟踪数据
              track()
              console.log(`我被调用了，返回得是${value}`);
              return value
            },
            set(newValue){
              // 防抖  每次修改 value 值得时候，都先清空一下定时器再调用里面内容
              clearTimeout(timer)
              console.log(`我被修改了，修改的是${newValue}`);
              timer = setTimeout(() => {
                // 让原来得值改为 变化后的值
                value = newValue
                // 通知 get ，让他调用一下
                trigger()
                
              }, delay);
            }
        }
      })
    }

    return {
      keyWord
    }
  }

}
</script>


