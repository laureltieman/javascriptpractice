$(document).scroll(function(){

	var y = $(document).scrollTop();

	$("#update").html(y);

	if (y > 200) {
		$("#one").fadeIn();
	}

	else {
		$("#one").fadeOut();
	}


	if (y > 400) {
		$("#two").fadeIn();
	}

	else {
		$("#two").fadeOut();
	}


	if (y > 600) {
		$("#three").fadeIn();
	}

	else {
		$("#three").fadeOut();
	}


	if (y > 800) {
		$("#four").fadeIn();
	}

	else {
		$("#four").fadeOut();
	}


	if (y > 1000) {
		$("#five").fadeIn();
	}

	else {
		$("#five").fadeOut();
	}


	if (y > 1200) {
		$("#six").fadeIn();
	}

	else {
		$("#six").fadeOut();
	}

});