<?php
include_once 'db_connect.php';
if(isset($_SESSION['user'])){
  $role=$_SESSION['user_role'];
  if($role!=1){
    header('location:admin.php');
  }
}
else{
  header('location:./');
}
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0">
  <meta name="keywords" content="wedding planner in Kerala,Wedding Planner in Kochi,Wedding Planner in Cochin,Best wedding planner in cochin,Cochin weddings planner,event management in Kochi">
  <meta name="description" content="Scenario Wedding Company is a Cochin based wedding planner. We design your dream wedding with classic ideas and extreme themes. Contact us : scenariowedding@gmail.com, +91 99464 90001">
  <meta name="author" content="Invosome">
  <meta name="google-site-verification" content="s1Qgwud677otLoQ_HX0flk-H37BezyHRnUy3-9OUXIw" />
  <title>  Best Wedding Planner in cochin - Kerala</title>
  <link rel="stylesheet" href="css/login_css.css">
  <link rel="apple-touch-icon" sizes="57x57" href="images/icons/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="images/icons/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="images/icons/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="images/icons/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="images/icons/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="images/icons/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="images/icons/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="images/icons/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="192x192"  href="images/icons/android-icon-192x192.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="images/icons/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="images/icons/ms-icon-144x144.png">
  <meta name="theme-color" content="#ffffff">
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
  <!-- ALTERNATIVE STYLES -->
  <link rel="stylesheet" href="#" data-style="styles">
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-68551846-1', 'auto');
  ga('send', 'pageview');
