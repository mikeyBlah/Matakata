$(document).ready(function(){
				$('#ham_ico').click(function(){

					$(this).toggleClass('open');
					$("#main_nav").slideToggle();
					$("body").toggleClass('body_no_scroll');
					$("html").toggleClass('body_no_scroll');
					$("li").toggleClass('fader');
					$("#social_nav").toggleClass('fader');
				});

				$(".more_cont").click(function(){
					$(this).toggleClass('less_cont');
					$(this).next().slideToggle();
				});




					/*
					$(window).bind('scroll',function(e){
							parallaxScroll();
						});

						function parallaxScroll(){

							if ($(window).width() < 800) {
							var scrolled = $(window).scrollTop();
							var standard = scrolled*.80;
							$('#back_1').css('top',(0-standard)+'px');
							//document.getElementById("myDIV").style.transform = "rotate(7deg)";
							document.getElementById("#back_1").style.transform = "translate(0,0-standard")"+'px');
							$('#back_2').css('top',(650-(scrolled*.80))+'px');
							$('#back_3').css('top',(1150-(scrolled*.80))+'px');
							$('#back_4').css('top',(1500-(scrolled*.80))+'px');
						}
							else {
							var scrolled = $(window).scrollTop();
							$('#back_1').css('top',(0-(scrolled*.80))+'px');
							$('#back_2').css('top',(850-(scrolled*.80))+'px');
							$('#back_3').css('top',(1950-(scrolled*.80))+'px');
							$('#back_4').css('top',(2800-(scrolled*.80))+'px');

							   }

							   requestAnimationFrame(parallaxScroll);
						}*/

					////////////////////////////Custom Dropdown////////////////////////////
					$('.placeholder').on('click', function() {
						var list = $(this).next('ul');
						var listItem = $(this).next('ul').children('li');
						list.toggleClass('open_list');
						listItem.toggleClass('open_drop');
						list.toggleClass('closed_drop');
						listItem.toggleClass('closed_drop');
					});
					$(function() {
					  $('.where_dropdown ul li').on('click', function() {
						var label = $(this).parent().parent().children('label');
						var input = $(".hid_where");
						label.attr('data-value', $(this).attr('data-value'));
						label.html($(this).html());
						$('input[name=where]').val($(this).html());
						$("label").removeClass('placeholder');
						$("label").addClass('selecion');
						$(this).parent().children('.selected').removeClass('selected');
						$(this).addClass('selected');
						$(this).parent().toggleClass('open_list');
						$(this).parent().children().toggleClass('open_drop');
						$(this).parent().toggleClass('closed_drop');
						$(this).parent().children().toggleClass('closed_drop');

					  });
					});
					////////////////////////////////////////////////////////////////////
					function showMe(){
					$("#home_focal").toggleClass('show_me');
					}
					$(".question").click(function(){
						var answer = $(this).next( $( "p" ) )
						answer.slideToggle();

					});

					$(".include_button").click(function(){
						var item = $(this).next( $( ".items_inner" ) );
						$(this).children(".items_arrow").toggleClass('less_item');
						item.slideToggle();
						effects();

					});
					//Arrows on the packages page

					function effects(){

					$(this).next().slideToggle();
				};

					$(".reveal_cont").click(function(){
					var arrow = $(this).children( $( ".package_items" ) );
					arrow.toggleClass('less_item');
					$(this).next(".tipi_layouts_hide").slideToggle();
				});

					//Make catalogue card the same height as its % width
					function makeSquare(){
					$('.cata_item_card').height($('.cata_item_card').width());

					}
					window.onload = makeSquare;
					window.onresize = makeSquare;
				});
