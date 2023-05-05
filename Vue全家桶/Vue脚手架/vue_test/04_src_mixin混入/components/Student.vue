<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>
import {a} from '../mixin'
export default {
    name:'Student',
    data() {
        return {
            name:'张三',
            age:18
        }
    },
    mixins:[a]
}
</script>

<style>

</style>