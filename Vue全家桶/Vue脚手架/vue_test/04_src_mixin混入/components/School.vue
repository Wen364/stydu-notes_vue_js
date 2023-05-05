<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
import {a} from '../mixin'
export default {
    name:'School',
    data() {
        return {
            name:'冷云',
            address:'佳木斯'
        }
    },
    mixins:[a]
}
</script>

<style>

</style>