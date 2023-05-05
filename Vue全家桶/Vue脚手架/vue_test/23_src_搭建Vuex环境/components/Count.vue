<template>
  <div>
    <h3>当前求和为：{{sum}}</h3>
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
            sum:0,
            n:1,

        }
    },
    methods: {
        increment() {
            this.sum +=  this.n
        },

        decrement() {
            this.sum -=  this.n
        },

        incrementOdd() {
            if(this.sum % 2 !== 0) {
                this.sum +=  this.n
            }
        },

        incrementWait() {
            setTimeout(() => {
                this.sum +=  this.n
            }, 500);
        }
    },
    // mounted() {
    //     console.log('Count',this);
    // },
}
</script>

<style>
    
</style>