$('#mumbai')
    .mouseover(function (event) {
        $("#mumbai").css("opacity", "1");
        $("#mumbai").css("transition", "all 0.5s ease");
        $(".mumbai").css("visibility", "visible");
        $(".mumbai").css("opacity", "0.5");
        $(".mumbai").css("transition", "all 0.5s ease");
        $(".mumbai").css("clip-path", "none");
    })
    .click(function (){
    	$("#mumbai").css("opacity", "1");
    	$("#paris").css("opacity", "0.5");
    	$("#new_york").css("opacity", "0.5");
    	$("#peru").css("opacity", "0.5");
    	$(".mumbai").css("visibility", "visible");
    	$(".mumbai").css("opacity", "1");
    	$(".paris").css("opacity", "0");
    	$(".new_york").css("opacity", "0");
    	$(".peru").css("opacity", "0");
    })