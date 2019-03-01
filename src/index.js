'use strict';
require('./style.sass');

$(document).ready(function() {
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 0) {
	        $('#to-top').fadeIn();
	    } else {
	        $('#to-top').fadeOut();
	    }
	});

	$('#to-top').click(function () {
	    $('body,html').animate({
	        scrollTop: 0
	    }, 1000);
	    return false;
	});
	
	$('#quick-reg').click(function(e){
	    if (!$('#agree-terms').prop('checked')) {
	    	alert('Вы должны принять условия соглашения');
	    	e.preventDefault();
		}
	});

	$('.scrollbtn').click(function() {
	   $('html, body').animate({
	        scrollTop: $('#quik-form').offset().top - 20
	    }, 200);
	});
});
