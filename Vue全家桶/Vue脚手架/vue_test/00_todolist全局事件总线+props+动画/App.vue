<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :toDos='toDos' :addTodo='addTodo'/>
      <List :toDos="toDos"/>
      <MyFooter :todo='toDos'/>
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
            toDos:   JSON.parse(localStorage.getItem('toDos')) || []
          }
        },
        watch:{
          toDos: {
            deep:true,
            handler(newValue,oldValue) {
              // 因为取出来是字符串，要给他转换为对象
              localStorage.setItem('toDos',JSON.stringify(newValue))
            }
          }
        },
        methods: {
          // 修改
          updateTodo(id,name) {
            this.toDos.forEach((todo) => {
              if(todo.id === id) {
                todo.name = name 
              }
            })
          },

          // 增加toDos 内容
          addTodo(todoObj) {
            this.toDos.unshift(todoObj)
          },

          // 勾选 or 不勾选
          checkTodo(id,done) {
            this.toDos.forEach((todo) => {
              if(todo.id === id ) {
                todo.done = done 
              }
            })
          },

          // 删除
          deleteTodo(id) {
            this.toDos = this.toDos.filter((todo) => {
              return todo.id !== id
            })
          },

          // 全选 or 全不选 
          checkAllTodo(checked) {
            this.toDos.forEach((todo) => {
              todo.done = checked 
            })
          },

          clearAllTodo() {
            this.toDos = this.toDos.filter((todo) => {
              return !todo.done
            })
          }
        },
        mounted() {
          this.$bus.$on('checkTodo',this.checkTodo)
          this.$bus.$on('deleteTodo',this.deleteTodo)
          this.$bus.$on('checkAllTodo',this.checkAllTodo)
          this.$bus.$on('clearAllTodo',this.clearAllTodo)
          this.$bus.$on('updateTodo',this.updateTodo)
        },
        beforeDestroy() {
          this.$off('checkTodo','deleteTodo','checkAllTodo','clearAllTodo','updateTodo')
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
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid skyblue;
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