<template>
    <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__bounceInRight"
    leave-active-class="animate__bounceOutRight"    
    >
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @click='handleCheck(todo.id,$event)'/>
                <span v-show="!todo.isShow">{{todo.name}}</span>
                <input 
                type="text"
                :value='todo.name'
                v-show="todo.isShow" 
                @blur="handleBlur(todo,$event)"
                ref="inputTitle"
                >
            </label>
            <button class="btn btn-danger"  @click="handleDelete(todo.id)">删除</button>
            <button v-show="!todo.isShow" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
    </transition>
</template>

<script>
    import 'animate.css'
    export default {
        name:'Item',
        props:['todo'],
        methods: {
            // input框失去焦点
            handleBlur(todo,e){
                todo.isShow = false
                // 校验里面是否为空
                if(e.target.value.trim() == '') return alert('请输入内容')
                this.$bus.$emit('updateTodo',todo.id,e.target.value)
            },
            // 编辑
            handleEdit(todo) {
                // 如果 App组件里有 isShow 这个data属性 哪就变为false 否则用 $set 往里面加入一个
                if(todo.hasOwnProperty('isShow')) {
                    todo.isShow = true
                }else{
                    this.$set(todo,'isShow',true)
                }
                // 利用 nextTick 里的回调函数,可以解决input输入框还没渲染出来就聚焦而产生的没有效果问题
                this.$nextTick(function() {
                    // ref 自己去看
                    this.$refs.inputTitle.focus()
                })
            },
            handleCheck(id,e) {
                this.$bus.$emit('checkTodo',id,e.target.checked)
                // console.log('handleCheck',id,e.target.checked);
            },
            handleDelete(id) {
                if(confirm('确定删除吗？')){
                     this.$bus.$emit('deleteTodo',id)
                    // console.log('handleDelete',id);
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