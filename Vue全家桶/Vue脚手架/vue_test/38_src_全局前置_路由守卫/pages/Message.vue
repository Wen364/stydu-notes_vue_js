<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数， to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带params参数， to的对象写法 -->
                <router-link :to="{
                    // 因为给 路由 命名了 所以可以直接通过名字去到该路由，不需要写那么多路径了
                    name:'xiangqing',
                    // 注意： 因为 是 params 参数，所以配置项只能是 name 不能是 path ！！！！！
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }"  >
                    {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
    

</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'}
            ]
        }
    },
    methods: {
        pushShow(m) {
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        },
        replaceShow(m) {
            this.$router.replace({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        }
    },
    beforeDestroy() {
        console.log('Message被销毁了');
    },
}
</script>

<style>

</style>