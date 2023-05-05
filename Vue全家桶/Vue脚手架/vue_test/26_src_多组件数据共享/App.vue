<template>
  <div>
    <Count/>
    <hr>
    <Person/>
  </div>
</template>

<script>
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
    export default {
        name:'App',
        components:{Count,Person},
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

</style>


   