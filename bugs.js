function insertBug(bugs) {
    var $div = $("body");
    var $jqObj;  
    for(var i=0;i<bugs;i++){
	var x = Math.round( Math.random()*1200 );
	var y = Math.round( Math.random()*1200 );
	$jqObj = $("<div/>").addClass("bug").attr({'data-x': x,'data-y': y, }).css('top', y).css('left', x).css('background-color',"#300");
	$div.append($jqObj);
    }
    setInterval(function() {
        $(".bug").each(function() {
	    cx = $(this).data('x');
	    cy = $(this).data('y');
	    dx = -5 + Math.round( Math.random() * 50 );
	    dy = -5 + Math.round( Math.random() * 20 );
	    cx += dx;
	    cy += dy;
	    $(this).attr({'data-x': cx,'data-y': cy});
	    $(this).css('top',cy).css('left',cx);
	});
    }, 70);
}