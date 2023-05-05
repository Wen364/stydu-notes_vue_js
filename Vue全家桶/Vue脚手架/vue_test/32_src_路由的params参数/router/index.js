// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


// 创建并暴露路由器
export default  new VueRouter({
    routes:[
        // 一级路由
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                // 嵌套在里面的路由 不需要 加 /  里面的也叫二级路由
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xijie',
                            path:'detail/:id/:title',
                            component:Detail     
                        }
                    ]
                },
                {
                    path:'news',
                    component:News
                }
            ]
        },
        
        
    ]
})