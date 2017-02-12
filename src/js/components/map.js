var map = new BMap.Map("dituContent");
var point = new BMap.Point(113.84494,22.611648);
var marker = new BMap.Marker(point);
map.addOverlay(marker);
map.centerAndZoom(point, 18);
var opts = {
    type: BMAP_NAVIGATION_CONTROL_SMALL,
    width : 220,
    height: 100,
    title : "华夏创新知识产权服务有限公司" ,
    enableMessage:true,
    message:"戳下面的链接看下地址喔~"
};
var infoWindow = new BMap.InfoWindow("地址：广东省深圳市宝安区航空路与顺昌路交汇处泰华梧桐岛夏至6A二层", opts);  // 创建信息窗口对象
marker.addEventListener("click", function(){
    map.openInfoWindow(infoWindow,point);
});


map.addControl(new BMap.NavigationControl(opts));
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
map.setCurrentCity("深圳");





