<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="HandleCheck(todo.id)"/>
            <span>{{todo.name}}</span>
        </label>
        <button class="btn btn-danger" @click="HandleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
    export default {
        name:'Item',
        // 声明接收 todo 对象
        props:['todo','CheckTodo','DeleteTodo'],
        methods: {
            // 勾选 or 取消勾选
            HandleCheck(id) {
                // 通过全局事件总线 触发这个自定义事件 然后把数据传过去
                this.$bus.$emit('CheckTodo',id)
            },
            // 删除
            HandleDelete(id) {
                if(confirm('确定删除吗？')) {
                    console.log(id);
                   // 通过全局事件总线 触发这个自定义事件 然后把数据传过去
                    this.$bus.$emit('DeleteTodo',id)
                }
            }
        },
        
    }
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }
    li label {
    float: left;
    cursor: pointer;
    }
    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }
    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }
    li:before {
    content: initial;
    }
    li:last-child {
    border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }
    li:hover button {
        display: block;
    }
</style>