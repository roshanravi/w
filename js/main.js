$(document).ready(function() {
	// var $vaTrigger = $(".va-trigger");

	
	// setInterval(function(){
	// 	$vaTrigger.toggleClass("pulse");
	// }, 1000);
	
	$('.chat-scroll').animate({
		scrollTop: $('.chat-scroll').get(0).scrollHeight}, 2000
	);  

	if ($('body').hasClass('va-opened')) {
		$('section.right-panel').removeClass('col-10-half').addClass('col-7');
	} else {}

	$('.chat-field input').focusin(function(event) {
		$(this).parents('.assistant-ui').addClass('infocus');
	});

	$('.chat-field input').focusout(function(event) {
		$(this).parents('.assistant-ui.infocus').removeClass('infocus');
	});
});