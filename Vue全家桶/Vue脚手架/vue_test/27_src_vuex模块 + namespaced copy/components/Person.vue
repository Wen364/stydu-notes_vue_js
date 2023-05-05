<template>
  <div>
    <h3>人员列表</h3>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{personFirst}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add"> 添加</button>
    <button @click="addFirst">添加一个姓王的人</button>
    <button @click="addServer">点击添加语录</button>
    <h3>语录：{{content}}</h3>
    <ul>
        <li v-for="p in Persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    methods: {
        add() {
            const PersonObj = {id:nanoid(),name:this.name}
            this.$store.commit('personOptions/ADD',PersonObj)
            this.name = ''
        },
        addFirst() {
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('personOptions/addFirstName',personObj)
            this.name = ''
        },
        addServer() {
            this.$store.dispatch('personOptions/addPersonServer')
        }
    },
    computed: {
        // ...mapState('countOptions',{sum:'sum'}),
        // ...mapState('personOptions',{Persons:'PersonList'})
        Persons() {
            return this.$store.state.personOptions.PersonList
        },
        sum() {
            return this.$store.state.countOptions.sum
        },
        // ...mapState({Persons:'PersonList'})
        personFirst() {
            return this.$store.getters['personOptions/firstPersonName']
        },
        content() {
            return this.$store.state.personOptions.content
        }
    },
    mounted() {
        console.log(this.$store);
    },
}
</script>

<style>

</style>