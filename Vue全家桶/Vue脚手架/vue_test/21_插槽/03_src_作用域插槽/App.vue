<template>
  <div class="container">
    <Category title='游戏' >
        <template v-slot='demo'>
          <ul>
            <li v-for="(data,index) in demo.games" :key="index">
                      {{data}}
            </li>        
            <h1>{{demo.msg}}</h1>
        </ul>
        </template>
    </Category>    

    <Category title='游戏' >
       <!-- 这里使用结构解赋得方式直接得到games -->
        <template v-slot="{games}">
          <ol>
            <li style="color:red" v-for="(data,index) in games" :key="index">
                      {{data}}
            </li>        
        </ol>
        </template>
    </Category>

    <Category title='游戏' >
      <!-- 这里使用结构解赋得方式直接得到games -->
        <template v-slot='{games}'>
          <h4 v-for="(data,index) in games" :key="index">{{data}}</h4> 
        </template>
    </Category>

    
  </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{Category},
        
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


   