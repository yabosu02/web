$(function(){
	/* 팝업창 */
	$(".gongji li:eq(0)").click(function(){
		$("#popUp").show();
	});
	
	$(".pop04 a").click(function(){
		$("#popUp").hide();
	});
	
	/* gnb */
	$(".gnb li a").mouseover(function(){
		$(".gnb li a").next().stop().slideDown();
	});
	
	$(".gnb li a").mouseout(function(){
		$(".gnb li a").next().stop().slideUp();
	});
	
	/* 이미지 슬라이드 */
	$("#slider img").each(function(imgIndexNum){
		$(this).css("top", imgIndexNum*300);
	});
	
	setInterval(function(){
		$("#slider img").each(function(){
			var nowTop = parseInt($(this).css("top"));
			//console.log(nowTop);
			var moveTop = nowTop-300;
			$(this).animate({top:moveTop},1000, function(){
				if(moveTop<=-300){   // if(moveTop<=-600)
					$(this).css("top","600px");   // $(this).css("top","300px");
				}
			});			
		});
	},3000);
	
	/* 탭메뉴 */
	$(".tab>li>a").click(function(e){
		e.preventDefault();
		$(".tab>li").removeClass("on");
		$(".tab>li").find("ul").hide();
		
		$(this).parent().addClass("on");
		$(this).next().show();
	});
	
}); // $(function(){ 끝