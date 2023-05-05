function animate(obj,distance,callback) {
    clearInterval(obj.timer)
    // 缓慢函数原理：
    // 1.让盒子每次移动的距离慢慢变小，速度就会慢慢降下来
    // 2.核心算法：（目标值 - 当前位置） / 10 作为每次移动的距离 step
    // 3.停止的条件是：让当前盒子位置等于目标位置就清除计时器
    obj.timer = setInterval(function() {   
        var step = (distance - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
    // 如果为负值它往回走走不到500的位置，所以需要判断步长的正负，然后再看向上取整还是向下取整
    // 向上取整才能最后走到500，否则因为是除法，他会让最后没跑到800就自己停止了

    // 这个每次移动距离需要放到定时器里面，因为需要每次定时器之后都会重新获取一个obj.offsetLeft的值 
        if (obj.offsetLeft == distance) { // 当值相等，就停止定时器
            clearInterval(obj.timer)  
            // 回调函数要写到定时器结束里面
            if(callback) {  // 判断是否有回调函数 这样就会当盒子运动完再执行回调函数
            callback()
            }
            // callback && callback()  他和上面那个判断是否有 callback 是等价的，这是更高级的写法
        } else {
            obj.style.left = obj.offsetLeft + step + 'px'
            // 是沿着当前位置向前走，所以需要obj.offsetLeft
        }
        
    },15)
}