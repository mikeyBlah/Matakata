<!DOCTYPE HTML>
<html lang="en">
<head>
	<title>Matakata | Tipi Hire | Sydney | Styling</title>
	<?
    include("../include/head.php");
	?>
</head>
<body>
	<?
    include("../include/header_root.php");
	?>
	<section id="tipi_style_sect">
		<div class="page_banner style_ban">
		<div class="banner_bkgrd">
			<p class="banner_header">Styling</p>
		</div>
		</div>
	<div class="page_intro_contain">
		<div class="tile_full">
			<div class="tile_img"><img src="../img/styling_square.svg" class="gs_img"></div>
			<div class="para_wrap">
				<p class="regular_f pgintro">Our warehouse is full of handpicked furniture and accessories to add that special touch to your event. Anything we don’t have, we can source from our wonderful partners – <b>checkout our selected ranges below.</b></p>
				<p class="regular_f pgintro">If you have a specific style or theme in mind, or if you’re looking for some inspiration, then why not speak to the experts – our styling partners and Sydney’s best event stylers – George & Smee.</p>
				<p class="regular_f pgintro">The girls at G&amp;S specialise in creating magical events and weddings, and know exactly what it takes to get our tipis looking even more amazing than they do already!</p>
				<p class="regular_f pgintro">Ask us today for more information or contact the team directly at <a href="https://www.georgeandsmee.com/" target="_blank">https://www.georgeandsmee.com/</a></p>
			</div>
			<div class="tile_img"><a href="https://www.georgeandsmee.com/" target="_blank"><img src="../img/george-and-smee.png" class="gs_img"></div></a>
		</div>
	</div>
	</div>
	<div class="gal_square_cont">
		<div class="square_wrap">
			<div id="modal_tab" class="square sq1">
				<p class="regf">TABLES</p>
				<div class="over_dark"></div>
			</div>
		</div>
		<div class="square_wrap">
			<div id="modal_sea" class="square sq2">
				<p class="regf">SEATING</p>
				<div class="over_dark"></div>
			</div>
		</div>
		<div class="square_wrap">
			<div id="modal_furn" class="square sq2">
				<p class="regf">FURNISHINGS</p>
				<div class="over_dark"></div>
			</div>
		</div>
		<div class="square_wrap">
			<div id="modal_light" class="square sq2">
				<p class="regf">LIGHTING</p>
				<div class="over_dark"></div>
			</div>
		</div>
		<div class="square_wrap">
			<div id="modal_bar" class="square sq2">
				<p class="regf">BARS &amp; STOOLS</p>
				<div class="over_dark"></div>
			</div>
		</div>
		<div class="square_wrap">
			<div id="modal_prop" class="square sq2">
				<p class="regf">PROPS &amp; SIGNAGE</p>
				<div class="over_dark"></div>
			</div>
		</div>
	</div>
	</section>
	<div id="fixed_modal" class="modal">
	<span id="close" class="cursor">&times;</span>
	<div class="modal-content">
    <div id="slides">
		<div id="numbertext"></div>
		<img id="current_slide" src="">
		<div id="loader">
			<div id="load_inner"></div>
		</div>
    </div>
	<div id="desc">
		<p id="item_head"></p>
		<p id="item_ad"></p>
		<p id="item_price"></p>
	</div>
    <!-- Next/previous controls -->
    <a id="prev">&#10094;</a>
    <a id="next">&#10095;</a>
		<div id="source_cont">
			<p id="source">Sourced from: </p>
			<img id="source_img" src="">
		</div>
	</div>
</div>
	<?
	include("../include/footer.php");
	?>
	<script type="text/javascript" src="../js/gal.js"></script>
	<script type="text/javascript" src="../js/loader.js"></script>
</body>
</html>
