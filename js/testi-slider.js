var isBig;
$(document).ready(function(){
  if ($(window).width() > 800){
    isBig = true;
    $('.test_set').css('opacity', 0);
    $('.testimonial').css('opacity', 1);
    $('#tes_one, #tes_two, #tes_three, #tes_four').css('opacity', 1);
    $("#test_wrap > .test_set:gt(0)").css('opacity', 0);
    largeFunc();
  }if ($(window).width() < 800){
    isBig = false;
    $('.testimonial').css('opacity', 0);
    $('.test_set').css('opacity', 1);
    $('#tes_one, #tes_two, #tes_three, #tes_four').css('opacity', 0);
    $("#test_wrap > .test_set:gt(0)").css('opacity', 1);
    smallFunc();
  }
});
$(window).on('resize',function(){
if ($(window).width() > 800 && isBig == false){
  isBig = true;
  $('.test_set').css('opacity', 0);
  $('.testimonial').css('opacity', 1);
  $("#test_wrap > .test_set:gt(0)").css('opacity', 0);
  largeFunc();
}if ($(window).width() < 800 && isBig == true){
  isBig = false;
  $('.testimonial').css('opacity', '0');
  $('.test_set').css('opacity', 1);
  $("#test_wrap > .test_set:gt(0)").css('opacity', 1);
  smallFunc();
}
});

function largeFunc(){
$("#test_wrap > .test_set:gt(0)").css('opacity', 0);
 var intFunc = setInterval(function() {
  if(isBig == false){
    clearInterval(intFunc);
    return;
  }
  $('#test_wrap > .test_set:first')
    .fadeTo(2000, 0)
    .next()
    .fadeTo(2000, 1)
    .end()
    .appendTo('#test_wrap');
    $('#tes_one, #tes_two, #tes_three, #tes_four').css('opacity', 1);
},  12000);

}
function smallFunc(){
      if(isBig == true){
        return;
      }
      function doFade() {
          $("#tes_one").fadeTo(2000, 1,function() {
              $("#tes_one").delay(6000).fadeTo(2000, 0);
              setTimeout(fadeTwo,6000);
          });
      }
      function fadeTwo() {
        if(isBig == true){
          return;
        }
          $("#tes_two").fadeTo(2000, 1,function() {
              $("#tes_two").delay(6000).fadeTo(2000, 0);
              setTimeout(fadeThree,6000);
          });
      }
      function fadeThree() {
        if(isBig == true){
          return;
        }
          $("#tes_three").fadeTo(2000, 1,function() {
              $("#tes_three").delay(6000).fadeTo(2000, 0);
              setTimeout(fadeFour,6000);
          });
      }
      function fadeFour() {
        if(isBig == true){
          return;
        }
          $("#tes_four").fadeTo(2000, 1,function() {
              $("#tes_four").delay(6000).fadeTo(2000, 0);
              setTimeout(doFade,6000);
          });
      }
      if(isBig == true){
        return;
      }
      doFade();

}
