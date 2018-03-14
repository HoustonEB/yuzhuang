// // content in two aside 

// //
// var flag = true;
// var flag1 = true;
var clickTrue = true;
// /*滚动触发显示内容块*/ 
// $(window).on('scroll',function(){
//     // console.log($(this).scrollTop());
//     if($(this).scrollTop() >= 400 && flag == true) {
//         $('.content-intro').animate({
//             width: '675px'
//         }, 1000);

//         // $('.content-prog').animate({
//         //     width: '50%'
//         // }, 1000);
//         flag = false;
//     }
// }) 

// /*点击虚化*/ 
// $('.intro-main').on('click',function(e){
//     if(flag == true) {
//         return;
//     }
//     e.stopPropagation();
//     /*阻止事件冒泡-否则触发此子元素事件会触发父元素事件造成一闪一闪*/ 
//     $(this).children('div').eq(0).addClass('fixed').animate({ 
//         top: 0,
//         width: '675px',
//         height: '1000px',
//         tansformOrigin: 'center center'
//     },200).end().eq(1).css("width",'0');
//     $('.bg1').addClass('blur');
//     // console.log($(this).children('div'));
//     console.log('content1子元素事件');
//     flag1 = false;
// })

// /*点击解除虚化*/ 
// $('.content1').on('click', function (e) {
//     console.log('content1事件');
//     if (flag1 == true) {
//         return;
//     }
//     /*delay()只作用于animation的动画类型延迟*/ 
//     $('.intro-main').children('div').eq(0).animate({
//         /*宽度是屏幕的一般*/ 
//         top: '50px',
//         width: '675px',
//         height: '500px'
//     }, 200).end().eq(1).css("width", '0');
//     setTimeout(function () { $('.intro-main').eq(0).removeClass('fixed')},1000)
//     $('.bg1').removeClass('blur')
// })

// 侧边导航动画
$('#left-btn').on('click',function(){
    // console.log($('#aside-nav li').eq(0));
    if(clickTrue == false) {
        return;
    }
    console.log(clickTrue);
    setTimeout(function(){
        $('#aside-nav li').eq(0).css('transform', 'translateX(100%)');
    },100);
    setTimeout(function () {
        $('#aside-nav li').eq(1).css('transform', 'translateX(100%)');
    }, 200);
    setTimeout(function () {
        $('#aside-nav li').eq(2).css('transform', 'translateX(100%)');
    }, 300);
    setTimeout(function () {
        $('#aside-nav li').eq(3).css('transform', 'translateX(100%)');
    }, 400);
    setTimeout(function () {
        $('#aside-nav li').eq(4).css('transform', 'translateX(100%)');
    }, 500);
    setTimeout(function () {
        $('#aside-nav li').eq(5).css('transform', 'translateX(100%)');
        // 此处如果将锁放入外面则先锁后执行定时器-因为定时器没外边的代码执行快要排1
        clickTrue = false;
    }, 600);
});

$('#left-btn').on('click', function () {
    // console.log($('#aside-nav li').eq(0));
    if(clickTrue == true) {
        return;
    }
    setTimeout(function () {
        $('#aside-nav li').eq(0).css('transform', 'translateX(-100%)');
    }, 100);
    setTimeout(function () {
        $('#aside-nav li').eq(1).css('transform', 'translateX(-100%)');
    }, 200);
    setTimeout(function () {
        $('#aside-nav li').eq(2).css('transform', 'translateX(-100%)');
    }, 300);
    setTimeout(function () {
        $('#aside-nav li').eq(3).css('transform', 'translateX(-100%)');
    }, 400);
    setTimeout(function () {
        $('#aside-nav li').eq(4).css('transform', 'translateX(-100%)');
    }, 500);
    setTimeout(function () {
        $('#aside-nav li').eq(5).css('transform', 'translateX(-100%)');
        clickTrue = true;
    }, 600);
});
