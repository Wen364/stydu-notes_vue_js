
window.addEventListener('load', function () {
   
    // 面向对象tab栏切换 

    // 1.有切换，增加，修改，删除功能
    var that = null
    class Tab {
        constructor(id) {
            // 获取元素
            that = this
            this.main = document.querySelector(id)
            this.lis = this.main.querySelectorAll('li')
            this.sections = this.main.querySelectorAll('section')
            this.add = this.main.querySelector('.add')
            this.ul = this.main.querySelector('.top ul:first-child')
            this.content = this.main.querySelector('.content')
            // this.init()
        }
        // 获取所有的 小 li 和 section 和 关闭按钮
        UpdateNode () {
            this.lis = this.main.querySelectorAll('li')
            this.sections = this.main.querySelectorAll('section')
            this.close = this.main.querySelectorAll('.close')
            this.spans = this.main.querySelectorAll('.top li span:first-child')
        }
        init() {
            // 初始化时候再重新获取一下 所有的小 li 和 section
            that.UpdateNode()
            // 初始化操作，让相关元素使其具有绑定事件
            this.add.onclick = this.addTab
            for (var i = 0; i < this.lis.length; i++) {
                //  当前 i 值 为 index
                this.lis[i].index = i
                this.lis[i].onclick = this.toggleTab
                this.close[i].onclick = this.removeTab
                //  ondblclick 双击触发事件
                this.spans[i].ondblclick = this.editTab
                this.sections[i].ondblclick = this.editTab
            }
            
        }
        // 1.切换功能
        toggleTab() {
            that.clearClass()
            this.className = 'liactive'
            // 因为这里的 this 指向的是 lis  但是lis 里面没有section 属性，所以会报错，
            // 就需要constructor 里面的this才可以
            that.sections[this.index].className = 'conactive'

        }
        // 清除类名
        clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = ''
                this.sections[i].className = ''
            }
        }
        // 2.增加功能
        addTab() {
            // 创建li 元素 和section 元素
            that.clearClass()
            var random = Math.random()
            var li = '<li class="liactive"><span class="active">新选项卡</span> <span class="close">x</span></li>'
            var section = '<section class="conactive">测试'+random+'</section>'
            // 把着两个元素追加到对应的父元素里面
            that.ul.insertAdjacentHTML('beforeend',li)
            that.content.insertAdjacentHTML('beforeend',section)
            // 因为这个小li 和 section 是后来加上的，初始化时候没有，所有需要重新初始化一下
            that.init()
        }
        // 3.删除功能
        removeTab(e) {
            e.stopPropagation()  // 阻止向上冒泡
            // 获取当前按父元素 小 li 的索引号
            var index = this.parentNode.index
            that.lis[index].remove()
            that.sections[index].remove()
            that.init()
            // 当点击的不是选中的 li 时 则让它不执行下面代码，就可以不让它跳转到它上一个被选中了
            if (document.querySelector('.liactive')) return
            index--
            // 当我么删除了选定状态的这个li的时候，就让他的前一个li 处于选定状态
            // 自动做点击操作
            that.lis[index]&&that.lis[index].click() // 当index 为负数，则不执行点击操作了
        }
        // 4.修改功能
        // 当双击选项卡 li 或者section 里面的文字，就可以实现修改功能
        editTab() {
             // 禁止双击选中文字
             window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
             var str = this.innerHTML
             this.innerHTML = '<input type="text"/>'
             var input = this.children[0] 
             input.value = str
             input.select()  /// 文字处于被选中状态
            //  当失去焦点时，则把输入框里面的内容给 span
             input.onblur = function() {
                this.parentNode.innerHTML = this.value
             }
             input.onkeyup = function(e) {
                if (e.keyCode == 13) {
                    // this.parentNode.innerHTML = this.value
                    this.blur() // 和上面等价 直接调用上面的 blur 事件
                }
             }
        }
       
    
    }
    var son = new Tab('#tab')
    son.init()
})