</script>
</head>
<body>
  <!--<a href="http://www.freerankdirectory.com/blogs_diaries/technology/">http://www.freerankdirectory.com/blogs_diaries/technology/</a>
  <a href="http://www.marketinginternetdirectory.com/shopping/computer_games_and_softwares/">Software Directory</a>href="http://www.siteswebdirectory.com/Computers_and_Internet/Programming/">siteswebdirectory.com</a>
  --->
  <div id="page-wrapper">
    <!-- HEADER -->
    <header>
      <div class="container">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-3" style="color:#ffaa00; text-align:right; font-size:14px;"><i class="fa fa-phone-square ph-icon" aria-hidden="true"></i> <a style="text-decoration:none;" href="mailto:scenariowedding@gmail.com">angelwedding@gmail.com</a></div>
          <div class="col-lg-2" style="color:#ffaa00; text-align:right; font-size:14px;"><i class="fa fa-envelope-o ph-icon" aria-hidden="true"></i> <a style="text-decoration:none;" href="tel:+919946490001">+91 99464 90001</a></div>
        </div>
      </div>
      <div class="container" style="border-bottom: 3px #110000">
        <div class="row">
          <div class="col-sm-2">
            <!-- LOGO -->
            <a id="logo" href="index.php">
              <img src="images/icons/logo1.png" alt="Destination wedding in Kerala" width="165">
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
                  <div class="megamenu-container col-"2>
                    <div class="section">
                      <img class="hidden-xs hidden-sm" src="images/backgrounds/image-megamenu.png" alt="Destination Weddings in Kochi" >
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
                  </div><!-- megamenu-container -->
                </li>
                <li>
                  <a href="contact-us.php">Contact</a>
                </li>
                <li>
                  <a href="logout.php">Logout</a>
                </li>
              </nav>
            </div><!-- col -->
          </div><!-- row -->
        </div><!-- container -->
      </header><!-- HEADER -->
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="">
              <div class="row">
                <div class="headline style-3"><br><br>
                  <h1>Welcome to Angel Wedding Company</h1>
                </div><!-- headline -->
                <div class="col-md-4 col-sm-3">
                  <div class="portfolio-item wow fadeInLeft">
                    <div class="portfolio-item-thumbnail btn_stage">
                      <img src="images/scenario/New folder/th2.jpg" width="360" alt="Wedding planners kerala">
                      <div class="portfolio-item-hover">
                        <div class="portfolio-item-description">
                          <h3><a href="design-stage.php">Stage Decoration</a></h3>
                        </div><!-- portfolio-item-description -->
                        <a class="fancybox-portfolio-gallery zoom-action" href="images/scenario/New folder/th1.jpg"><i class="fa fa-plus"></i></a>
                      </div><!-- portfolio-item-hover -->
                    </div><!-- portfolio-item-thumbnail -->
                  </div><!-- portfolio-item -->
                </div><!-- col -->
                <div class="col-md-4 col-sm-6">
                  <div class="portfolio-item wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="portfolio-item-thumbnail btn_hall">
                      <img src="images/hall/halllogo.jpg" width="270"  alt="kerala wedding planners">
                      <div class="portfolio-item-hover">
                        <div class="portfolio-item-description">
                          <h3><a href="design-decor.php">Hall Decoration</a></h3>
                        </div><!-- portfolio-item-description -->
                        <a class="fancybox-portfolio-gallery zoom-action" href="images/scenario/New folder/th2.jpg"><i class="fa fa-plus"></i></a>
                      </div><!-- portfolio-item-hover -->
                    </div><!-- portfolio-item-thumbnail -->
                  </div><!-- portfolio-item -->
                </div><!-- col -->
                <div class="col-md-4 col-sm-6">
                  <div class="portfolio-item wow fadeInRight" data-wow-delay="0.3s">
                    <div class="portfolio-item-thumbnail btn_food">
                      <img src="images/hall/cateringlogo.jpg" width="270"alt="Stage decoration in Kochi">
                      <div class="portfolio-item-hover">
                        <div class="portfolio-item-description">
                          <h3><a href="catservice.php">Catering Service</a></h3>
                        </div><!-- portfolio-item-description -->
                        <a class="fancybox-portfolio-gallery zoom-action" href="images/scenario/New folder/th3.jpg"><i class="fa fa-plus"></i></a>
                      </div><!-- portfolio-item-hover -->
                    </div><!-- portfolio-item-thumbnail -->
                  </div><!-- portfolio-item -->
                </div><!-- col -->
              </div>
            </div><!-- container -->
            <br><br>
            <!-- container -->
            <!-- ontainer -->
            <!-- ontainer -->
            <!-- project-slider -->
          </div><!-- CONTENT -->
          <style>
          @media (min-width:992px) and (max-width:1199px){
            .col-sm-10{
              width: 100.333%;
              margin-top: -4%;}
            }
            </style>
            <!-- CONTENT -->
            <!--   <div class="tp-caption fade" data-x="270" data-y="120" data-speed="700" data-start="1400" data-easing="easeOutBack">
            <img src="images/index/revolution-slider/slide-1-image-2.png" alt="">
          </div>
          <div class="tp-caption fade" data-x="300" data-y="50" data-speed="700" data-start="1800" data-easing="easeOutBack">
          <img src="images/index/revolution-slider/slide-1-image-3.png" alt="">
        </div>
        <div class="tp-caption sfb" data-x="530" data-y="220" data-speed="700" data-start="2400" data-easing="easeOutBack">
        <img src="images/index/revolution-slider/slide-1-image-4.png" alt="">
      </div>
    -->
    <div class="tp-caption sfb"  data-x="700" data-y="360" data-speed="700" data-start="5400" data-easing="easeOutBack">
    </div>
  </li>
  <div class="tp-caption sfb"  data-x="700" data-y="360" data-speed="700" data-start="5400" data-easing="easeOutBack">
  </li>
</ul>
</div><!-- banner -->
</div><!-- bannercontainer -->
<!-- container -->
<!-- container -->

<div class="col-sm-6">
  <div class="headline style-4">
    <h5>Your Perfect Wedding Planner..</h5>
  </div>
  <p>WEDDINGS, Product Launches, Award Nights and Fashion Shows.........whatever be the
    occasion, Scenario - The Ultimate Wedding Planner in Cochin, have the classic ideas to reach
    the minds of the participants and guests with the real essence of the theme, forever. OUR
    expertise will provide you the best inputs to organize the event from the scratch to the final
    execution, like the preparation of the invitation letters to the final end of the event by standing at
    your side of thoughts and actions. SOMETIMES enticing and sometimes elusive for others..
  </p>
