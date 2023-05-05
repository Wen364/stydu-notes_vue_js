// 求和相关配置
export default  {
    // 开启 命名空间，这样 使用 mapState 一类的映射时，都可以前面带上 配置名，后面写上配置内容
    namespaced:true,
    state:{
        sum:0,
        school:'哈尔滨',
        subject:'计算机',
    },
    actions:{
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
    },
    mutations:{
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
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    }
}