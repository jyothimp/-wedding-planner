<?php
include_once 'db_connect.php';
include_once 'check_logout.php';
$user_id=$_SESSION['user'];
if(isset($_POST['btn_remove_cart_stage'])){
	$item_id=$_POST['cart_item'];
$result = mysqli_query($con, "UPDATE `wp_addtocart` SET cart_status=0 WHERE`cart_item_id`=$item_id and cart_item_type=1") or die(mysqli_error($con));
	echo "<script>alert('Item has been successfully removed..!');</script>";
}
if(isset($_POST['btn_remove_cart_hall'])){
	$item_id=$_POST['cart_item'];
$result = mysqli_query($con, "UPDATE `wp_addtocart` SET cart_status=0 WHERE`cart_item_id`=$item_id and cart_item_type=2") or die(mysqli_error($con));
echo "<script>alert('Item has been successfully removed..!');</script>";
}
if(isset($_POST['btn_remove_cart_food'])){
	$item_id=$_POST['cart_item'];
	$result = mysqli_query($con, "UPDATE `wp_addtocart` SET cart_status=0 WHERE`cart_item_id`=$item_id and cart_item_type=3") or die(mysqli_error($con));
	echo "<script>alert('Item has been successfully removed..!');</script>";
}
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">
	<meta name="keywords" content="Beach Weddings,Beach Wedding in Kochi,Beach Weddings in Kerala,Beach Wedding in Kochi,Beach Wedding in Kerala,Wedding Venues in Kerala,Wedding Venues in Kochi">
	<meta name="description" content="At present there are various trends include in the weddings. Scenario wedding company provides the facility of the beach wedding that makes your day as much special. Contact us : scenariowedding@gmail.com, +91 99464 90001">
	<meta name="author" content="Invosome">
	<title>Beach Weddings in Kochi | Scenario Wedding Company</title>
	<!-- FAVICON AND APPLE TOUCH -->
	<link rel="shortcut icon" href="images/icons/favicon.png">
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="images/icons/apple-touch-57x57.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="images/icons/apple-touch-72x72.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="images/icons/apple-touch-114x114.png">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="images/icons/apple-touch-144x144.png">
	<!-- FONTS -->
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic">
	<!-- BOOTSTRAP CSS -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<!-- FONT AWESOME -->
	<link rel="stylesheet" href="assets/fontawesome/css/font-awesome.min.css">
	<!-- MIU ICON FONT -->
	<link rel="stylesheet" href="assets/miuiconfont/miuiconfont.css">
	<!-- FANCYBOX -->
	<link rel="stylesheet" href="assets/js/fancybox/jquery.fancybox.css">
	<!-- REVOLUTION SLIDER -->
	<link rel="stylesheet" href="assets/js/revolutionslider/css/settings.css">
	<!-- BxSLIDER -->
	<link rel="stylesheet" href="assets/js/bxslider/jquery.bxslider.css">
	<!-- YOUTUBE PLAYER -->
	<link rel="stylesheet" href="assets/js/ytplayer/css/YTPlayer.css">
	<!-- ANIMATIONS -->
	<link rel="stylesheet" href="assets/js/animations/animate.min.css">
	<!-- CUSTOM & PAGES STYLE -->
	<link rel="stylesheet" href="assets/css/custom.css">
	<link rel="stylesheet" href="css/custom.css">
	<link rel="stylesheet" href="assets/css/pages-style.css">
	<!-- STYLE SWITCHER -->
	<link rel="stylesheet" href="assets/js/style-switcher/style-switcher.css">
	<!-- ALTERNATIVE STYLES -->
	<link rel="stylesheet" href="#" data-style="styles">
