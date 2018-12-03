var checker;
function gobble(){
	if ($(window).width() > 800){

checker = true;
}else{
	checker = false;
}
}

function tester(){
	if(checker == true){
$(".package_type_wrap").click(function(){
			$(".package_type_wrap").not(this).each(function(){
			$(this).children( '.desk_more_info' ).slideUp();
			});
			$(this).children( '.desk_more_info' ).slideToggle();
		});
	}
}
	$(document).ready(  gobble );
	$(window).resize(  gobble );
	$(document).ready(  tester );
