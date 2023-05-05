<template>
  <div>
    <h3>人员列表</h3>
    <h3 style="color:red">Count组件求和为：{{sum}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add"> 添加</button>
    <ul>
        <li v-for="p in Persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

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
            this.$store.commit('ADD',PersonObj)
            this.name = ''
        }
    },
    computed: {
        Persons() {
            return this.$store.state.PersonList
        },
        sum() {
            return this.$store.state.sum
        }
        // ...mapState({Persons:'PersonList'})
    },
}
</script>

<style>

</style>