<template>
  <div>
    <Count/>
  </div>
</template>

<script>
    import Count from './components/Count.vue'
    export default {
        name:'App',
        components:{Count},
        // mounted() {
        //   console.log('App',this);
        // },
        
    }
</script>

<style >
  .container, .foot{
    display: flex;
    justify-content: space-around;
    /* text-align: center; */
  }
  video,img{
    width: 100%;
  }
  a {
    margin-left: 20px;
  }
  h4{
    text-align: center;
  }  

</style>


   