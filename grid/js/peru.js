$('#peru')
    .mouseover(function (event) {
        $("#peru").css("opacity", "1");
        $("#peru").css("transition", "all 0.5s ease");
        $(".peru").css("visibility", "visible");
        $(".peru").css("opacity", "0.5");
        $(".peru").css("transition", "all 0.5s ease");
        $(".peru").css("clip-path", "none");
    })
    .click(function (){
    	$("#peru").css("opacity", "1");
    	$("#paris").css("opacity", "0.5");
    	$("#mumbai").css("opacity", "0.5");
    	$("#new_york").css("opacity", "0.5");
    	$(".peru").css("visibility", "visible");
    	$(".peru").css("opacity", "1");
    	$(".paris").css("opacity", "0");
    	$(".mumbai").css("opacity", "0");
    	$(".new_york").css("opacity", "0");
    })