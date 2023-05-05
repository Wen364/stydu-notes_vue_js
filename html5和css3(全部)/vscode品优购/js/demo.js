$(function() {
    // .当我们滚动到今日推荐模块 ， 就让电梯导航显示出来
    var flag = true 
// 当点击电梯栏的时候 会让页面滚动，这样同时会触发滚动事件，所以需要设置节流阀，要不然会导致点击后背景颜色依次改变
    toggleTool()
    scroll()
    function toggleTool() {
        if ($(document).scrollTop() >= $('.recom').offset().top) {
            $('.fixedtool').stop().fadeIn()
        } else {
            $('.fixedtool').stop().fadeOut()
        }
    }
    function scroll() {
        if (flag) {
            $('.floor .w').each(function(i,ele) {
                if ($(document).scrollTop() >= $(ele).offset().top ) {
                    $('.fixedtool li').eq(i).addClass('current1').siblings().removeClass()
                }
            })
        }
    }
    $(window).scroll(function() {   
        // 当页面滚动到某个区域内容模块时，左侧电梯导航，相对应的小li模块，也会添加current1类，兄弟移除current1类
        // 直接遍历这个元素，然后进行比较，在对相应索引号的小li进行增加类
        toggleTool()
        scroll()
        // $('.floor .w').each(function(i,ele) {
        //     if ($(document).scrollTop() >= $(ele).offset().top ) {
        //         $('.fixedtool li').eq(i).addClass('current1').siblings().removeClass()
        //     }
        // })
    })
    // 2.点击电梯导航页面可以滚动到相应内容区域
    // 核心算法：因为电梯导航模块和内容区模块一一对应
    // 当我们点击电梯导航某个小模块，就可以拿到当前小模块的索引号
    // 就可以把animate要移动的距离求出来，当前索引号内容区模块他的offset().top
    $('.fixedtool li').click(function() {
        // 当被点击后 得到当前的 index 值
        // 和盒子的索引号对应 然后计算出页面要去的位置的 offset().top
        scroll()
        flag = false
        var current =  $('.floor .w').eq($(this).index()).offset().top
        $('.body,html').stop().animate({
            scrollTop: current
        },function()  {
            flag = true
        })
        // 被点击的类名为 current1
        $(this).addClass('current1').siblings('li').removeClass('current1')
    })
    
})
