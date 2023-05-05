<template>
  <div class="demo">
    <h2 class="qwe">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>

  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name:'冷云',
            address:'佳木斯'
        }
    },
}
</script>

<style lang="less" scoped>
  .demo {
    background-color: skyblue;
    .qwe{
      font-size: 40px;
    }
  }
</style>