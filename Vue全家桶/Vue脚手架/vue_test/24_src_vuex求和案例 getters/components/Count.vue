<template>
  <div>
    <h3>当前求和为：{{$store.state.sum}}</h3>
    <h4>当前求和十倍是：{{$store.getters.bigSum}}</h4>
    <h4>我在{{$store.state.school}},学习{{$store.state.subject}}</h4>
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
export default {
    name:'Count',
    data() {
        return {
            n:1,
        }
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
    //     console.log('Count',this);
    // },
}
</script>

<style>
    
</style>