$('#paris')
    .mouseover(function (event) {
        $("#paris").css("opacity", "1");
        $("#paris").css("transition", "all 0.5s ease");
        $(".paris").css("visibility", "visible");
        $(".paris").css("opacity", "0.5");
        $(".paris").css("transition", "all 0.5s ease");
        $(".paris").css("clip-path", "none");
    })
    .click(function (){
    	$("#paris").css("opacity", "1");
    	$("#mumbai").css("opacity", "0.5");
    	$("#new_york").css("opacity", "0.5");
    	$("#peru").css("opacity", "0.5");
    	$(".paris").css("visibility", "visible");
    	$(".paris").css("opacity", "1");
    	$(".mumbai").css("opacity", "0");
    	$(".new_york").css("opacity", "0");
    	$(".peru").css("opacity", "0");
    })