function PageAnimation($list){
    this.list = $list;
    this.items = this.list.children();
    this.bind();
}
PageAnimation.prototype = {
    bind:function(){
        var _this = this;
        $(window).on('scroll',function(){
            if(clock1){
                clearTimeout(clock1);
            }
            var clock1 = setTimeout(_this.showAnimation(),300);

        })
    },
    showAnimation:function(){
        var scrollT = $(window).scrollTop();
        var winH = $(window).height();
        var offsetT = this.list.offset().top;
        if(offsetT<scrollT+winH){
            this.items.addClass('animate');
        }else{
            this.items.removeClass('animate');
        }
    }
};
new PageAnimation($('.productlist'));
new PageAnimation($('.advantagelist'));
new PageAnimation($('.aboutlist'));
new PageAnimation($('.partnerlist'));

