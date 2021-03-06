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
	    	alert('Вы должны принять правила регистрации');
	    	e.preventDefault();
		}
	});
	$('#full-reg-bt').click(function(e){
	    if (!$('#full-agree-terms').prop('checked')) {
	    	alert('Вы должны принять правила регистрации');
	    	e.preventDefault();
		}
	});

	$('.scrollbtn').click(function() {
	   $('html, body').animate({
	        scrollTop: $('#quick-form').offset().top - 20
	    }, 500);
	});

	$('.show-policy').click(function(e){
		$('#policy').fadeIn();
		$('html, body').animate({
		     scrollTop: $('#policy').offset().top - 60
		 }, 500);
		e.preventDefault();
	});

	$('#policy').click(function(){
		$('#policy').fadeOut();
	});
});
