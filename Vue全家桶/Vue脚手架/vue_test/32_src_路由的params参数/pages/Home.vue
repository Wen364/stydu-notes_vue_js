<template>
  <div>
    <h2>我是Home的内容</h2>
    <div>
        <ul class="nav nav-tabs">
          <li>
            <!-- 注意：这是二级路由，需要先找一级路由，然后再去找二级路由 -->
            <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <div>
          <router-view></router-view>
        </div>
      </div>
  </div>
  
  
</template>

<script>
    import Message from './Message.vue'
    import News from './News.vue'
    export default {
        name:'Home',
        components:{Message,News} 
    }
</script>

<style>

</style>