</div>  <!--col-->
<div class="col-sm-6">
  <div class="headline style-4">
    <h5>THE KEY TO CORPORATE EVENTS…</h5>
  </div>
  <p>Planning a sophisticated corporate event with a multitude of details is not at all an easy task. We will
    blend your ideas with our experience and creativity to design a beautiful, memorable wedding day that is unique
    to your personality and style. You will be assured of personalized services and the highest level of dedication for
    the flawless execution of the event.
  </p>
</div>  <!--col-->
</div><!-- row -->
</div><!-- info-slider -->
</div><!-- col -->
</div><!-- row -->
</div><!-- container -->
<section class="full-section parallax" id="section-1">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <!-- headline -->
        <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br> <br><!-- testimonial-slider -->
      </div><!-- col -->
    </div><!-- row -->
  </div><!-- container -->
</section><!-- full-section -->
<div class="container">
  <!-- row -->
</div><!-- container -->
<br><br><br>
<div class="container">
  <div class="row">
    <div class="headline style-3">
      <h2>Angel Weddings</h2>
    </div>

    <section class="full-section parallax" id="section-1 " style="background:url(images/backgrounds/bg-21.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <!-- headline -->
            <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br> <br><!-- testimonial-slider -->
          </div><!-- col -->
        </div><!-- row -->
      </div><!-- container -->
    </section><!-- full-section -->
    <div class="flyout" style="position: fixed;   left: -5000px;   top: - 5000px;   color: rgba(39, 39, 39, 0);"> <h1><b>Wedding planner in Kerala</b></h1><h1><b>Wedding planner in Kochi</b></h1><h1><b>Event management in Kerala</b></h1><h1><b>Stage decoration in Kerala</b></h1><h1><b>Designer cakes in Kerala</b></h1><h1><b>Beach wedding in Kerala</b></h1><h1><b>Best wedding event management companies in Cochin</b></h1><h1><b>Top wedding event management companies in Kerala</b></h1><h1><b>Top wedding event management companies in Cochin</b></h1><h1><b>Wedding Surprises in kochi</b></h1><h1><b>Catering services in Kochi</b></h1><h1><b>wedding shopping assistance in kochi</b></h1><h1><b>Destination Weddings in Kochi Kerala</b></h1><h1><b>Wedding videography in Kerala</b></h1></div>
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
                <p>As a trend setter We at , Angel have constantly shared the responsibility of our clients spreading the fragrance  and warmth  of hospitality all around.That brought us from a humble beginning of a wedding organising company to the present level of an  event management company of repute , over a period of seven years operating from the heart of Kerala, Kochi.</p>
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
                    <a href="mailto:scenariowedding@gmail.com">angelwedding@gmail.com</a>
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
                <p class="last text-center text-uppercase">Angel Wedding Company &copy; All Rights Reserved
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
      }</style>
      <!-- GO TOP -->
      <a id="go-top"><i class="miu-icon-circle_arrow-up_glyph"></i></a>
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
      <script src="assets/js/googlemaps/jquery.gmap.min.js"></script>
      <!-- CHARTS -->
      <script src="assets/js/charts/chart.min.js"></script>
      <script src="assets/js/charts/jquery.easypiechart.min.js"></script>
      <!-- COUNTER -->
      <script src="assets/js/counter/jQuerySimpleCounter.js"></script>
      <!-- YOUTUBE PLAYER -->
      <script src="assets/js/ytplayer/jquery.mb.YTPlayer.js"></script>
      <!-- ANIMATIONS -->
      <script src="assets/js/animations/wow.min.js"></script>
      <!-- CUSTOM JS -->
      <script src="assets/js/custom.js"></script>
      <script>
      $(function () {
        $('#login_pop').click(function(){
          $("#log_pop").click();
        })
        $('.btn_stage').click(function(){
          window.location.href = "./design-stage.php";
        })
        $('.btn_hall').click(function(){
          window.location.href = "./design-decor.php";
        })
        $('.btn_food').click(function(){
          window.location.href = "./catservice.php";
        })

      })
      </script>
      <script type="text/javascript" src="js/login_js.js"></script>
    </body>
    </html>
