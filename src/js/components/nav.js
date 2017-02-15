function NavOperate($ele){
    this.navlist = $ele;
    this.navitems = this.navlist.children();
    this.aItems = this.navitems.find('a');
    this.init();
}
NavOperate.prototype = {
    init:function(){
        this.bind();
        this.getDistance();
        this.scrollTo();
    },
    bind:function(){
        var _this = this;
        var listShow = false;
        this.aItems.each(function(index){
            _this.aItems.eq(index).on('click',function(e){
                _this.stopDefault(e);
                $('html,body').animate({scrollTop:_this.distanceArr[index]+10},800);
            })
        });
        $(window).on('scroll',function(){
            if(clock1){
                clearTimeout(clock1);
            }
            var clock1 = setTimeout(_this.scrollTo(),300);
        });
        $(window).on('resize',function(){
            if(clock2){
                clearTimeout(clock2);
            }
            var clock2 = setTimeout(_this.getDistance,500);
        });
        $('.toproduct').on('click',function(e){
            _this.stopDefault(e);
            $('html,body').animate({scrollTop:_this.distanceArr[1]+10},800);
        });
        $('.tocontact').on('click',function(e){
            _this.stopDefault(e);
            $('html,body').animate({scrollTop:_this.distanceArr[6]+10},800);
        });
        $('.nav-toggle').on('click',function(){
            if(listShow){
                $(this).html('<i class="iconfont icon-liebiao"></i>');
                $('.navlist').css({'display':'none'});
                listShow = false;
            }else{
                $(this).html('<i class="iconfont icon-close"></i>');
                $('.navlist').css({'display':'block'});
                listShow = true;
            }
        })
    },
    getDistance:function(){
        var _this = this;
        this.distanceArr = [];
        $('section').each(function(){
            _this.distanceArr.push($(this).offset().top-70);
        });
    },
    scrollTo:function(){
        var _this = this,
            winH = $(window).height(),
            htmlH = $(document).height(),
            scrollT = $(window).scrollTop();

        if(_this.distanceArr[0]<=scrollT && scrollT<=_this.distanceArr[1]){
            _this.addActive(0);
        }
        if(_this.distanceArr[1]<scrollT && scrollT<=_this.distanceArr[2]){
            _this.addActive(1);
        }
        if(_this.distanceArr[2]<scrollT && scrollT<=_this.distanceArr[3]){
            _this.addActive(2);
        }
        if(_this.distanceArr[3]<scrollT && scrollT<=_this.distanceArr[4]){
            _this.addActive(3);
        }
        if(_this.distanceArr[4]<scrollT && scrollT<=_this.distanceArr[5]){
            _this.addActive(4);
        }
        if(_this.distanceArr[5]<scrollT && scrollT<=_this.distanceArr[6]){
            _this.addActive(5);
        }
        if(_this.distanceArr[6]<=scrollT || (scrollT+winH===htmlH && scrollT>0)){
            _this.addActive(6);
        }
    },
    addActive:function(idx){
        this.navitems.removeClass('active');
        this.navitems.eq(idx).addClass('active');
    },
    stopDefault:function(e){
        if(e && e.preventDefault){
            e.preventDefault();
        }else{
            window.event.returnValue = false;
        }
        return false;
    }
};
new NavOperate($('.navlist'));
