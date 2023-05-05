<template>
  <div>
    <h3>当前求和为：{{sum}}</h3>
    <h4>当前求和十倍是：{{bigSum}}</h4>
    <h4>我在{{school}},学习{{subject}}</h4>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex' 
export default {
    name:'Count',
    data() {
        return {
            n:1,
        }
    },
    computed: {
        // 自己写的
        // sum() {
        //     return this.$store.state.sum
        // },
        // school() {
        //     return this.$store.state.school
        // },
        // subject() {
        //     return this.$store.state.subject
        // },

        // 借助 mapState 生成计算属性，但只能从 state中读取数据 (对象写法)
        // ...mapState({he:'sum',xx:'school',xk:'subject'}),

        // 借助 mapState 生成计算属性，但只能从 state中读取数据 (对象写法)
        ...mapState(['sum','school','subject']),

        // bigSum() {
        //     return this.$store.getters.bigSum
        // }
         // 借助 mapGetters 生成计算属性，但只能从 getters 中读取数据 (对象写法)
        ...mapGetters({bigSum:'bigSum'}),
         // 借助 mapGetters 生成计算属性，但只能从 state中读取数据 (数组写法)
        //  ...mapGetters(['bigSum'])
    },
    methods: {
        increment() {
            this.$store.commit('JIA',this.n)
        },

        decrement() {
            this.$store.commit('JIAN',this.n)
        },

        incrementOdd() {
            this.$store.dispatch('odd',this.n)
        },

        incrementWait() {
            this.$store.dispatch('wait',this.n)
        }
    },
    // mounted() {
    //     const x = mapState({he:'sum',xx:'school',xk:'subject'})
    //     console.log(x);
    // },
}
</script>

<style>
    
</style>