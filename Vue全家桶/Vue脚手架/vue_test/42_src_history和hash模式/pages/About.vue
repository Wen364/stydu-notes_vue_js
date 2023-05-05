<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        //  通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
          console.log('beforeRouteEnter');
          console.log(to,from);
          if(to.meta.isAuth){  // 判断是否需要 鉴别权限
              if(localStorage.getItem('user') === 'wen') {
                  // alert(1) // 查看走没走权限，因为权限存到了浏览器的缓存里
                  next()
              }else{
                  alert('没有权限查看')
              }
          }else{
              next()
          }
        },

        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave (to,from,next) {
          console.log('beforeRouteLeave');
          next()
        }
    }
</script>

<style>

</style>