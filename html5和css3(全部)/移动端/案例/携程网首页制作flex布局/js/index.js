window.addEventListener('load',function() {
    // 1.获取元素
    var focus = document.querySelector('.focus')
    var ul = focus.children[0]
    var ol = focus.children[1]
    // console.log(ul);
    // 获得focus的宽度
    var w = focus.offsetWidth
    // 2.利用定时器自动轮播图
    var index = 0
    var timer = setInterval(function() {
        index++
        var translatex =  -index * w
        ul.style.transform = 'translateX('+translatex+'px)'
        ul.style.transition = 'all .5s'
    }, 2000)
    // 等过渡完成之后,再去判断,监听过渡完成的事件 transitionend
    ul.addEventListener('transitionend',function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0
            ul.style.transition = 'none'
            var translatex =  -index * w
            ul.style.transform = 'translateX('+translatex+'px)'
        }
        else if (index < 0) {
            index = 2
            ul.style.transition = 'none'
            var translatex =  -index * w
            ul.style.transform = 'translateX('+translatex+'px)'
        }
        // 3.小圆点跟随变化效果
        // 把哦了里面带有current类名的选出来去掉类名 remove
        ol.querySelector('li.current').classList.remove('current') // 删除current类
        // 让当前索引号的 小li 加上 current 类  add
        ol.children[index].classList.add('current') // ol 里面的第 index 个孩子 加上 current 类
    })

    // 4.手指滑动轮播图
    // 触摸元素 touchstart 获取元素初始坐标
    var startX = 0
    var moveX = 0
    var flag = false  // 如果只是触碰不移动，那么就不做判断效果
    ul.addEventListener('touchstart',function(e) {
        startX = e.targetTouches[0].pageX
        // 手指触摸的时候清除定时器
        clearInterval(timer)
    })
    // 移动手指 touchmove 计算手指滑动距离 并且移动盒子
    ul.addEventListener('touchmove',function(e) {
        moveX = e.targetTouches[0].pageX - startX
        var translatex = -index * w + moveX
        // 手指拨动的时候不需要过渡效果
        ul.style.transition = 'none'
        ul.style.transform = 'translateX('+translatex+'px)'
        flag = true  
        e.preventDefault // 阻止滚动屏幕行为
    })
    ul.addEventListener('touchend',function(e) {
        if (flag) {
                // 如果移动距离大于100像素 就播放上一张或者下一张
            if(Math.abs(moveX) > 100) {
                // 如果右滑 则播放上一张 moveX是正值
                if (moveX > 0) {
                    index--
                }else {  // 如果左滑 则播放上一张 moveX是负值
                    index++
                }
                var translatex = -index * w
                ul.style.transition = 'all .5s'
                ul.style.transform = 'translateX('+translatex+'px)'
            }else {  // 当小于 100像素 则自己弹回去
                var translatex = -index * w
                ul.style.transition = 'all .5s'
                ul.style.transform = 'translateX('+translatex+'px)'
            }
        }
        // 手指离开就重新开始定时器
        clearInterval(timer)
        timer = setInterval(function() {
            index++
            var translatex =  -index * w
            ul.style.transform = 'translateX('+translatex+'px)'
            ul.style.transition = 'all .5s'
        }, 2000)
    })
    // 返回顶部模块
    var goBack = document.querySelector('.goBack')
    var nav = document.querySelector('nav')
    var navOffsetTop = nav.offsetTop
    window.addEventListener('scroll',function() {
        if (window.pageYOffset > navOffsetTop) {
            goBack.style.display = 'block'
        } else {
            goBack.style.display = 'none'
        }
    })
    goBack.addEventListener('click',function() {
        window.scroll(0,0)
    })
})