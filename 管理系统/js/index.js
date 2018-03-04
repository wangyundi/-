/**
 * Created by Lv on 2017/12/8.
 */
//���� �ַ���
$('.clickBtn').click(function(){
    $(this).children('span').children('i').each(function(i,v){
        if($(v).hasClass('disp')){
            $(v).removeClass('disp');
        }else{
            $(v).addClass('disp');
        }
    });
});
$('#content  li').click(function(){
    $(this).siblings().find('.fa-angle-right').addClass('disp');
    $(this).siblings().find('.fa-angle-down').removeClass('disp');
})
$('.jiantou').animate({'left':'80%'},1000,function(){
    $('.jiantou').css('left','60%');
});
//
setInterval(function(){
    $('.jiantou').animate({'left':'80%'},1000,function(){
        $('.jiantou').css('left','60%');
    });
},1000);

//iframe����Ӧ
var  ifm = document.getElementById('ifm');
ifm.onload = function(){
    //console.log(ifm);
    var ifrbody = ifm.contentWindow.document.getElementsByTagName('html')[0]
        .getElementsByClassName('col-sm-12')[0];
    var main = document.getElementsByClassName('main')[0];
    var ifrwidth = ifrbody.clientWidth;
    var ifrheight = ifrbody.clientHeight;
    main.style.width = ifrwidth + 'px';
    main.style.height = ifrheight + 'px';
    console.log(ifrwidth);
    console.log(ifrheight);
//左边导航高度动态设置
    var navLeft = document.getElementsByClassName('connectrow')[0].getElementsByClassName('col-sm-3')[0];
    console.log(navLeft);
    navLeft.style.minHeight = ifrheight + 'px';
}
window.onresize = function(){
    window.location.reload();
}


