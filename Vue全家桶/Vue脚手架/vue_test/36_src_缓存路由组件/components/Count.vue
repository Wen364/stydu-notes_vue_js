<template>
  <div>
    <h3>当前求和为：{{sum}}</h3>
    <h4>当前求和十倍是：{{bigSum}}</h4>
    <h4>我在{{school}},学习{{subject}}</h4>
    <h4 style="color:red">Person组件的总人数是：{{PersonList.length}}</h4>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex' 
export default {
    name:'Count',
    data() {
        return {
            n:1,
        }
    },
    computed: {
        // 借助 mapState 生成计算属性，但只能从 state中读取数据 (对象写法)
        // ...mapState({he:'sum',xx:'school',xk:'subject'}),

        // 借助 mapState 生成计算属性，但只能从 state中读取数据 (对象写法)
        ...mapState('countOptions',['sum','school','subject']),

        // 借助 mapGetters 生成计算属性，但只能从 getters 中读取数据 (对象写法)
        ...mapGetters('countOptions',{bigSum:'bigSum'}),
        // 借助 mapGetters 生成计算属性，但只能从 state中读取数据 (数组写法)
        //  ...mapGetters(['bigSum'])
        ...mapState('personOptions',{PersonList:'PersonList'})
    },
    methods: {

        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法） 
        ...mapMutations('countOptions',{increment:'JIA',decrement:'JIAN'}),

        // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法） 
        // ...mapMutations(['JIA']),

        // *******************************************

        // 借助mapActions生成对应的方法，方法中会调用dispatch去练习Actions（对象写法）
        ...mapActions('countOptions',{incrementOdd:'odd',incrementWait:'wait'}),

        // 借助mapActions生成对应的方法，方法中会调用dispatch去练习Actions（数组写法）
        // ...mapActions(['odd','wait'])

    },

}
</script>

<style>
    
</style>