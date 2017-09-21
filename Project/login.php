<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<?php
if(isset($_POST['login_submit'])){
	$un=$_POST['signin-username'];
	$pw=$_POST['signin-password'];
	$query=mysqli_query($con,"select * from wp_login where login_username='$un' and login_password='$pw' and login_status=1");
	if(mysqli_num_rows($query)>0){
		header('location: ./get-a-quote.php');
	}
}
if(isset($_POST['create_account'])){
	$flname=$_POST['signup-flname'];
	$un=$_POST['signup-un'];
	$phn=$_POST['signup-phn'];
	$email=$_POST['signup-email'];
	$add=$_POST['signup-add1'];
	$pwd=$_POST['signup-pwd'];
	$query1="insert into `wp_login` (login_username,login_password) values('$un','$pwd')";
	mysqli_query($con,$query1) or die(mysqli_error());
	$query2="select * from `wp_login` where login_username='$un' and login_password='$pwd'";
	$id_query=mysqli_query($con,$query2) or die(mysqli_error());
	while($row2=mysqli_fetch_array($id_query)){
		$id=$row2['login_id'];
		$query= "INSERT INTO `wp_registration` (login_id,registration_name,registration_address,registration_phone,registration_email) VALUES($id,'$flname','$add','$phn','$email')";
		$result = mysqli_query($con, $query) or die(mysqli_error());
		?> <script>alert("Success");</script><?php
	}

}
?>
<div class="cd-user-modal" style="z-index: 300;"> <!-- this is the entire modal form, including the background -->
	<div class="cd-user-modal-container"> <!-- this is the container wrapper -->
		<ul class="cd-switcher" type="none">
			<li><a href="#0">Sign in</a></li>
			<li><a href="#0">New account</a></li>
		</ul>

		<div id="cd-login"> <!-- log in form -->
			<form class="cd-form" action="#" method="post">
				<p class="fieldset">
					<label class="image-replace cd-username" for="signin-username"> Username</label>
					<input class="full-width has-padding has-border" name="signin-username" id="signin-username" type="text" placeholder="Username">
					<span class="cd-error-message" >Error message here!</span>
				</p>

				<p class="fieldset">
					<label class="image-replace cd-password" for="signin-password">Password</label>
					<input class="full-width has-padding has-border" name="signin-password" id="signin-password" type="password"  placeholder="Password">
					<a href="#0" class="hide-password">Show</a>
					<span class="cd-error-message">Error message here!</span>
				</p>

				<p class="fieldset">
					<input class="full-width" type="submit" name="login_submit" value="Login">
				</p>

				<p class="reset-message"><a href="#0">Forgot your password?</a></p>
			</form>

			<!-- <a href="#0" class="cd-close-form">Close</a> -->
		</div> <!-- cd-login -->

		<div id="cd-signup"> <!-- sign up form -->
			<form class="cd-form" id="signup_form" action="" method="post">

				<table>
					<tr>
						<td>
							<p class="fieldset">
								<label class="image-replace cd-username" for="signup-fullname">FullName</label>
								<input class="full-width has-padding has-border" name="signup-flname" id="signup-fullname" type="text" placeholder="Full Name">
							</p>
						</td>
						<td>
							<p class="fieldset frm_right">
								<label class="image-replace cd-username" for="signup-username">Username</label>
								<input class="full-width has-padding has-border" name="signup-un" id="signup-username" type="text" placeholder="Username">
								<span class="cd-error-message" id="signup-username-error">Username already registerd</span>
							</p>
						</td>
					</tr>
					<tr>
						<td>
							<p class="fieldset">
								<label class="image-replace cd-phone" for="signup-phone">Phone</label>
								<input class="full-width has-padding has-border" name="signup-phn" id="signup-phone" type="text" placeholder="Phone">
								<span class="cd-error-message" id="signup-phone-error" >Phone already taken</span>
							</p>
						</td>
						<td>
							<p class="fieldset frm_right">
								<label class="image-replace cd-email" for="signup-email">Email</label>
								<input class="full-width has-padding has-border" name="signup-email" id="signup-email" type="email" placeholder="E-mail">
								<span class="cd-error-message" id="signup-email-error">Email already registerd</span>
							</p>
						</td></tr>

						<tr>
							<td>
								<p class="fieldset">
									<label class="image-replace cd-address" for="signup-address_line1">AddressLine-1</label>
									<input class="full-width has-padding has-border "name="signup-add1" id="signup-address_line1" type="text" placeholder="Address">
								</p>
							</td>

								<td>
									<p class="fieldset frm_right">
										<label class="image-replace cd-password" for="signup-password">Password</label>
										<input class="full-width has-padding has-border" name="signup-pwd" id="signup-password" type="password"  placeholder="Password">
										<a href="#0" class="hide-password">Show</a>
										<span class="cd-error-message" id="signup-password-error" style="z-index: 3 !important;">Password must be 6-30 charactors</span>
									</p>
								</td></tr>

							</table>
							<p class="fieldset">
								<input class="full-width has-padding" type="submit" name="create_account" value="Create account"  a href="get-a-quote.php"></a>

							</p>
						</form>

						<!-- <a href="#0" class="cd-close-form">Close</a> -->
					</div> <!-- cd-signup -->

					<div id="cd-reset-password"> <!-- reset password form -->
						<p class="cd-form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>

						<form class="cd-form">
							<p class="fieldset">
								<label class="image-replace cd-email" for="reset-email">E-mail</label>
								<input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail">
								<span class="cd-error-message">Error message here!</span>
							</p>

							<p class="fieldset">
								<input class="full-width has-padding" type="submit" value="Reset password">
							</p>
						</form>

						<p class="reset-message back-to-log"><a href="#0">Back to log-in</a></p>
					</div> <!-- cd-reset-password -->
					<a href="#0" class="cd-close-form">Close</a>
				</div> <!-- cd-user-modal-container -->
			</div> <!-- cd-user-modal -->
<script src="js/jquery.js"></script>
<script src="js/validation.js"></script>
