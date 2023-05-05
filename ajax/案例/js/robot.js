$(function () {
    // 给发送按钮绑定事件
    $('#btnSend').on('click', function () {
        let content = $('#ipt').val().trim()
        if (content.length <= 0) return $('#ipt').val('')
        // 如果输入了内容，就追加到聊天框内
        $('#talk_list').append(`<li class="right_word">
        <img src="images/person02.png" /> <span>${content}</span>
      </li>`)
        // 让聊天框内容清空，同时重置滚动条的位置

        $('#ipt').val('')
        resetui()
        getMsg(content)
    })

    // 发起请求获取聊天消息
    function getMsg(text) {
        $.ajax({
            method: 'GET',
            url: ' http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                // console.log(res);
                if (res.message == 'success') {
                    // 接收聊天信息
                    let msg = res.data.info.text
                    $('#talk_list').append(`<li class="left_word">
                <img src="images/person01.png" /> <span>${msg}</span>
              </li>`)
            //   重置滚动条
              resetui()
            //   调用函数，把文本转换为语音
              getVoice(msg)
                }
            }
        })
    }

    // 聊天内容改为语音形式
    function getVoice(text) {
        $.ajax({
            method:'get',
            url:'http://www.liulongbin.top:3006/api/synthesize',
            data:{text:text},
            success:function(res) {
                if(res.status == 200) {
                    // 播放语音
                    $('#voice').attr('src',res.voiceUrl)
                }
            }
        })
    }

    // 按回车也可以返回消息
    // 为文本框绑定keyup事件
    $('#ipt').on('keyup',function(e) {
        if(e.keyCode === 13) {
            // 当点击了回车后，就触发 发送按钮的 点击事件
            $('#btnSend').click()
        }
    })
    
    // 初始化右侧滚动条
    // 这个方法再 scroll.js中
    resetui()
})