jQuery(document).ready(function(){
	
	// Contribution from my friend @igormilla for mobile stuff

	function touchHandler(event) {
	    var touches = event.changedTouches,
	        first = touches[0],
	        type = "";
		switch(event.type) {
	        case "touchstart": type = "mousedown"; break;
	        case "touchmove":  type="mousemove"; break;        
	        case "touchend":   type="mouseup"; break;
	        default: return;
	    }
	
	    var simulatedEvent = document.createEvent("MouseEvent");
	    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
	                              first.screenX, first.screenY, 
	                              first.clientX, first.clientY, false, 
	                              false, false, false, 0, null);
	
	    first.target.dispatchEvent(simulatedEvent);
	    event.preventDefault();
	}

    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    

	// end 	

	$(document).on("mousemove", function (e) {
        
	    var x = e.pageX;
	    var width = $(document).width();
	    var night = x / width;
	    var shadow = (260 - Math.round(258 * night));
	    var clock = (1 - night) + .05;

	    $('.night').css('opacity', night);
	    $('.face').css('box-shadow', 'inset ' + shadow + 'px 0 0 0 rgba(244,242,229,.5)');
	    $('#hour, #minute, #second, .clock .center').css('background-color', 'rgba(244,242,229,' + clock + ')');

	});
	
	$('.face').after('<div class="center"></div>');
	
	$('.share_btn').click(function () {
	    $(this).fadeOut(100);
	    $('footer article').fadeIn(300);
	    return false;
	});

	$('.night, .clock').click(function () {
	    $('footer article').fadeOut(100);
	    $('.share_btn').fadeIn(300);
	});
	
})

// By the way, you can find a similar experiment 
// with some different (and more complex) functionality at 
// http://gridchin.com/experiments/time-eclipse-2/