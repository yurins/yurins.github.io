function scrollToHome() {
	if ($('body').length != 0) {
		$("html, body").animate({
			scrollTop: $('body').offset().top
		}, 1000);
	}
}
function scrollToAbout() {
	if ($('#about').length != 0) {
		$("html, body").animate({
			scrollTop: $('#about').offset().top - 50
		}, 1000);
	}
}
function scrollToWork() {
	if ($('#work').length != 0) {
		$("html, body").animate({
			scrollTop: $('#work').offset().top - 50
		}, 1000);
	}
}

function scrollToContact() {
	if ($('#contact').length != 0) {
		$("html, body").animate({
			scrollTop: $('#contact').offset().top - 50
		}, 1000);
	}
}

$(document).ready(function() {
  $('.has-animation').each(function(index) {
    $(this).delay($(this).data('delay')).queue(function(){
      $(this).addClass('animate-in');
    });
  });
});



