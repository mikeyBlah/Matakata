function spinner(){
  $("#loader").css("display", "block");
}

$("#current_slide")
    .on('load', function() {
      console.log("image loaded correctly");
      $("#loader").css("display", "none");
    })
    .on('error', function() {
      console.log("error loading image");
    })
    .attr("src", $("#current_slide").attr("src"))
;
$("#next").click(function(){
  spinner();
});
$("#prev").click(function(){
 spinner();
});
