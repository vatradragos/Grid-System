$('#new_york')
    .mouseover(function (event) {
        $("#new_york").css("opacity", "1");
        $("#new_york").css("transition", "all 0.5s ease");
        $(".new_york").css("visibility", "visible");
        $(".new_york").css("opacity", "0.5");
        $(".new_york").css("transition", "all 0.5s ease");
        $(".new_york").css("clip-path", "none");
    })
    .click(function (){
    	$("#new_york").css("opacity", "1");
    	$("#paris").css("opacity", "0.5");
    	$("#mumbai").css("opacity", "0.5");
    	$("#peru").css("opacity", "0.5");
    	$(".new_york").css("visibility", "visible");
    	$(".new_york").css("opacity", "1");
    	$(".paris").css("opacity", "0");
    	$(".mumbai").css("opacity", "0");
    	$(".peru").css("opacity", "0");
    })