  window.addEventListener("load", function() {
	var img1 = document.querySelector("#back_1");
  var img2 = document.querySelector("#back_2");
	var img2_1 = document.querySelector("#back_2_1");
	var img3 = document.querySelector("#back_3");
	var img4 = document.querySelector("#back_4");
	var firstDiv = document.getElementById("first_lower");
	var secDiv = document.getElementById("flex_full");
	var secTwoDiv = document.getElementById("lay_sect");
	var thirdDiv = document.getElementById("third_lower");
	var testimonials = document.getElementById("test_wrap");
	var testy =  testimonials.offsetHeight + testimonials.offsetTop;
	var firsty =  firstDiv.offsetHeight + firstDiv.offsetTop;
	var secdyTwo =  secTwoDiv.offsetHeight + secTwoDiv.offsetTop;
	var secdy =  secDiv.offsetHeight + secDiv.offsetTop;
	var speed = 0.7;
	var outerWhite = $("#tipi_lower").outerHeight();
	img2.style.top = firsty *+ speed + "px";
  if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
}
	if ($(window).width() > 800) {
	img2_1.style.top = firsty *+ speed + "px";
	}else{
		img2_1.style.top = secdyTwo *+ speed + "px";
	}
	img3.style.top = secdy *+ speed + "px";
	img4.style.top = testy *+ speed + "px";
	$("#second_lower").outerHeight(outerWhite +'px');

	window.onresize = function() {
	var firstDiv = document.getElementById("first_lower");
	var secDiv = document.getElementById("flex_full");
	var thirdDiv = document.getElementById("third_lower");
	var testimonials = document.getElementById("test_wrap");
	var testy =  testimonials.offsetHeight + testimonials.offsetTop;
	var firsty =  firstDiv.offsetHeight + firstDiv.offsetTop;
	var secdy =  secDiv.offsetHeight + secDiv.offsetTop;
	var outerWhite = $("#tipi_lower").outerHeight();
	img2.style.top = firsty *+ speed + "px";
	if ($(window).width() > 800) {
	img2_1.style.top = firsty *+ speed + "px";
	}else{
		img2_1.style.top = secdyTwo *+ speed + "px";
	}
	img3.style.top = secdy *+ speed + "px";
	img4.style.top = testy *+ speed + "px";
	$("#second_lower").outerHeight(outerWhite +'px');
	}

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }
    $(window).bind('scroll',function(e){
							scrollLoop();
						});

    window.addEventListener("DOMContentLoaded", scrollLoop, false);
    var xScrollPosition;
    var yScrollPosition;

    function scrollLoop() {
        xScrollPosition = window.pageXOffset;
        yScrollPosition = window.pageYOffset;

        setTranslate(0, yScrollPosition * - speed, img1);
        setTranslate(0, yScrollPosition * - speed, img2);
        setTranslate(0, yScrollPosition * - speed, img2_1);
        setTranslate(0, yScrollPosition * - speed, img3);
        setTranslate(0, yScrollPosition * - speed, img4);

        requestAnimationFrame(scrollLoop);
    }
	});
