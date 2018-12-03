window.addEventListener("load", function() { 

	var square = document.getElementsByClassName("square");
	var width = square.clientWidth;
	console.log(square);
	console.log(width);
	
	$(".square").each(function() {
		var that = $(this);
		wid = that.outerWidth();
		height = that.outerHeight();
		console.log(height);
		$(that).height(wid + 'px');
		console.log(wid);
     });

	/*//////////////////// TILE INPUT ////////////////////*/
	var type;
	
	 $("#modal_tab").click(function(){
		 type = 1;
		 openModal();
	 });
	 $("#modal_sea").click(function(){
		 type = 2;
		 openModal();
	 });
	 $("#modal_furn").click(function(){
		 type = 3;
		 openModal();
	 });
	 $("#modal_light").click(function(){
		 type = 4;
		 openModal();
	 });
	 $("#modal_bar").click(function(){
		 type = 5;
		 openModal();
	 });
	 $("#modal_prop").click(function(){
		 type = 6;
		 openModal();
	 });
	 $("#close").click(function(){
		closeModal();
		console.log("closed");
	 });

	 
	 /*////////// Open Modal //////////*/
	function openModal() {
	  $('#fixed_modal').addClass('modal_active');
	  $('#fixed_modal').removeClass('modal');
	  currentSlide(1);
	}

	/*////////// Close Modal //////////*/
	function closeModal() {
	  $('#fixed_modal').addClass('modal');
	  $('#fixed_modal').removeClass('modal_active');
	  $(".table_slides, .seat_slides, .furn_slides, .light_slides, .bar_slides, .prop_slides").each(function() {
		$(this).css("display", "none");
	  });
	}
	var slideIndex = 1;
	showSlides(slideIndex);

	/*//////////////////// CONTROLS ////////////////////*/
	 $("#next").click(function(){
		 plusSlides(1);
	 });
	 $("#prev").click(function(){
		plusSlides(-1);
	 });
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	function currentSlide(n) {
	showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var tabSlides = $(".table_slides");
	  var seatSlides = $(".seat_slides");
	  var furnSlides = $(".furn_slides");
	  var lightSlides = $(".light_slides");
	  var barSlides = $(".bar_slides");
	  var propSlides = $(".prop_slides");
	  
	if(type === 1){
		if (n > tabSlides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = tabSlides.length}
		for (i = 0; i < tabSlides.length; i++) {
		tabSlides[i].style.display = "none";
	  }
		tabSlides[slideIndex-1].style.display = "flex";
	}
	if(type === 2){
		if (n > seatSlides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = seatSlides.length}
		for (i = 0; i < seatSlides.length; i++) {
		seatSlides[i].style.display = "none";
	  }
		seatSlides[slideIndex-1].style.display = "flex";
	}
	if(type === 3){
		if (n > furnSlides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = furnSlides.length}
		for (i = 0; i < furnSlides.length; i++) {
		furnSlides[i].style.display = "none";
	  }
		furnSlides[slideIndex-1].style.display = "flex";
	}
	if(type === 4){
		if (n > lightSlides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = lightSlides.length}
		for (i = 0; i < lightSlides.length; i++) {
		lightSlides[i].style.display = "none";
	  }
		lightSlides[slideIndex-1].style.display = "flex";
	}
	if(type === 5){
		if (n > barSlides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = barSlides.length}
		for (i = 0; i < barSlides.length; i++) {
		barSlides[i].style.display = "none";
	  }
		barSlides[slideIndex-1].style.display = "flex";
	}
	if(type === 6){
		if (n > propSlides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = propSlides.length}
		for (i = 0; i < propSlides.length; i++) {
		propSlides[i].style.display = "none";
	  }
		propSlides[slideIndex-1].style.display = "flex";
	}
	} 
});
	$(window).on('resize', function(){
	$(".square").each(function () {
    var that = $(this);
    wid = that.outerWidth();
	height = that.outerHeight();
	console.log(height);
	$(that).height(wid + 'px');
	console.log(wid);
     });
	 });