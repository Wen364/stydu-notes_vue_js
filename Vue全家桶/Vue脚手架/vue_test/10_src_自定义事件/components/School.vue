<template>
  <div class="school">
    <h2 >学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">点击获取学校姓名</button>
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
    props:['getSchoolName'],
    methods:{
      sendSchoolName() {
        // 获取学校姓名，然后传给父组件 App
        this.getSchoolName(this.name)
      }
    }
}
</script>

<style lang="less" scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>