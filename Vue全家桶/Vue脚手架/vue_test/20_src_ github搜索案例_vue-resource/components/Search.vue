<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>
        &nbsp;<button @click="searchName">Search</button>
      </div>
    </section>
</template>

<script>
    // import axios from 'axios'
    export default {
        name:'Search',
        data() {
            return {
                keyWord:''
            }
        },
        methods: {
            searchName() {
                this.$bus.$emit('getData',{isFirst: false,isLoading:true,userList:[]})
                // 就是把 axios 换成了 this.$http
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(response => {
                    // console.log('请求成功',response.data.items);
                    this.$bus.$emit('getData',{isLoading:false,userList:response.data.items})
                },error => {
                    console.log('请求失败',error.message);
                    this.$bus.$emit('getData',{ErrorMsg:error.message})
                })
            }
        },
    }
</script>

<style>

</style>