// 该文件用于创建Vuex中最为核心的store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

// 准备 actions——用于响应组件中的动作
const actions = {
    // jia(context,value) {
    //     // console.log('actions',context,value);
    //     context.commit('JIA',value)
    // },
    // jian(context,value) {
    //     context.commit('JIAN',value)
    // },
    odd(context,value) {
        if(context.state.sum % 2 ) {
            context.commit('ODD',value)
        }
       
    },
    wait(context,value) {
        setTimeout(() => {
            context.commit('WAIT',value)    
        }, 500);
        
    }
}
// 准备 mutations——用于操作数据（state）
const mutations = {
    JIA(state,value) {
        // console.log('mutations',state,value);
        state.sum += value
    },
    JIAN(state,value) {
        state.sum -= value
    },
    ODD(state,value) {
        state.sum += value
    },
    WAIT(state,value) {
        state.sum += value
    },
    ADD(state,value) {
        // console.log(value);
        state.PersonList.unshift(value)
    }
}
// 准备 state—— 用于存储数据
const state = {
    sum:0,
    school:'哈尔滨',
    subject:'计算机',
    PersonList:[
        {id:'001',name:'张三'}
    ]
}
// 准备一个 getters     有点类似与 computed 计算属性
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    // actions:actions,
    actions,
    // mutations:mutations,
    mutations,
    // state:state
    state,
    getters
})