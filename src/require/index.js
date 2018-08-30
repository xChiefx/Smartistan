require.config({
    paths : {
        "jquery" : "jquery-1.9.1.min",
        "cookie" : "jquery.cookie"
    }
});
require(["jquery","cookie"],function($,cookie){
    //吸顶
    var $search = $('#search');
    $(window).scroll(function(){
        console.log($(window).scrollTop())
        if($(window).scrollTop() > 100){
            $search.css('position','fixed');
        }else if($(window).scrollTop() <= 100){
            $search.css('position','relative')
        }
    })
    // 轮播图
    var $ban = $('.banner-con');
    var $ullis = $('.banner-con ul').children('li');
    // console.log($lis.size())
    var num = $ullis.size();
    var $ollis = $('.banner-con ol').children('li');
    var indexA = 0;
    // 遍历大图,全部隐藏
    function side(){
        $ullis.each(function(index,value){
            $(this).css('display','none');
        });
        // 便利圆点,全部背景是无;
        $ollis.each(function(index,value){
            $(this).css('background','none');
        });
        // 当前下标图片出现,原点背景色变白色;
        $ullis[indexA].style.display='block';
        $ollis[indexA].style.background='red';
    }
    // auto play
    var timer = null;
    function autoPlay(){
        timer = setInterval(function(){
            indexA++;
            if(indexA == num){
                indexA = 0;
            }
            side();
        },3000)
    }
    // 移入事件,停止轮播,点击事件变为对应大图
    $ban.mousemove(function(){
        clearInterval(timer);
    });
    $ban.mouseleave(function(){
        autoPlay();
    });
    // 小图点击事件;
    $ollis.each(function(index,value){
        $(value).click(function(){
            indexA = index;
            side();
            $(this).css('background','red')
        });
    });
    autoPlay();
    // *******************************//
    //热门商品;
    function colorChange(name,change){
        var $play = $(name).children('img');
        var $color = $(change);
        // 事件
        $color.each(function(index,value){
            $(value).mousemove(function(){
                $play.each(function(index,value){
                    $(value).css('z-index','0');
                });
                $(value).css('border','2px solid #ccc');
                $play[index].style.zIndex = 1;
            });
            $(value).mouseleave(function(index,value){
                $(this).css('border','1px solid #ccc')
            });
        });
    }
    // 鼠标滑过h2 变为描述,h3变为查看详情;
    function see(name,n1,n2){
        // h2 h3改变;
        var $dl = $(name);
        var $xiangqing = $dl.find('h3');
        var $jiage = $dl.find('h4 p');
        $dl.mousemove(function(){
            $xiangqing.html(n1);
            $xiangqing.css('color','red');
            $jiage.css('display','block');
        });
        $dl.mouseleave(function(){
            $xiangqing.html(n2);
            $xiangqing.css('color','#999999');
            $jiage.css('display','none');
        });
    }
    see('.product-con2','坚果R1最高直降700元','次世代旗舰手机,内藏来自未来的"电脑"');
    see('.product-con12','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    see('.product-con13','购坚果Pro2加19元送49元保护套','漂亮的不像实力派');
    see('.product-con14','购坚果Pro2特别版送49元保护套','漂亮的不像实力派');
    colorChange('.product-con2 dt','.product-con2 .change1');
    colorChange('.product-con12 dt','.product-con12 .change2');
    colorChange('.product-con13 dt','.product-con13 .change3');
    colorChange('.product-con14 dt','.product-con14 .change4');
    // 鼠标滑过h3变为查看详情和加入购物车;
    function shoppingCar(name){
        var $dl = $(name)
        var $car = $dl.find('h4 section');
        $dl.mousemove(function(){
            $car.css('display','block');
        });
        $dl.mouseleave(function(){
            $car.css('display','none')
        });
    }
    shoppingCar('.show-con2');
    shoppingCar('.show-con3');
    shoppingCar('.show-con4');
    shoppingCar('.show-con5');
    shoppingCar('.show-con6');
    // 鼠标滑过h3变为查看详情;
    function look(name){
        var $dl = $(name);
        var $look = $dl.find('h4 p');
        $dl.mousemove(function(){
            $look.css('display','block')
        });
        $dl.mouseleave(function(){
            $look.css('display','none')
        })

    }
    look('.show-con7');
    // show-con2
    //1
    see('.show-con21','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    shoppingCar('.show-con21');
    colorChange('.show-con21 dt','.show-con21 .show-change1');
    //2
    see('.show-con31','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    shoppingCar('.show-con31');
    colorChange('.show-con31 dt','.show-con31 .show-change2');
    //3
    see('.show-con41','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    shoppingCar('.show-con41');
    colorChange('.show-con41 dt','.show-con41 .show-change3');
    //4
    see('.show-con51','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    look('.show-con51');
    colorChange('.show-con61 dt','.show-con61 .show-change4');
    //5
    see('.show-con61','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    shoppingCar('.show-con61');
    //6
    see('.show-con71','购坚果3赠送国企绒布保护套','漂亮的不像实力派');
    look('.show-con71');
    //show-con3
    //1
    see('.show-con2','超级除甲醛版,限时特惠500元','超强净化能力,超低噪音,超长寿命');
    shoppingCar('.show-con2');
    //2
    see('.show-con3','超级除甲醛版,限时特惠500元','超强净化能力,超低噪音,超长寿命');
    shoppingCar('.show-con3');
    //3
    see('.show-con4','超级除甲醛版,限时特惠500元','超强净化能力,超低噪音,超长寿命');
    look('.show-con4');
    //show-con4
    see('.show-con5','年轻人','超强净化能力,超低噪音,超长寿命');
    look('.show-con5');
    see('.show-con6','年轻人','超强净化能力,超低噪音,超长寿命');
    look('.show-con6');
    see('.show-con7','年轻人','超强净化能力,超低噪音,超长寿命');
    shoppingCar('.show-con7');
    // hand shaker
    function download(name1,name2){
        var $down = $(name1);
        var $dl = $(name2);
        $dl.mousemove(function(){
            $down.css('display','block');
        });
        $dl.mouseleave(function(){
            $down.css('display','none');
        });
    }
    download('.download','.hand-con2');
    download('.scan','.hand-con3');
    download('.read','.hand-con4');
    download('.tec','.hand-con5');
    /********************************login****************************** */
    function login(name1){
        var $p1 = $(name1);
        var $txt = $p1.find('input');
        $txt.focus(function(){
            $p1.css('border','1px solid blue')
        });
        $txt.blur(function(){
            $p1.css('border','1px solid #dadada')
            function btn(){
                var $txt1 = $('.p1 input');
                var $txt2 = $('.p2 input');
                var $btn = $('.p4 input');
                if($txt1.val() != '' && $txt2.val() != ''){
                    $btn.css('background','blue')
                }else{
                    $btn.css('background','#bdcdef')
                }
            }
            btn();
        })
    }
    login('.p1');
    login('.p2');
    function login1(){
        var $p3 = $('.p3');
        var $color = $p3.find('h2');
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
    function btn(){
        var $txt1 = $('.p1 input');
        var $txt2 = $('.p2 input');
        var $btn = $('.p4 input');
        if($txt1.val() != '' && $txt2.val() != ''){
            $btn.css('background','blue')
        }else{
            $btn.css('background','#bdcdef')
        }
    }
    btn();
});