</head>
<body>
	<div id="page-wrapper">
		<!-- HEADER -->
		<header>
			<div class="container">
				<div class="row">
					<div class="col-lg-6"></div>
					<div class="col-lg-3" style="color:#ffaa00; text-align:right; font-size:14px;"><i class="fa fa-phone-square ph-icon" aria-hidden="true"></i> <a style="text-decoration:none;" href="mailto:scenariowedding@gmail.com">scenariowedding@gmail.com</a></div>
					<div class="col-lg-2" style="color:#ffaa00; text-align:right; font-size:14px;"><i class="fa fa-envelope-o ph-icon" aria-hidden="true"></i> <a style="text-decoration:none;" href="tel:+919946490001">+91 99464 90001</a></div>
				</div>
			</div>
			<div class="container" style="border-bottom: 3px #110000">
				<div class="row">
					<div class="col-sm-2">
						<!-- LOGO -->
						<a id="logo" href="index.php">
							<img src="images/backgrounds/logo.png" alt="Destination wedding in Kerala" width="165">
						</a>
					</div><!-- col -->
					<div class="col-sm-10">
						<!-- SEARCH -->
						<!-- search-container -->
						<!-- MENU -->
						<nav>
							<a id="mobile-menu-button" href="#"><i class="fa fa-bars"></i></a>
							<ul class="menu clearfix" id="menu">
								<li>
									<a href="index.php">Home</a>
								</li>
								<li><a href="about-us.php">About</a></li>
								<li class="megamenu ">
									<a href="#">Add-ons</a>
									<div class="megamenu-container col-4">
										<div class="section">
											<img class="hidden-xs hidden-sm" src="images/backgrounds/image-megamenu.png" alt="Destination Weddings in Kochi">
										</div><!-- section -->
										<div class="section">
											<h5>Designing</h5>
											<ul>
												<li><a href="design-stage.php">Stage Decoration</a></li>
												<li><a href="design-decor.php">Hall Decoration</a></li>
											</ul>
										</div><!-- section -->
										<div class="section">
											<h5>Catering Services</h5>
											<ul>
												<li><a href="catservice.php">Nonvegetarian</a></li>
												<li><a href="catservice.php">Vegetarian</a></li>
												<li><a href="catservice.php">Snacks</a></li>
											</ul>
										</div>
										<div class="section">
											<h5>Media&Entertainment</h5>
											<ul>
												<li><a href="entertainment.php">Entertainment</a></li>
												<li><a href="videography.php">Videography</a></li>
												<li><a href="photography.php">Photography</a></li>
											</ul>
										</div><!-- section -->
									</div><!-- megamenu-container -->
								</li>
								<li>
									<a href="contact-us.php">Contact</a>
								</li>
								<li>
									<a href="logout.php">Logout</a>
								</li>
								<li>
									<a href="cart.php"><i class="cart_top fa fa-shopping-cart"></i></a>
								</li>
							</nav>
						</div><!-- col -->
					</div><!-- row -->
				</div><!-- container -->
			</header><!-- HEADER -->
			<style>
			@media (min-width:992px) and (max-width:1199px){
				.col-sm-10{
					width: 100.333%;
					margin-top: -4%;}
				}
				</style>
				<!-- CONTENT -->
				<div class="content">
					<div id="page-header" class="dark-2">
						<div class="container">
							<div class="row">
								<div class="col-sm-6">
									<h4>Shopping Cart</h4>
								</div><!-- col -->
							</div><!-- row -->
						</div><!-- ontainer -->
					</div><!-- page-header -->
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<!-- headline -->
							</div><!-- col -->
						</div><!-- row -->
					</div><!-- container -->
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<h2>Shopping Cart</h2>
							</div><!-- col -->
						</div><!-- row -->
					</div><!-- container -->
					<br><br>
					<!-- container -->
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<div class="portfolio-item classic">
									<div class="row">
										<div class="col-sm-6">
											<div class="portfolio-item-thumbnail">
												<!-- <div class="portfolio-item-hover">
											</div>--><!-- portfolio-item-hover -->
										</div><!-- portfolio-item-thumbnail -->
									</div><!-- col -->
									<div class="col-sm-12">
										<div class="portfolio-item-description">
											<table class="cart_table" align="center" width="200" border="1">
												<tr><font color="black">
													<th>Item</th>
													<th>Type</th>
													<th>Quantity</th>
													<th>Price</th>
													<th>Total</th>
													<th>Actions</th>
												</tr>
												<?php
													$query=mysqli_query($con,"select cart_id,cart_login_id,cart_item_id,cart_item_type,sum(cart_quantity) AS quantity,item_name,item_id from wp_addtocart,wp_item_types where wp_addtocart.cart_item_type=wp_item_types.item_id and cart_login_id=$user_id and cart_status=1 GROUP BY cart_item_id");
													while ($row=mysqli_fetch_array($query)) {
														$item_type = $row['cart_item_type'];
														$item_id = $row['cart_item_id'];
														if($item_type==1){

															$query2=mysqli_query($con,"select * from wp_stage where stage_id=$item_id");
															while($row2=mysqli_fetch_array($query2)){
																?>
																<tr><font color="black">
																	<td><?php echo $row2['stage_name']?></td>
																	<td>Stage</td>
																	<td><?php echo $q=$row['quantity']?></td>
																	<td><?php echo $p=$row2['stage_price']?></td>
																	<td><?php echo $q*$p ?></td>
																	<form action="" method="post">
																		<input type="hidden" name="cart_item" value="<?php echo $row['cart_item_id'] ?>">
																	<td><center><input type="submit" name="btn_remove_cart_stage" class="btnremove" value="Remove"></center></td>
																</form>
																</tr>
																<?php
															}
														}
														else if($item_type==2){
															$query2=mysqli_query($con,"select * from wp_hall where hall_id=$item_id");
															while($row2=mysqli_fetch_array($query2)){
																?>
																<tr><font color="black">
																	<td><?php echo $row2['hall_name']?></td>
																	<td>Hall</td>
																	<td><?php echo $q=$row['quantity']?></td>
																	<td><?php echo $p=$row2['hall_price']?></td>
																	<td><?php echo $q*$p ?></td
																		<form action="" method="post">
																			<input type="hidden" name="cart_item" value="<?php echo $row['cart_item_id'] ?>">
																		<td><center><input type="submit" name="btn_remove_cart_hall" class="btnremove" value="Remove"></center></td>
																	</form>

																</tr>
																<?php
															}
														}
														else if($item_type==3){
															$query2=mysqli_query($con,"select * from wp_food where food_id=$item_id");
															while($row2=mysqli_fetch_array($query2)){
																?>
																<tr><font color="black">
																	<td><?php echo $row2['food_name']?></td>
																	<td>Food</td>
																	<td><?php echo $q=$row['quantity']?></td>
																	<td><?php echo $p=$row2['food_price']?></td>
																	<td><?php echo $q*$p ?></td>
																	<form action="" method="post">
																		<input type="hidden" name="cart_item" value="<?php echo $row['cart_item_id'] ?>">
																	<td><center><input type="submit" name="btn_remove_cart_food" class="btnremove" value="Remove"></center></td>
																</form>

																</tr>
																<?php
															}
														}
													}
												 ?>

											</table>
											<!--   <a class="btn btn-default" href="venueone.php">Know more</a> -->
										</div><!-- portfolio-item-description -->
									</div><!-- col -->
								</div><!-- row -->
							</div><!-- portfolio-item -->
					</div><!-- col -->
				</div><!-- row -->
			</div>
		</div><!-- CONTENT -->
		<!-- FOOTER -->
		<footer>
			<div id="footer-top">
				<!-- container -->
			</div><!-- footer-top -->
			<div id="footer">
				<div class="container">
					<div class="row">
						<div class="col-sm-3">
							<div class="widget widget-text">
								<h3 class="widget-title">About Us</h3>
								<p>As a trend setter We at , Scenerio have constantly shared the responsibility of our clients spreading the fragrance  and warmth  of hospitality all around.That brought us from a humble beginning of a wedding organising company to the present level of an  event management company of repute , over a period of seven years operating from the heart of Kerala, Kochi.</p>
							</div><!-- widget-text -->
							<div class="widget widget-newsletter">
								<form name="newsletter" method="post" action="#">
									<fieldset>
										<input type="text" name="email" placeholder="Email address">
										<input class="btn btn-default" type="submit" name="submit" value="">
									</fieldset>
								</form>
								<p>Subscribe Now</p>
							</div><!-- widget-newsletter -->
						</div><!-- col -->
						<div class="col-sm-3">
							<div class="widget widget-latest-news">
								<h3 class="widget-title">Reach Us</h3>
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31417.266141615346!2d76.39011650000002!3d10.167787800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080625cfebb7d1%3A0x89bcd5a211b5e7e6!2sNedumbassery%2C+Kerala!5e0!3m2!1sen!2sin!4v1428733319906" width="250" height="350" frameborder="0" style="border:0"></iframe>
							</div><!-- widget-recent-posts -->
						</div><!-- col -->
						<div class="col-sm-3">
							<div class="widget widget-latest-news">
								<h3 class="widget-title">Join With Us</h3>
								<div id="fb-root"></div>
								<script>(function(d, s, id) {
									var js, fjs = d.getElementsByTagName(s)[0];
									if (d.getElementById(id)) return;
									js = d.createElement(s); js.id = id;
									js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.0";
									fjs.parentNode.insertBefore(js, fjs);
								}(document, 'script', 'facebook-jssdk'));</script>
								<div class="fb-like-box" data-href="https://www.facebook.com/pages/Scenario-Wedding-Company/558467804256076" data-width="250" data-height="360" data-colorscheme="dark" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
							</div>
							<div class="social-media abc">
								<a class="twitter" href="https://twitter.com/scenariowc"><i class="fa fa-twitter"></i></a>
								<a class="google" href="https://plus.google.com/109256524763879194099?hl=en"><i class="fa fa-google-plus"></i></a>
								<a class="linkedin" href="https://www.linkedin.com/company/scenarioweddings?trk=biz-companies-cym"><i class="fa fa-linkedin"></i></a>
							</div>
						</div><!-- col -->
						<div class="col-sm-3">
							<div class="widget widget-contact">
								<h3 class="widget-title">Contact Us</h3>
								<ul>
									<li>
										<span>Address</span>
										Priyadarshini Complex,<br>
										Behind Hotel Airlink Castle.<br>
										Athani, Nedumbassery P.O- 683 585.<br>
									</li>
									<li>
										<span>Phone</span>
										Ph: +91 8547855652<br>
										+91  9946490001 <br>
										+91  9946490003
									</li>
									<li>
										<span>E-mail</span>
										<a href="mailto:scenariowedding@gmail.com">scenariowedding@gmail.com</a>
									</li>
									<li>
										<a href="faq.php"> <span>FAQ</span></a>
									</li>
								</ul>
							</div><!-- widget-contact -->
						</div><!-- col -->
					</div><!-- row -->
				</div><!-- container -->
			</div><!-- footer -->
			<div id="footer-bottom">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="widget widget-text">
								<p class="last text-center text-uppercase">Scenario Wedding Company &copy; All Rights Reserved
									|
									Designed By .:<a href="http://www.atees.in/" target="_blank">ATEES</a>:.
								</div><!-- widget-text -->
							</div><!-- col -->
						</div><!-- row -->
					</div><!-- container -->
				</div><!-- footer-bottom -->
			</footer><!-- FOOTER -->
			<div class="flyout" style="position: fixed; left: -5000px; top: - 5000px; color:#f5f5f5;"><h1><b>Wedding Planner in Cochin</b></h1><h1><b>Wedding planner in Kochi</b></h1><h1><b>Cochin weddings planners</b></h1><h1><b>cochin wedding planners</b></h1><h1><b>kochi weddings planner</b></h1><h1><b>kochi wedding planners</b></h1><h1><b>Wedding Planner in Ernakulam</b></h1><h1><b>wedding planner in angamaly</b></h1><h1><b>wedding planner in CIAL</b></h1><h1><b>Wedding planner in Bolgatty palace</b></h1><h1><b>Adlux wedding planner</b></h1><h1><b>Wedding planner in Kerala</b></h1><h1><b>best wedding planner in cochin</b></h1><h1><b>Best wedding planner in kochi</b></h1><h1><b>best wedding planner in kerala</b></h1><h1><b>Best wedding planners in cochin</b></h1><h1><b>Best wedding planners in kochi</b></h1><h1><b>best wedding planners in kerala</b></h1><h1><b>wedding company in kochi</b></h1><h1><b>wedding company in kerala</b></h1><h1><b>which is the number one wedding company in kerala</b></h1><h1><b>Beach wedding in Kochi</b></h1><h1><b>Beach weddings in Kochi</b></h1><h1><b>Wedding entertainment in Kochi</b></h1><h1><b>wedding planners in kochi</b></h1><h1><b>Wedding planners in Kerala</b></h1><h1><b>Wedding planners in ernakulam</b></h1><h1><b>destination wedding in kochi</b></h1><h1><b>Destination Weddings in Kochi</b></h1><h1><b>Destination wedding in Kerala</b></h1><h1><b>Destination weddings in Kerala</b></h1><h1><b>Best wedding event management companies in Cochin</b></h1><h1><b>Event Management Kochi</b></h1><h1><b>Event management ernakulam</b></h1><h1><b>Event Management Kerala</b></h1><h1><b>Wedding planners kochi</b></h1><h1><b>Wedding planners ernakulam</b></h1><h1><b>Wedding planners kerala</b></h1><h1><b>kerala wedding planners</b></h1><h1><b>Wedding venues in Kerala</b></h1><h1><b>Stage decoration in Kochi</b></h1><h1><b>Wedding stage decoration in kochi</b></h1><h1><b>wedding decorators in kochi</b></h1><h1><b>wedding decoration in kochi</b></h1><h1><b>Wedding Design and Decor in Kochi</b></h1><h1><b>Stage Design and Decor in Kochi</b></h1><h1><b>Invitation designing in Kochi</b></h1><h1><b>Invitation designing in Kerala</b></h1><h1><b>Catering services in Kochi</b></h1><h1><b>Catering service in Kochi</b></h1><h1><b>Wedding Photography in Kochi</b></h1><h1><b>Wedding videography in Kochi</b></h1><h1><b>wedding shopping assistance</b></h1><h1><b>wedding shopping assistance in kochi</b></h1>
			</div>
		</div><!-- PAGE-WRAPPER -->
		<style>
		.abc
		{
			padding-left:70px;
			}</style><!-- FOOTER -->
		</div><!-- PAGE-WRAPPER -->
		<!-- GO TOP -->
		<a id="go-top"><i class="miu-icon-circle_arrow-up_glyph"></i></a>
		<!-- STYLE SWITCHER -->
		<div id="style-switcher"></div>
		<!-- jQUERY -->
		<script src="assets/js/jquery-2.1.3.min.js"></script>
		<!-- BOOTSTRAP JS -->
		<script src="assets/js/bootstrap.min.js"></script>
		<!-- VIEWPORT -->
		<script src="assets/js/viewport/jquery.viewport.js"></script>
		<!-- MENU -->
		<script src="assets/js/menu/hoverIntent.js"></script>
		<script src="assets/js/menu/superfish.js"></script>
		<!-- FANCYBOX -->
		<script src="assets/js/fancybox/jquery.fancybox.pack.js"></script>
		<!-- REVOLUTION SLIDER -->
		<script src="assets/js/revolutionslider/js/jquery.themepunch.tools.min.js"></script>
		<script src="assets/js/revolutionslider/js/jquery.themepunch.revolution.min.js"></script>
		<!-- BxSLIDER -->
		<script src="assets/js/bxslider/jquery.bxslider.min.js"></script>
		<!-- PARALLAX -->
		<script src="assets/js/parallax/jquery.parallax-scroll.min.js"></script>
		<!-- ISOTOPE -->
		<script src="assets/js/isotope/imagesloaded.pkgd.min.js"></script>
		<script src="assets/js/isotope/isotope.pkgd.min.js"></script>
		<!-- PLACEHOLDER -->
		<script src="assets/js/placeholders/jquery.placeholder.min.js"></script>
		<!-- CONTACT FORM VALIDATE & SUBMIT -->
		<script src="assets/js/validate/jquery.validate.min.js"></script>
		<script src="assets/js/submit/jquery.form.min.js"></script>
		<!-- GOOGLE MAPS -->
		<script src="http://maps.google.com/maps/api/js?sensor=false"></script>
		<script src="assets/js/googlemaps/jquery.gmap.min.js"></script>
		<!-- CHARTS -->
		<script src="assets/js/charts/chart.min.js"></script>
		<script src="assets/js/charts/jquery.easypiechart.min.js"></script>
		<!-- COUNTER -->
		<script src="assets/js/counter/jQuerySimpleCounter.js"></script>
		<!-- YOUTUBE PLAYER -->
		<script src="assets/js/ytplayer/jquery.mb.YTPlayer.js"></script>
		<!-- TWITTER -->
		<script src="assets/js/twitter/twitterfetcher.js"></script>
		<!-- ANIMATIONS -->
		<script src="assets/js/animations/wow.min.js"></script>
		<!-- CUSTOM JS -->
		<script src="assets/js/custom.js"></script>
		<!-- STYLE SWITCHER -->
	</body>
	</html>
