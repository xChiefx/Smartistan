require.config({
    paths:{
        "jquery":"jquery-1.9.1.min"
    }
})
require(['jquery'],function($){
    function login(name1,name2){
        var $p1 = $(name1);
        var $txt = $p1.find('input');
        var $msg = $p1.find(name2);
        var $get = $p1.find('.btn');
        $txt.focus(function(){
            $p1.css('border','1px solid blue')
            $msg.css('display','block')
            if(name1 === '.p3'){
                $get.css('background','blue');
                $get.css('cursor','pointer');
            }
        });
        $txt.blur(function(){
            $p1.css('border','1px solid #dadada')
            $msg.css('display','none')
        })
    }
    login('.p1');
    login('.p2');
    login('.p3');
    login('.p41','.sp1');
    login('.p5','.sp2');
    // 同意声明
    function login1(){
        var $p6 = $('.p6');
        var $color = $p6.find('h2');
        var num = 0;
        $color.click(function(){
            num ++;
            if(num % 2 != 0){
                $color.css('background-position','0 0')
            }else if(num % 2 == 0){
                $color.css('background-position','0 -20px')
            }
        })
    }
    login1();
    console.log(typeof '.p3')
})