           // 轮播图功能需求：
// 1.鼠标经过轮播图模块，左右出现按钮显示，离开则隐藏按钮
// 2.点击按钮，图片会向相反方向移动一张
// 3.图片播放的同时，下面的小圈圈也会跟着一起变化
// 4.点击小圈圈，也可以播放相应图片
// 5.鼠标不经过轮播图，轮播图也会自动播放图片
// window.addEventListener('load',function() {  // 必须需要先执行这个函数，要不下面的直接用打印出来会返回空
//     // 1.获取元素
//     var left = document.getElementById('leftarrowhead')
//     var right = document.getElementById('rightarrowhead')
//     var focus = document.querySelector('.focus')
//     var ul = focus.querySelector('ul')
//     var circle = document.querySelector('.circle')
//      // 得到当前轮播图的宽度  
//     var focusWidth = focus.offsetWidth 

//     // 2.当鼠标放到轮播图，左右按键显示
//     focus.addEventListener('mouseenter',function() {
//         left.style.display = 'block'
//         right.style.display = 'block'
//         // 鼠标放到轮播图上，清空定时器
//         clearInterval(timer)
//         timer = null // 最好写上这个
//     })

//     // 当鼠标离开轮播图，左右按键隐藏  自动播放轮播图
//     focus.addEventListener('mouseleave',function() {
//         left.style.display = 'none'
//         right.style.display = 'none'
//         //  自动播放轮播图
//         timer = setInterval(function() {
//             right.click()  // 手动调用点击事件
//         }, 2000)
//     })

//     // 3.动态生成小圈圈 ul里有几张图片，就生成几个小圆圈
//     for (var i = 0; i < ul.children.length; i++) {
//         // 创建一个小 li
//         var li = document.createElement('li')
//         li.setAttribute('index',i) // 给每个小 li 都增加一个索引号 index 后面点击小圈圈好切换图片
//         // 把 li 插入到 ol 里面
//         circle.appendChild(li)
        
//         // 小圈圈的排他思想
//         li.addEventListener('click',function() {
//             for (var i = 0; i < circle.children.length; i++) {
//                 circle.children[i].className = ''
//             }
//             this.className = 'current'

//             // 4.点击小圈圈实现图片切换功能 移动的是 ul 
//             // 获得当前index值
//             var index = this.getAttribute('index')

//             // 1.让鼠标点击小圈圈之后 让图片和圈圈闪烁位置和当前点击的位置同步
//             num = index 
//             circleFocus = index
//             animate(ul,index * -focusWidth)
//         })
//     }
//     circle.children[0].className = 'current'  // 把第一个小li类名变为current
//     // circle.firstElementChild.setAttribute('class','current')  // 他和上面的等价

//     // 5.克隆第一张图片，放到 ul 的最后面
//     var first = ul.children[0].cloneNode(true)  // 深克隆 把子节点也复制
//     ul.appendChild(first)

//     // 6.点击右侧按钮 图片滚动一张 到最后一张后再跳转回第二张 利用的是无缝衔接原理
//     var num = 0
//     var circleFocus = 0  // 设置 小圈圈的闪烁位置
//     var flag = true  // 节流阀 控制页面速度，防止过快点击按钮让图片一直切换
//     right.addEventListener('click',function() {
//         if (flag) {
//             flag = false // 开启节流阀

//             // 如果走到了最后复制的一张图片，此时，我们的ul 要快速复原 把left 改为 0
//         if (num == ul.children.length - 1) {
//             ul.style.left = '0' 
//             num = 0
//         }
//         num ++ // 每次点击都让 num 自增 1  这样就才可以让它能往下一个页面开始动画
//         animate(ul,num * -focusWidth,function() {
//             flag = true  // 当每次每张图片切换完之后，才可以切换下一张 关闭节流阀
//         })

//         // 7.点击按钮，让小圈圈随着图片变化
//         circleFocus ++  // 每次让小圈圈的位置自加1 
//         if(circleFocus == circle.children.length) {   // 当小圈圈为circle的最大值时，则重新取值
//             circleFocus = 0
//         }

//         circleChange()  // 函数封装的就是下面的小圈圈的排他思想
//         // for (var i = 0; i < circle.children.length; i++) {
//         //     circle.children[i].className = ''
//         // }
//         // circle.children[circleFocus].className = 'current' // 让当前circleFocus的小圈圈闪烁
//         }
        
//     })

//     // 8.点击左侧图片，图片滚动一张
//     left.addEventListener('click',function() {
//         if (flag) {
//             flag = false
//             if (num == 0) {
//                 num = ul.children.length - 1
//                 ul.style.left = -focusWidth * num + 'px'
                
//             }
//             num--  // 就是让图片往前走一张
//             animate(ul,num* -focusWidth,function() {
//                 flag = true
//             })
    
//             // 9.点击按钮，让小圈圈随着图片变化
//             circleFocus--  
//             if (circleFocus < 0) {
//                 circleFocus = circle.children.length - 1 // circleFocus = 3
//             }
//             // 也可以用三元表达式来写，更简洁
//             // circleFocus = circleFocus < 0 ? circle.children.length - 1 : circleFocus
    
//             circleChange()  // 函数封装的就是下面的小圈圈的排他思想
//             // for (var i = 0; i < circle.children.length; i++) {
//             //     circle.children[i].className = ''
//             // }
//             // circle.children[circleFocus].className = 'current'
//         }
//     })

//     //  自动播放轮播图
//     var timer = setInterval(function() {
//         right.click()  // 手动调用点击事件
//     }, 2000)
  
//     // 小圈圈的变色位置
//     function circleChange() {
//         for (var i = 0; i < circle.children.length; i++) {
//             circle.children[i].className = ''
//         }
//         circle.children[circleFocus].className = 'current'
//     }
// })


        