<template>
  <div class="todo-footer" v-show="total">
        <label>
          <input type="checkbox" :checked="isAll" @change="CheckAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="ClearAll">清除已完成任务</button>
      </div>
</template>

<script>
    export default {
        name:'MyFooter',
        props:['todos'],
        // 利用 计算属性 来计算 已完成的个数
        computed: {

          // 全部任务
          total() {
            return this.todos.length
          },

          // 已经完成的任务
          doneTotal() {
            // const x = this.todos.reduce((pre,current) => {
            //   console.log(pre,current);
            //   return  pre + (current.done ? 1 : 0)
            // },0)
            // return x
            // 简写方法
            return this.todos.reduce((pre,current) => pre + (current.done ? 1 : 0),0)
          },

          // checkbox 的 判断
          isAll() {
            return this.doneTotal === this.total && this.total > 0
          }
        },
        methods: {

          // 通知 App组件 将 done 值 传上去
          CheckAll(e) {
            this.$emit('CheckAllTodo',e.target.checked)
          },

          // 清空所有已经完成的
          ClearAll() {
            // 使用 ClearAllTodo 方法可以清空已经完成的
            if(confirm('是否清除已经完成的？')){
              this.$emit('ClearAllTodo')
            }
            
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