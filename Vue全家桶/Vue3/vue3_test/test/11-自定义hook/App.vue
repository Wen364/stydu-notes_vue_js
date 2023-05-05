<template  >
  <button @click="isShow=!isShow">显示/隐藏</button>
  <Demo v-if="isShow"/>
  <hr>
  <Test/>
</template>

<script> 
import {ref} from 'vue'
import Demo from './components/Demo'
import Test from './components/Test.vue'

export default {
  name: 'App',
  components:{Demo,Test},
  setup(){
    let isShow = ref(true)
    return {
      isShow
    }
  }

}
</script>


