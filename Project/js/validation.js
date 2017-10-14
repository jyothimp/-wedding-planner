$(document).ready(function() {

  $("#signup_form").on("submit", function(){
    var val_fullname= /^[A-Za-z.]{3,30}$/;
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    var val_phone= /^[0-9]{9,12}$/;
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    var val_address_line1= /^[^&]{10,300}$/;
    var val_password= /^[^&]{6,30}$/;
    $fullname = $('#signup-fullname').val();
    $username = $('#signup-username').val();
    $phone = $('#signup-phone').val();
    $email = $('#signup-email').val();
    $address_line1 = $('#signup-address_line1').val();
    $password = $('#signup-password').val();


    if(!val_fullname.test($fullname)){
      $("#signup-fullname").focusout();
      return false;
    }
    else if(!val_username.test($username)){
      $("#signup-username").focusout();
      return false;
    }
    else if(!val_phone.test($phone)){
      $("#signup-phone").focusout();
      return false;
    }
    else if(!val_email.test($email)){
      $("#signup-email").focusout();
      return false;
    }
    else if(!val_address_line1.test($address_line1)){
      $("#signup-address_line1").focusout();
      return false;
    }
    else if(!val_password.test($password)){
      $("#signup-password"),focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#signup-fullname").focusout(function() {
    var val_fullname= /^[A-Za-z.]{3,30}$/;
    $fullname = $(this).val();
    if(!val_fullname.test($fullname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#name_error').html("Invalid Username");
      $('#name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#name_error').html("");
      $('#name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-username").focusout(function() {
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    $username = $(this).val();
    if(!val_username.test($username)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#username_error').html("Invalid Username");
      $('#username_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#username_error').html("");
      $('#username_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-phone").focusout(function() {
    var val_phone= /^[0-9]{9,12}$/;
    $phone = $(this).val();
    if(!val_phone.test($phone)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#phone_error').html("Invalid phone number");
      $('#phone_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#phone_error').html("");
      $('#phone_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-email").focusout(function() {
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $email = $(this).val();
    if(!val_email.test($email)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#email_error').html("Invalid email");
      $('#email_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#email_error').html("");
      $('#email_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-address_line1").focusout(function() {
    var val_address_line1= /^[^&]{10,300}$/;
    $address_line1 = $(this).val();
    if(!val_address_line1.test($address_line1)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#address_error').html("Invalid address");
      $('#address_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#address_error').html("");
      $('#address_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signup-password").focusout(function() {
    var val_password= /^[^&]{6,30}$/;
    $password  = $(this).val();
    if(!val_password.test($password )){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#password_error').html("Invalid password");
      $('#password_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#password_error').html("");
      $('#password_error').removeClass('is-visible');
      return true;
    }
  });


  $("#signin_form").on("submit", function(){
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    var val_password= /^[^&]{6,30}$/;
    $username = $('#signin-username').val();
    $password = $('#signin-password').val();
    if(!val_username.test($username)){
      $("#signin-username").focusout();
      return false;
    }
    else if(!val_password.test($password)){
      $("#signin-password").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#signin-username").focusout(function() {
    var val_username= /^[A-Za-z0-9_.]{3,30}$/;
    $username = $(this).val();
    if(!val_username.test($username)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#signin-username_error').html("Invalid Username");
      $('#signin-username_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#signin-username_error').html("");
      $('#signin-username_error').removeClass('is-visible');
      return true;
    }
  });
  $("#signin-password").focusout(function() {
    var val_password= /^[^&]{6,30}$/;
    $password  = $(this).val();
    if(!val_password.test($password )){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#signin-password_error').html("Invalid password");
      $('#signin-password_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#signin-password_error').html("");
      $('#signin-password_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_add_form").on("submit", function(){
    var val_name= /^[A-Za-z0-9_.]{3,30}$/;
    var val_image=/\.(jpe?g|png|gif|bmp)$/i;
    var val_price= /^[0-9.]{1,30}$/;
    var val_description= /^[^\*]{5,300}$/;
    $name = $('#stage_name').val();
    $image = $('#stage_image').val();
    $price= $('#stage_price').val();
    $description = $('#stage_description').val();

    if(!val_name.test($name)){
      $("#stage_name").focusout();
      return false;
    }
    else if(!val_image.test($image)){
      $("#stage_image").focusout();
      return false;
    }
    else if(!val_price.test($price)){
      $("#stage_price").focusout();
      return false;
    }
    else if(!val_description.test($description)){
      $("#stage_description").focusout();
      return false;
    }
    else {
      return true;
    }
  });

  $("#stage_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#stage_image_error').html("");
      $('#stage_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#stage_image_error").html("Invalid image");
      $('#stage_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#stage_name").focusout(function() {
    var val_name=  /^[A-Za-z0-9_.]{3,30}$/;
    $name = $(this).val();
    if(!val_name.test($name)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_name_error').html("Invalid name");
      $('#stage_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_name_error').html("");
      $('#stage_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_price").focusout(function() {
    var val_price= /^[0-9.]{1,30}$/
    $price = $(this).val();
    if(!val_price.test($price)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_price_error').html("Invalid price");
      $('#stage_price_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_price_error').html("");
      $('#stage_price_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_description").focusout(function() {
    var val_description= /^[^\*]{5,300}$/
    $description = $(this).val();
    if(!val_description.test($description)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_description_error').html("Invalid description");
      $('#stage_description_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_description_error').html("");
      $('#stage_description_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_edit_form").on("submit", function(){
    var val_ename= /^[A-Za-z0-9_.]{3,30}$/;
    var val_edescription= /^[^\*]{5,300}$/;
    var val_eprice= /^[0-9.]{1,30}$/;
    var val_eimage=/\.(jpe?g|png|gif|bmp)$/i;
    $ename = $('#stage_editname').val();
    $edescription = $('#stage_editdescription').val();
    $eprice= $('#stage_editprice').val();
    $eimage = $('#stage_editimage').val();
    if(!val_ename.test($ename)){
      $("#stage_editname").focusout();
      return false;
    }
    else if(!val_edescription.test($edescription)){
      $("#stage_editdescription").focusout();
      return false;
    }
    else if(!val_eprice.test($eprice)){
      $("#stage_editprice").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#stage_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#stage_eimage_error').html("");
      $('#stage_eimage_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#stage_eimage_error").html("Invalid image");
      $('#stage_eimage_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#stage_editname").focusout(function() {
    var val_ename=  /^[A-Za-z0-9_.]{3,30}$/;
    $ename = $(this).val();
    if(!val_ename.test($ename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_ename_error').html("Invalid name");
      $('#stage_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_ename_error').html("");
      $('#stage_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_editprice").focusout(function() {
    var val_eprice= /^[0-9.]{1,30}$/
    $eprice = $(this).val();
    if(!val_eprice.test($eprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_eprice_error').html("Invalid price");
      $('#stage_eprice_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_eprice_error').html("");
      $('#stage_eprice_error').removeClass('is-visible');
      return true;
    }
  });
  $("#stage_editdescription").focusout(function() {
    var val_edescription= /^[^\*]{5,300}$/
    $edescription = $(this).val();
    if(!val_edescription.test($edescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#stage_edescription_error').html("Invalid description");
      $('#stage_edescription_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#stage_edescription_error').html("");
      $('#stage_edescription_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_add_form").on("submit", function(){
    var val_hname= /^[A-Za-z0-9_.]{3,30}$/;
    var val_hdescription= /^[^\*]{5,300}$/;
    var val_hprice= /^[0-9.]{1,30}$/;
    var val_himage=/\.(jpe?g|png|gif|bmp)$/i;
    $hname = $('#hall_name').val();
    $hdescription = $('#hall_description').val();
    $hprice= $('#hall_price').val();
    $himage = $('#hall_image').val();
    if(!val_hname.test($hname)){
      $("#hall_name").focusout();
      return false;
    }
    else if(!val_himage.test($himage)){
      $("#hall_image").focusout();
      return false;
    }
    else if(!val_hprice.test($hprice)){
      $("#hall_price").focusout();
      return false;
    }
    else if(!val_hdescription.test($hdescription)){
      $("#hall_description").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#hall_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#stage_image_error').html("");
      $('#stage_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#stage_image_error").html("Invalid image");
      $('#stage_image_error').addClass('is-visible');
      return false;
      break;
    }
  });

})
