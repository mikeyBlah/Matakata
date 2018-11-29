$('.lay_image').each(function() {
	$(this).click(function() {
        console.log("clicked");
		$(".pop_cont").toggleClass("show_pop");
		var clicked = $(this).attr('src');
		$("#tipi_img").attr("src",clicked);
	});
	
	});
	
$('.pop_cont').click(function() {
        console.log("clicked");
		$(".pop_cont").toggleClass("show_pop");
	});