<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个 插槽（挖个坑，等着组件的使用者进行填充 -->
    <slot name="center">我是一些默认值，当使用者没有传递具体数据时，我才会出现</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体数据时，我才会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['title']
}
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        background-color: orange;
        text-align: center;
    }
</style>