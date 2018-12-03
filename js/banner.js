$(document).ready(checkScroll);
$(window).on('resize',(checkScroll));

function checkScroll(){

					var didScroll;
					var lastScrollTop = 10;
					var delta = 5;
					var navbarHeight = $('#banner_wrap').outerHeight();

					if ($(window).width() < 800) {
					$('#logo').attr('src','img/mata_logo.svg');
					$('#logo').width(120 + 'px');
					$('#banner_wrap').height('auto');
				}else if(window.scrollY==0){
					$('#logo').attr('src','img/mata_logo_white.svg');
					$('#logo').width(250 + 'px');
					}


					$(window).scroll(function(event){
						didScroll = true;
					});

					setInterval(function() {
						if (didScroll) {
							hasScrolled();
							didScroll = false;
						}
					}, 250);

					function hasScrolled() {

						var st = $(this).scrollTop();
						if ($(window).width() > 800) {
						// Make sure they scroll more than delta
						if(Math.abs(lastScrollTop - st) <= delta)
							return;

						if (st > lastScrollTop && st > navbarHeight){
							// Scroll Down
							$('#banner_wrap').addClass('show_ban');
							$('#banner_wrap').height(80 + 'px');
							$('#book_btn').addClass('show_me').removeClass('hide_me');
							$('.li_cont a').addClass('link_after').removeClass('link_before');
							$('#logo').attr('src','img/mata_logo.svg');
							$('#logo').width(160 + 'px');
						} else {
							// At the top
								if (st < delta){
								$('#banner_wrap').removeClass('show_ban');
								$('#banner_wrap').height('auto');
								$('#book_btn').addClass('hide_me').removeClass('show_me');
								$('.li_cont a').addClass('link_before').removeClass('link_after');
								$('#logo').attr('src','img/mata_logo_white.svg');
								$('#logo').width(250 + 'px');
								}
						}


						lastScrollTop = st;
					}
					}
					}
