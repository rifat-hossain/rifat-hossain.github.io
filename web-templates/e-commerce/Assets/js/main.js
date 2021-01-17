$(document).ready(function () {

	var elm_class = '.gotop'; // Adjust this accordingly. 
	if($(window).width() < 559){
		$(elm_class).slideDown();
	};
	//Check to see if the window is top if not then display button

	$(window).scroll(function () {
		if ($(this).scrollTop() > 428 || $(window).width() < 559) {
			$(elm_class).slideDown();
		} else {
			$(elm_class).slideUp();
		};
	});


	//Click event to scroll to top


	$('#clock').countdown('2020/10/10', function(event) {
		var $this = $(this).html(event.strftime(''
		  + '<span class=\"display-4\">%w</span> weeks '
		  + '<span class=\"display-4\">%d</span> days '
		  + '<span class=\"display-4\">%H</span> hr '
		  + '<span class=\"display-4\">%M</span> min '
		  + '<span class=\"display-4\">%S</span> sec'));
	  });



	  
});