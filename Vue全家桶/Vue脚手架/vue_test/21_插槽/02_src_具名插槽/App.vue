<template>
  <div class="container">
    <Category title='美食' >
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" class="foot" href="javascript:;">更多美食</a>
    </Category>

    <Category title='游戏' >
        <ul slot="center" >
            <li v-for="(data,index) in games" :key="index">
                      {{data}}
            </li>        
        </ul>
        <div class="foot" slot="footer">
            <a slot="footer" href="javascript:;">单击游戏</a>
            <a slot="footer" href="javascript:;">网络游戏</a>
        </div>
        
    </Category>

    <Category title='电影' >
        <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        <!-- 使用 template 标签后，渲染过后的页面不会出现这个元素，可以节省一层标签， -->
        <template v-slot:footer>
            <div class="foot" >
            <a  href="javascript:;">经典</a>
            <a  href="javascript:;">热门</a>
            <a  href="javascript:;">推荐</a>
          </div>
          <h4>欢迎前来观看</h4>
        </template>
    </Category>
  </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{Category},
        data() {
          return {
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            films:['《教父》','《拆弹专家》','《你好，李焕英》','《哈哈嗨》']
          }
        },
        
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


   