// 该文件用于创建Vuex中最为核心的store

// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'

import countOptions from './count'

import personOptions from './person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})