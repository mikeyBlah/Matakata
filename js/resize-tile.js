function resizeSquares(){

	$(".lay_head_cont").each(function() {
		var that = $(this);
		wid = that.outerWidth();
		height = that.outerHeight();
		$(that).height(wid + 'px');
		console.log(wid);
     });

	 $(".half_pack").each(function() {
		var that = $(this);
		wid = that.outerWidth();
		height = that.outerHeight();
		$(that).height(wid + 'px');
		$("#full_pack").height(wid + 'px');
		if ($(window).width() > 800){
		$(".items_inner").height(wid + 'px');
	}else{
		$(".items_inner").height('auto');
	}

     });
	 	$(".package_items").each(function() {
		var that = $(this);
		wid = that.outerWidth();
		height = that.outerHeight();
		$(that).height(wid + 'px');
		$(".package_items_full").height(wid + 'px');
		console.log(wid);

     });
		 var outerWhite = $("#tipi_lower").outerHeight();
		 $("#second_lower").outerHeight(outerWhite +'px');
		 }

	 $(document).ready(  resizeSquares );
	 $(window).resize(  resizeSquares );
