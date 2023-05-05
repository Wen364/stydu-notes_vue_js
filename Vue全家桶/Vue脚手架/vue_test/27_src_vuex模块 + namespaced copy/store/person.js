import axios from 'axios'

// 人员管理相关配置
export default  {
    namespaced:true,
    state:{
        PersonList:[
            {id:'001',name:'张三'}
        ],
        content:''
    },
    actions:{
        addFirstName(context,value) {
            if(value.name.indexOf('王') === 0) {
                context.commit('AddFirstName',value)
            }else{
                alert('请输入姓王的人')
            }
        },
        addPersonServer(context) {
            axios.get('http://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('AddPersonServer',response.data)
                },
                error => {
                    console.log(error.message);
                }
            )
        }
    },
    mutations:{
        ADD(state,value) {
            // console.log(value);
            state.PersonList.unshift(value)
        },
        AddFirstName(state,value) {
            state.PersonList.unshift(value)
        },
        AddPersonServer(state,value){
            state.content = value
        }
    },
    getters:{
        firstPersonName(state) {
            return state.PersonList[0].name
        }
    }
}