<template>
  <h2>Test组件</h2>
  <h2>当前鼠标点击的坐标为: x:{{point.x}} y:{{point.y}}</h2>
</template>

<script>
import usePoint from '../hook/usePiont'
export default {
    setup(){
        let point = usePoint()

        return {
            point
        }
    }
}
</script>

<style>

</style>