$(function () {
    // 立即执行函数  这样可以省的防止起相同的变量名，导致代码污染
    (function () {
        // 监控模块区域
        $('.tabs a').on('click', function () {
            $(this).addClass('active').siblings().removeClass()
            var index = $(this).index()  // 获取当前索引号
            // 当前索引号的显示，兄弟隐藏
            $('.content').eq(index).show().siblings('.content').hide()
        })
    })();
    // 无缝滚动
    (function () {
        $('.marquee-view .marquee').each(function (i, ele) {
            var rows = $(this).children().clone()
            $(this).append(rows)
        })
    })();
    // 饼形图
    (function () {
        var myChart = echarts.init(document.querySelector('.pie'))
        var  option = {
            tooltip: {
            // 触发模式
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            //   a代表 series 里面的 name
            // b 代表 series  data 里面的 name
            // c 代表 series  data 里面的 value
            // d 代表 当前数据/总数据 的比例
            },
            // 注意颜色写的位置
            color: [
              "#006cff",
              "#60cda0",
              "#ed8884",
              "#ff9f7f",
              "#0096ff",
              "#9fe6b8",
              "#32c5e9",
              "#1d9dff"
            ],
            series: [
              {
                name: "点位统计",  // 对应上面formatter 的 {a}
                type: "pie",  
                // 如果radius是百分比则必须加引号
                // 前一个是内部圆形半径，外面的是外部圆形半径
                radius: ["25%", "90%"],
                center: ["50%", "50%"],
                roseType: "radius",
                data: [ 
                  { value: 20, name: "云南" },
                  { value: 26, name: "北京" },
                  { value: 24, name: "山东" },
                  { value: 25, name: "河北" },
                  { value: 20, name: "江苏" },
                  { value: 25, name: "浙江" },
                  { value: 30, name: "四川" },
                  { value: 42, name: "湖北" }
                ],
                // 修饰饼形图文字相关的样式 label对象
                label: {
                  fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                  // 连接到图形的线长度
                  length: 6,
                  // 连接到文字的线长度
                  length2: 8
                }
              }
            ]}
             myChart.setOption(option)
    })();
    window.addEventListener("resize", function() {
      // 让我们的图表调用 resize这个方法
      myChart.resize();
    });
})