<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo"/>
      <List :todos="todos" :CheckTodo="CheckTodo" :DeleteTodo="DeleteTodo"/>
      <MyFooter :todos="todos" :CheckAllTodo='CheckAllTodo' :ClearAllTodo='ClearAllTodo'/>
    </div>
  </div>
</template>

<script>
    import MyHeader from './components/MyHeader.vue'
    import MyFooter from './components/MyFooter.vue'
    import List from './components/List.vue'
    export default {
        name:'App',
        // 注册组件
        components:{MyHeader,MyFooter,List},
        data() {
            return {
                todos:[
                    {id:'001',name:'吃饭',done:true},
                    {id:'002',name:'睡觉',done:false},
                    {id:'003',name:'打豆豆',done:false},
                ]
            }
        },
        methods: {
            // 创建一个接收函数，去接收 MyHeader组件里面传回来的 todoObj 对象的数据内容

            // 增加 todoObj 对象
            addTodo(todoObj){
                // console.log('我在App组件接收到了数据',todoObj);
                // 逆序添加 新的 todoObj 对象
                this.todos.unshift(todoObj)
            },

            // 勾选 or 取消勾选一个 todo
            CheckTodo(id) {
                this.todos.forEach((todo) => {
                    // 判断 如果当前 todoObj 的 id 是 改变的 id的话 ，就把它的 done值取反
                    if(todo.id === id) {
                    todo.done = !todo.done
                }
                })
            },
            
            DeleteTodo(id) {
                // 过滤出来 不删除的 todos的id
                // console.log('deleteTodo',id);
                // 因为 filter 不改变原来数组 所以需要重新赋值！！！！
                this.todos = this.todos.filter((todo) => {
                    return todo.id !== id
                })
            },

            // 全选 or 全不选
            CheckAllTodo(done) {
                // 遍历 todos 然后让 todos的done值 与 拿来的 done值 一致就可以完成 全选 or 全不选
                this.todos.forEach((todo) => {
                    todo.done = done 
                })
            },

            // 清空 已经完成的
            ClearAllTodo() {
                // 重新过滤一遍，然后 输出 done 值为 false的
                this.todos = this.todos.filter((todo) => {
                    return !todo.done
                })
            }
        },
        
    }
</script>

<style>
    /*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>