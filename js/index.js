
$(function () {

    $('#fullpage').fullpage({
        sectionsColor: ['#333', '#fff', '#fff','#fff'],
        // 导航
        navigation: false,
        scrollBar: true,
        // 滚动速度
        scrollingSpeed: 500,
        // 去除箭头
        controlArrows: true
    });

    // 设置禁止滚动事件
    $.fn.fullpage.setAllowScrolling(false);

    // 回到主页
    $('#home').on('click',function() {
        $.fn.fullpage.moveTo(1);
    })
    // 
    // $('#fullpage').children('div.first').siblings().hide();
    $('.intro li:first-child').on('click',function() {
        $('#fullpage').children('div.first').siblings().hide();
        $('.second').css("display", 'block');
        $.fn.fullpage.moveTo(2);
    })

    $('.intro li:nth-child(2)').on('click', function () {
        $('#fullpage').children('div.first').siblings().hide();
        $('.third').css("display", 'block');
        $.fn.fullpage.moveTo(3);
    })

    $('.intro li:last-child').on('click', function () {
        $('#fullpage').children('div.first').siblings().hide();
        $('.fourth').css("display", 'block');
        $.fn.fullpage.moveTo(4);
    })
  







    var clickTrue = true;
    // 侧边导航动画
    $('#left-btn').on('click', function () {
        // console.log($('#aside-nav li').eq(0));
        if (clickTrue == false) {
            return;
        }
        console.log(clickTrue);
        setTimeout(function () {
            $('#aside-nav li').eq(2).css('transform', 'translateY(0px)');
        }, 100);
        setTimeout(function () {
            $('#aside-nav li').eq(3).css('transform', 'translateY(0px)');
        }, 200);
        setTimeout(function () {
            $('#aside-nav li').eq(4).css('transform', 'translateY(0px)');
        }, 300);
        setTimeout(function () {
            $('#aside-nav li').eq(5).css('transform', 'translateY(0px)');
        }, 400);
        setTimeout(function () {
            $('#aside-nav li').eq(6).css('transform', 'translateY(0px)');
        }, 500);
        setTimeout(function () {
            $('#aside-nav li').eq(7).css('transform', 'translateY(0px)');
            // 此处如果将锁放入外面则先锁后执行定时器-因为定时器没外边的代码执行快要排1
            clickTrue = false;
        }, 600);
    });

    $('#left-btn').on('click', function () {
        // console.log($('#aside-nav li').eq(0));
        if (clickTrue == true) {
            return;
        }
        setTimeout(function () {
            $('#aside-nav li').eq(2).css('transform', 'translateY(-50px)');
        }, 100);
        setTimeout(function () {
            $('#aside-nav li').eq(3).css('transform', 'translateY(-50px)');
        }, 200);
        setTimeout(function () {
            $('#aside-nav li').eq(4).css('transform', 'translateY(-50px)');
        }, 300);
        setTimeout(function () {
            $('#aside-nav li').eq(5).css('transform', 'translateY(-50px)');
        }, 400);
        setTimeout(function () {
            $('#aside-nav li').eq(6).css('transform', 'translateY(-50px)');
        }, 500);
        setTimeout(function () {
            $('#aside-nav li').eq(7).css('transform', 'translateY(-50px)');
            clickTrue = true;
        }, 600);
    });


    // echarts图表
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('pielist'));

    // 指定图表的配置项和数据
    option = {
        title: {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: 'center',
            y: '100px'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: '150px',
            left: '70px',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '40%',
                center: ['50%', '60%'],
                data: [
                    { value: 335, name: '直接访问' },
                    { value: 310, name: '邮件营销' },
                    { value: 234, name: '联盟广告' },
                    { value: 135, name: '视频广告' },
                    { value: 1548, name: '搜索引擎' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);




});



