!function(t){function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}var n={};return i.m=t,i.c=n,i.i=function(t){return t},i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=6)}([function(t,i){function n(){this.imgitems=$(".imgitems"),this.slideText=$(".slide-text"),this.crt=0,this.idx=1,this.autoPlay()}n.prototype={playText:function(){this.slideText.removeClass("active"),this.slideText.eq(this.idx).addClass("active"),this.idx++,4==this.idx&&(this.idx=1,this.slideText.removeClass("active"),this.slideText.eq(0).addClass("active"))},slideOff:function(){this.imgitems.eq(this.crt).removeClass("active")},slideOn:function(){this.imgitems.eq(this.crt).addClass("active")},changeSlide:function(){this.slideOff(),this.crt++,this.crt>=3&&(this.crt=0),this.slideOn()},autoPlay:function(){var t=this;this.clock=setInterval(function(){t.playText(t.idx)},2e3),this.clock2=setInterval(function(){t.changeSlide()},6e3)}},$("#carousel").imagesLoaded().done(function(){$(".loader-ct").css({display:"none"}),$(".carousel").css({display:"block"}),new n})},function(t,i){function n(t){this.$ele=t,this.init()}n.prototype={init:function(){this.bind()},bind:function(){var t=this;this.$ele.on("click",function(){$("body").animate({scrollTop:"0"},800)}),$(window).on("scroll",function(){i&&clearTimeout(i);var i=setTimeout(t.showBtn(),300)})},showBtn:function(){var t=$(window).scrollTop();t>300?this.$ele.css({display:"block"}):this.$ele.css({display:"none"})}},new n($(".gotop"))},function(t,i){var n=new BMap.Map("dituContent"),e=new BMap.Point(113.84494,22.611648),s=new BMap.Marker(e);n.addOverlay(s),n.centerAndZoom(e,18);var o={type:BMAP_NAVIGATION_CONTROL_SMALL,width:220,height:100,title:"华夏创新知识产权服务有限公司",enableMessage:!0,message:"戳下面的链接看下地址喔~"},a=new BMap.InfoWindow("地址：广东省深圳市宝安区航空路与顺昌路交汇处泰华梧桐岛夏至6A二层",o);s.addEventListener("click",function(){n.openInfoWindow(a,e)}),n.addControl(new BMap.NavigationControl(o)),n.addControl(new BMap.OverviewMapControl),n.addControl(new BMap.MapTypeControl),n.setCurrentCity("深圳")},function(t,i){function n(t){this.navlist=t,this.navitems=this.navlist.children(),this.aItems=this.navitems.find("a"),this.init()}n.prototype={init:function(){this.bind(),this.getDistance(),this.scrollTo()},bind:function(){var t=this,i=!1;this.aItems.each(function(i){t.aItems.eq(i).on("click",function(n){t.stopDefault(n),$("html,body").animate({scrollTop:t.distanceArr[i]+10},800)})}),$(window).on("scroll",function(){i&&clearTimeout(i);var i=setTimeout(t.scrollTo(),300)}),$(window).on("resize",function(){i&&clearTimeout(i);var i=setTimeout(t.getDistance,500)}),$(".toproduct").on("click",function(i){t.stopDefault(i),$("html,body").animate({scrollTop:t.distanceArr[1]+10},800)}),$(".tocontact").on("click",function(i){t.stopDefault(i),$("html,body").animate({scrollTop:t.distanceArr[6]+10},800)}),$(".nav-toggle").on("click",function(){i?($(this).html('<i class="iconfont icon-liebiao"></i>'),$(".navlist").css({display:"none"}),i=!1):($(this).html('<i class="iconfont icon-close"></i>'),$(".navlist").css({display:"block"}),i=!0)})},getDistance:function(){var t=this;this.distanceArr=[],$("section").each(function(){t.distanceArr.push($(this).offset().top-70)})},scrollTo:function(){var t=this,i=$(window).height(),n=$(document).height(),e=$(window).scrollTop();t.distanceArr[0]<=e&&e<=t.distanceArr[1]&&t.addActive(0),t.distanceArr[1]<e&&e<=t.distanceArr[2]&&t.addActive(1),t.distanceArr[2]<e&&e<=t.distanceArr[3]&&t.addActive(2),t.distanceArr[3]<e&&e<=t.distanceArr[4]&&t.addActive(3),t.distanceArr[4]<e&&e<=t.distanceArr[5]&&t.addActive(4),t.distanceArr[5]<e&&e<=t.distanceArr[6]&&t.addActive(5),(t.distanceArr[6]<=e||e+i===n&&e>0)&&t.addActive(6)},addActive:function(t){this.navitems.removeClass("active"),this.navitems.eq(t).addClass("active")},stopDefault:function(t){return t&&t.preventDefault?t.preventDefault():window.event.returnValue=!1,!1}},new n($(".navlist"))},function(t,i){function n(){this.bind()}n.prototype={bind:function(){var t=[!1,!1,!1];this.turnHover(),$(".aboutlist li").on("click",function(){var i=$(this).index();t[i]?($(".text-detail").eq(i).fadeOut(),t[i]=!1,console.log(1)):($(".text-detail").eq(i).fadeIn(),t[i]=!0,console.log(0))})},turnHover:function(){$(".partnerlist li img").each(function(){$(this).on("mouseenter",function(){var t=$(this).attr("src");$(this).attr("src",$(this).attr("data-hoversrc")),$(this).attr("data-hoversrc",t)}),$(this).on("mouseleave",function(){var t=$(this).attr("src");$(this).attr("src",$(this).attr("data-hoversrc")),$(this).attr("data-hoversrc",t)})})}},new n},function(t,i){function n(t){this.list=t,this.items=this.list.children(),this.bind()}n.prototype={bind:function(){var t=this;$(window).on("scroll",function(){i&&clearTimeout(i);var i=setTimeout(t.showAnimation(),300)})},showAnimation:function(){var t=$(window).scrollTop(),i=$(window).height(),n=this.list.offset().top;n<t+i&&this.items.addClass("animate")}},new n($(".productlist")),new n($(".advantagelist")),new n($(".aboutlist")),new n($(".newslist")),new n($(".partnerlist"))},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(0),s=(n.n(e),n(2)),o=(n.n(s),n(3)),a=(n.n(o),n(1)),c=(n.n(a),n(5)),r=(n.n(c),n(4));n.n(r);console.log("本站由Joyce Song提供技术支持，技术交流请进入我的博客 http://www.joycesong.com 获取联系方式，感谢您的支持！")}]);