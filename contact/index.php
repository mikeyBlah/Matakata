<!DOCTYPE HTML>
<html lang="en">
<head>
	<title>Matakata | Tipi Hire | Sydney | Contact</title>
	<?
    include("../include/head.php");
	?>
</head>
<body>
	<?
	include("../include/header_root.php");
	?>
	<section id="contact_us_sect">
		<div class="page_banner contact_ban">
			<div class="banner_bkgrd">
				<p class="banner_header">Contact Us</p>
			</div>
		</div>
		<div id="contact_us_wrap">
			<p class="pgintro  regular_f">For some quick answers check out our helpful <a href="http://matakata.com.au/matakata/faq/">FAQ</a> section.</p>
			<p>Follow us on social media for lots of information, pretty pictures, and some inspiration!</p>
			<p>For anything else including our price list, availability and quotes, or advice on your event, please fill out the form below or contact us directly on 0452233117 or at info@matakata.com.au. We can’t wait to hear from you!</p>
			<div id="contact_details_wrap">
				<ul id="cont_details_list" class="regular_f">
					<li><i class="fa fa-envelope-o" style="font-size:18px;color:#A69282"></i><a href="mailto:info@matakata.com.au" class="text_link">info@matakata.com.au</a></li>
					<li><i class="fa fa-phone" style="font-size:22px;color:#A69282"></i><a href="tel:0291366495" class="text_link">02 9136 6495</a></li>
					<li><i class="fa fa-facebook" style="font-size:22px;color:#A69282"></i><a href="https://www.facebook.com/MatakataTipiHire/" target="_blank" class="text_link">www.facebook.com/MatakataTipiHire</a></li>
					<li><i class="fa fa-instagram" style="font-size:22px;color:#A69282"></i><a href="https://www.instagram.com/matakatatipis/" target="_blank" class="text_link">www.instagram.com/matakatatipis</a></li>
				</ul>
			</div>
			<p class="pgintro  regular_f">For information on pricing, accessories, and availability (or just to say hi!) please send us the following details. We will try to respond within 24 hours. For any urgent enquiries, please call us on the number above.</p>
		</div>
		<a name="submitjump"></a>
			<div id="contact_sect">
			<div id="main_cont_wrap">
				<?php include('../email-forms/main_contact.php'); ?>
				<form id="main_contact" action="#submitjump" method="POST">
					<div class="field_cont">
						<span class="error"><?= $name_error ?></span>
						<input placeholder="Your name" type="text" name="name" value="<?= $name ?>" tabindex="1">
					</div>
					<div class="field_cont">
						<span class="error"><?= $email_error ?></span>
						<input placeholder="Your email address" type="text" name="email" value="<?= $email ?>" tabindex="2">
					</div>
					<div class="field_cont">
						<span class="error"><?= $phone_error ?></span>
						<input placeholder="Your phone number" type="text" name="phone" value="<?= $phone ?>" tabindex="3">
					</div>
					<div class="field_cont">
						<span class="error"><?= $guest_error ?></span>
						<input placeholder="Number of guests" type="text" name="guests" value="<?= $guests ?>" tabindex="3">
					</div>
					<div class="field_cont">
						<span class="error"><?= $date_error ?></span>
						<input placeholder="Date of event (dd/mm/yyyy)" type="text" name="date" value="<?= $date ?>" tabindex="3">
					</div>
					<input class="hid_where" type="text" name="where" value="<?= $where ?>">
					<div class="where_dropdown" name="where">
						<label class="placeholder">How did you hear about us?</label>
						<ul class="closed_drop">
							<li class="closed_drop">Google Search</li>
							<li class="closed_drop">Recommendation</li>
							<li class="closed_drop">Facebook</li>
							<li class="closed_drop">Instagram</li>
							<li class="closed_drop">Pinterest</li>
							<li class="closed_drop">Wedshed</li>
							<li class="closed_drop">Vogue</li>
							<li class="closed_drop">Other</li>
						</ul>
					</div>
					<input type="text" id="website" name="website"/>
					<textarea placeholder="Type your message here" cols="30" rows="5" value="<?= $message ?>" name="message" tabindex="5"></textarea>
					<button class="send_btn" name="submit" type="submit" data-submit="...Sending">Send</button>
					<div class="success"><?= $success ?></div>
				</form>
				<div id="contact_large_contain_2">
					<img id="contact_square" src="../img/logo_tree.svg"/>
				</div>
			</div>
		</div>
	</section>
	<?
	include("../include/footer.php");
	?>
</body>
</html>
