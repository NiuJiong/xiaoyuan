$("#sidecall").click(function(){
	$("#sidecall p").toggle();
})
$("#returnTop").click(function () {
        var speed=500;
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
 });
 
$(".rightside a").click(function(){
	$(".rightside a").removeClass("active");
	$(this).addClass("active");
});
$(".rightside a").mouseover(function(){
	$(".rightside a").removeClass("active");
	$(this).addClass("active");
});
