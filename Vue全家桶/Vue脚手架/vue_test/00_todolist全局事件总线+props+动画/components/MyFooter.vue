<template>
  <div class="todo-footer" >
        <label>
          <input type="checkbox" @click="checkAll" :checked='isAll'/>
        </label>
        <span>
          <span>已完成{{alreadyTodo}}</span> / 全部{{totalTodo}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todo'],
        computed:{
          totalTodo() {
            return this.todo.length
          },
          alreadyTodo() {
            // 建议去看看 reduce 方法
            return this.todo.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
          },
          isAll() {
            if(this.alreadyTodo / this.totalTodo === 1) return true 
          }
        },
        methods: {
          // 全选 or 全不选
          checkAll(e) {
            this.$bus.$emit('checkAllTodo',e.target.checked)
          },

          // 清除已完成
          clearAll() {
            this.$bus.$emit('clearAllTodo')
          }
        },
       
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>