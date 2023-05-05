import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function() {
    // 数据 
    let point = reactive({
      x:0,
      y:0
    })
    // 方法
    function savePoint(e) {
      point.x = e.pageX
      point.y = e.pageY
      console.log(e);
    }

    onMounted(() => {
        window.addEventListener('click',savePoint)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('click',savePoint)
    })
    
    // 把需要的内容返回出去，让别人调用时候可以得到
    return point 
}