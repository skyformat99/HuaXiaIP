function GoTop($ele){
    this.$ele = $ele;
    this.init();
}
GoTop.prototype = {
    init:function(){
        this.bind();
    },
    bind:function(){
        var _this = this;
        this.$ele.on('click',function(){
            $('body').animate({scrollTop:'0'},800);
        });
        $(window).on('scroll',function(){
            if(clock){
                clearTimeout(clock);
            }
            var clock = setTimeout(_this.showBtn(),300);
        })
    },
    showBtn:function(){
        var scrollT = $(window).scrollTop();
        if(scrollT>300){
            this.$ele.css({'display':'block'})
        }else{
            this.$ele.css({'display':'none'})
        }
    }
};
new GoTop($('.gotop'));
