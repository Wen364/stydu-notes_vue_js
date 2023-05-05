<template>
  <div>
    <h2 >学校名称：{{name | mySlice}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="show">点击弹出你好</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'冷云111111',
            address:'佳木斯'
        }
    },
    methods: {
      show() {
        this.hello()
      }
    },
}
</script>

<style>

</style>