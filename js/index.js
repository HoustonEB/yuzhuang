
$(function () {

    $('#fullpage').fullpage({
        sectionsColor: ['#666', '#fff', '#999','#666'],
        // 导航
        navigation: false,
        scrollBar: true,
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
            $('#aside-nav li').eq(1).css('transform', 'translateY(0px)');
        }, 100);
        setTimeout(function () {
            $('#aside-nav li').eq(2).css('transform', 'translateY(0px)');
        }, 200);
        setTimeout(function () {
            $('#aside-nav li').eq(3).css('transform', 'translateY(0px)');
        }, 300);
        setTimeout(function () {
            $('#aside-nav li').eq(4).css('transform', 'translateY(0px)');
        }, 400);
        setTimeout(function () {
            $('#aside-nav li').eq(5).css('transform', 'translateY(0px)');
        }, 500);
        setTimeout(function () {
            $('#aside-nav li').eq(6).css('transform', 'translateY(0px)');
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
            $('#aside-nav li').eq(1).css('transform', 'translateY(-50px)');
        }, 100);
        setTimeout(function () {
            $('#aside-nav li').eq(2).css('transform', 'translateY(-50px)');
        }, 200);
        setTimeout(function () {
            $('#aside-nav li').eq(3).css('transform', 'translateY(-50px)');
        }, 300);
        setTimeout(function () {
            $('#aside-nav li').eq(4).css('transform', 'translateY(-50px)');
        }, 400);
        setTimeout(function () {
            $('#aside-nav li').eq(5).css('transform', 'translateY(-50px)');
        }, 500);
        setTimeout(function () {
            $('#aside-nav li').eq(6).css('transform', 'translateY(-50px)');
            clickTrue = true;
        }, 600);
    });





});



