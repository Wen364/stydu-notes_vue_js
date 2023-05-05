// 该文件用于创建Vuex中最为核心的store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 准备 actions——用于响应组件中的动作
const actions = {}
// 准备 mutations——用于操作数据（state）
const mutations = {}
// 准备 state—— 用于存储数据
const state = {}

export default new Vuex.Store({
    // actions:actions,
    actions,
    // mutations:mutations,
    mutations,
    // state:state
    state
})