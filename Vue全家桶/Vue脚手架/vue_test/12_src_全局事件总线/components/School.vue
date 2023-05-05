<template>
  <div class="school">
    <h2 >学校名称：{{name}}</h2>
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
    methods: {
      getData(data) {
        console.log('我是School组件，我收到了数据：',data);
      }
    },
    // 当 挂载完毕后 在 vm 上声明一个 hello 自定义事件 然后回调是 getData 函数
    mounted() {
      this.$bus.$on('hello',this.getData)
    },
    // 当 School 组件被 销毁前 就解绑 hello 自定义事件
    beforeDestroy() {
      this.$bus.off('hello')
    },
}
</script>

<style lang="less" scoped>
  .school {
    background-color: skyblue;
    padding: 5px;
  }
</style>