function Slider() {
    this.imgitems = $('.imgitems');
    this.slideText = $('.slide-text');
    this.crt = 0;
    this.idx = 1;
    this.autoPlay();
}

Slider.prototype = {
    playText:function(){
        this.slideText.removeClass('active');
        this.slideText.eq(this.idx).addClass('active');
        this.idx++;
        if(this.idx==4){
            this.idx=1;
            this.slideText.removeClass('active');
            this.slideText.eq(0).addClass('active');
        }
    },
    slideOff:function(){
        this.imgitems.eq(this.crt).removeClass('active');
    },
    slideOn:function(){
        this.imgitems.eq(this.crt).addClass('active');
    },
    changeSlide:function(){
        this.slideOff();
        this.crt++;
        if(this.crt>=3){
            this.crt = 0;
        }
        this.slideOn();
    },
    autoPlay:function(){
        var _this = this;
        this.clock = setInterval(function(){
            _this.playText(_this.idx);
        },2000);
        this.clock2 = setInterval(function(){
            _this.changeSlide();
        },6000);
    }
};
$('#carousel').imagesLoaded().done(function(){
    $('.loader-ct').css({'display':'none'});
    $('.carousel').css({'display':'block'});
    new Slider();
});
