window.onload = function() {
    var regtel = /^1[3|4|5|7|8]\d{9}$/  // 手机号码正则表达式
    var regqq = /^[1-9][0-9]{4,10}$/ // qq号
    var regQname = /^[\u4E00-\u9FA5]{2,8}$/ // 昵称
    var regQpsd = /^[0-9a-zA-Z]{6,18}$/  // 密码
    var regmsg = /^\d{6}$/
    var tel = document.getElementById('tel')
    var qq = document.getElementById('qq')
    var Qname = document.getElementById('qname')
    var Qpsd = document.getElementById('qpsd')
    var Qpsd1 = document.getElementById('qpsd1')
    var msg = document.getElementById('msg')
    regexp(qq,regqq)   // qq号
    regexp(tel,regtel)   // 手机号
    regexp(Qname,regQname)  //  昵称
    regexp(Qpsd,regQpsd)   // 密码
    regexp(msg,regmsg)
    // 封装一个验证 正则表达式 是否正确的函数 
    function regexp(ele,reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>格式输入正确</span>'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入</span>'
            }
            if (ele.value == '') {
                this.nextElementSibling.innerHTML = ''
            }
        }
    }
    // 确认密码验证
    Qpsd1.onblur = function() {
        if (this.value != Qpsd.value) {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码和上面不一致</span>'
        } else {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>密码一致</span>'   
        }
    }
}