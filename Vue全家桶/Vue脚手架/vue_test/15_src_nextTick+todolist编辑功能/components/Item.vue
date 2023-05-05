<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="HandleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.name}}</span>
            <input type="text" 
            v-show="todo.isEdit" 
            :value="todo.name"
            @blur="HandelBlur(todo,$event)"
            ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="HandleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="HandleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
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
                    // console.log(id);
                   // 通过全局事件总线 触发这个自定义事件 然后把数据传过去
                    // this.$bus.$emit('DeleteTodo',id)
                    // 发布消息
                    pubsub.publish('DeleteTodo',id)
                }
            },
            // 点击编辑 能够 输入框和 文字之间切换
            HandleEdit(todo) {
                // 来判断 todo 是否由 isEdit 属性 如果有，则为true 如果没有 则加入一个
                if(todo.hasOwnProperty('isEdit')) {
                    todo.isEdit = true
                }else {
                    this.$set(todo,'isEdit',true)
                }
                this.$nextTick(function() {
                    this.$refs.inputTitle.focus()
                })
            },
            // 失去焦点回调，（真正执行修改程序）
            HandelBlur(todo,e) {
                todo.isEdit = false
                // 校验内容是否为空
                if(!e.target.value.trim()) return  alert('内容不能为空') 
                // 触发 自定义事件，并上传数据
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
                // console.log(todo.id,e.target.value);
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