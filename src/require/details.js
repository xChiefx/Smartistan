require.config({
    paths:{
        'jquery':'jquery-1.9.1.min',
        'cookie':'jquery.cookie'
    }
})
require(['jquery','cookie'],function($,cookie){
    var $color = $('.color1 p');
    var $colorWord = $('.color1 span');
    var $showColor = $('.deta p');
    var $rom = $('.ram p');
    var $showRom = $('.deta span');
    var $showGood = $('.deta h1');
    var $baoxian = $('.bh');
    var $baoxian1 = $('.bh1');
    var good = null;
    // 选择颜色；
    $color.each(function(index,value){
        $(value).click(function(){
            console.log($(this) + '**' + index)
            $showColor.html($colorWord[index].innerText);
            $color.css('border','2px solid #9f9f9f');
            $(value).css('border','2px solid #000');
        })
    })
    // 选择容量；
    
    $rom.each(function(index,value){
        $(value).click(function(){
            $rom.css('border','1px solid #e5e5e5');
            $(value).css('border','1px solid #000')
            $showRom.html($(value).html());
            good ='';
            good += $(value).attr('data-good');
            good = parseInt(good);
        })
    })
    // 选择保险；
    $baoxian.click(function(){
        good += parseInt($baoxian.attr('data-good'));
        console.log(good)
        $baoxian1.css('border','1px solid #e9e9e9');
        $baoxian.css('border','1px solid #000');
        $showGood.html('￥' + good);
    });
    $baoxian1.click(function(){
        good += parseInt($baoxian1.attr('data-good'));
        $baoxian.css('border','1px solid #e9e9e9');
        $baoxian1.css('border','1px solid #000');
        $showGood.html('￥' + good);
    });
    // 加入购物车fix
    var $car = $('#good');
    $(window).scroll(function(){
        $car.css('position','fixed');
    })
    // 导航部分吸顶；
    var $search = $('#search');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $search.css({'position':'fixed'});
        }else if($(window).scrollTop() <= 100){
            $search.css('position','relative')
        }
    });
    // 购物车角标;
    var $num = $('.icon-num');
    var $num1 = 0;
    var $go = $('.car p:nth-of-type(1)')
    console.log($num.html())
    $go.click(function(){
        $num1 ++;
        $num.html($num1);
        $num.css({'background':'#e8685e','border':'0'})
    });
    //创建cookie;
    var $goodName = $('.deta h3').html();
    var $goodColor = $('.deta p').html();
    var $goodContent = $('.deta span').html()
    var $goodPrice = $('.deta h1').html();
    var $goodNum = $num.html();
    $.cookie('product1',`{"name":"${$goodName}","color":"${$goodColor}","content":"${$goodContent}","price":"${$goodPrice}","num":"${$goodNum}"}`,{expires:7,path:'/'});
    // console.log($.parseJSON($.cookie('product1')).name);
    // console.log($.cookie('product1'));











})
