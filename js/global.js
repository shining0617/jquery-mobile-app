//login页面初始化完成后，相当于jquery的ready
$(function(){
	$( "[data-role='header']" ).toolbar({ theme: "e" });
});
// $(window).scrollstop(function(e){
	// 	var scrollTop = $(e.target).scrollTop();
	// 	$("#scrollinfo").text("scrollstop:"+scrollTop); 
	// }); 
$(document).on("pagebeforeshow","#login",navG)
$(document).on("pagebeforeshow","#home",navG)
$(document).on("pagebeforeshow","#activity",navG)
$(document).on("pagebeforeshow","#activityDetail",navG)
$(document).on("pagebeforeshow","#content",navG)
$(document).on("pagebeforeshow","#contentDetail",navG)
$(document).on("pagebeforeshow","#personal",navG);

$(document).on("pagebeforeshow","#personalDetail",navG);

$(document).on("pagebeforeshow","#integralDetail",navG);

$(document).on("pagebeforeshow","#integralDetailT",navG);
 
//show nav
function navG(){
	var id=$(this).attr("id");
	
	if(id.indexOf('Detail')>0){
		$(".pageTitle").html("<a href='#' data-role='button' data-rel='back' class='btnBack'>返回</a>");
		$("nav").hide();  
		if(id=="integralDetail"||"integralDetailT"){  
			$(".collect").hide();
		}else{
			$(".collect").show();
		} 
	}else{
		$(".pageTitle").text($(this).attr("data-navTitle")); 
		$(".collect").hide().prev("nav").show();  
	}
}


