$(document).ready(function(){
	//open popup-profile-pic
	$('#stage_add_button').on('click', function(event){
		event.preventDefault();
		$('#stage_add_popup').trigger('reset');
		$('#stage_add_popup').addClass('is-visible');

	});

	//close popup-profile-pic
	$('#stage_add_popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('#stage_add_popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button-profile-pic
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('#stage_add_popup').removeClass('is-visible');
		}
	});
	//open popup-profile-pic
	$('#hall_add_button').on('click', function(event){
		event.preventDefault();
		$('#hall_add_popup').addClass('is-visible');
	});

	//close popup-profile-pic
	$('#hall_add_popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('#hall_add_popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button-profile-pic
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('#hall_add_popup').removeClass('is-visible');
		}
	});
	$('#food_add_button').on('click', function(event){
		event.preventDefault();
		$('#food_add_popup').addClass('is-visible');
	});

	//close popup-profile-pic
	$('#food_add_popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('#food_add_popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button-profile-pic
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('#food_add_popup').removeClass('is-visible');
		}
	});

	$('#photo_add_button').on('click', function(event){
		event.preventDefault();
		$('#photo_add_popup').trigger('reset');
		$('#photo_add_popup').addClass('is-visible');

	});

	//close popup-profile-pic
	$('#photo_add_popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('#photo_add_popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button-profile-pic
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('#photo_add_popup').removeClass('is-visible');
		}
	});

	$('#media_add_button').on('click', function(event){
		event.preventDefault();
		$('#media_add_popup').addClass('is-visible');
	});

	//close popup-profile-pic
	$('#media_add_popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('#media_add_popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button-profile-pic
	$(document).keyup(function(event){
		if(event.which=='27'){
			$('#media_add_popup').removeClass('is-visible');
		}
	});
});
