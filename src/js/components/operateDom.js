function OperateDom(){
    this.bind();
}
OperateDom.prototype = {
    bind:function(){
        var isShow = [false,false,false];
        this.turnHover();
        $('.aboutlist li').on('click',function(){
            var idx = $(this).index();
            if(!isShow[idx]){
                $('.text-detail').eq(idx).fadeIn();
                isShow[idx] = true;
                console.log(0);
            }else{
                $('.text-detail').eq(idx).fadeOut();
                isShow[idx] = false;
                console.log(1);
            }
        });
    },
    turnHover:function(){
        $('.partnerlist li img').each(function(){
            $(this).on('mouseenter',function(){
                var oldsrc = $(this).attr('src');
                $(this).attr('src',$(this).attr('data-hoversrc'));
                $(this).attr('data-hoversrc',oldsrc);
            });
            $(this).on('mouseleave',function(){
                var oldhoversrc = $(this).attr('src');
                $(this).attr('src',$(this).attr('data-hoversrc'));
                $(this).attr('data-hoversrc',oldhoversrc);
            });
        })
    }
};
new OperateDom();
