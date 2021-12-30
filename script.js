var pos = 0;
var delay = 0.5;
jQuery('.heart-box').find('.heart').each(function(){
	var _this = jQuery(this);
	var heart = _this.data('heart');	
	setTimeout(function(){
		_this.css('bottom', pos + "px");
		_this.css('right', pos + "px");
		_this.css('animation-delay', delay + "s");
		pos = pos+10;	
		delay = delay+0.1;
		
		_this.addClass('fly-' + heart);
	}, 1000);	
});

jQuery('.button').mousedown(function(){
	jQuery('.heart').addClass('active');
});
jQuery('.button').mouseup(function(){
	jQuery('.heart').removeClass('active');
});