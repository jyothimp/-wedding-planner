$(document).ready(function() {

  $("#signup_form").on("submit", function(){
    var val_fullname= /^[A-Za-z.\s]{3,30}$/;
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
    var val_fullname= /^[A-Za-z.\s]{3,30}$/;
    $fullname = $(this).val();
    if(!val_fullname.test($fullname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#name_error').html("Invalid name");
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
    var v = grecaptcha.getResponse();

    if(!val_username.test($username)){
      $("#signin-username").focusout();
      return false;
    }
    else if(!val_password.test($password)){
      $("#signin-password").focusout();
      return false;
    }
    else if(v.length==0){
         $("#signin-captcha_error ").addClass('is-visible');
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
    var val_price= /^[0-9.]{1,30}$/;
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
    var val_description= /^[^\*]{5,300}$/;
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
    var val_eprice= /^[0-9.]{1,30}$/;
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
    var val_edescription= /^[^\*]{5,300}$/;
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
      $('#hall_image_error').html("");
      $('#hall_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#hall_image_error").html("Invalid image");
      $('#hall_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#hall_name").focusout(function() {
    var val_hname=  /^[A-Za-z0-9_.]{3,30}$/;
    $hname = $(this).val();
    if(!val_hname.test($hname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_name_error').html("Invalid name");
      $('#hall_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_name_error').html("");
      $('#hall_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_price").focusout(function() {
    var val_hprice= /^[0-9.]{1,30}$/;
    $hprice = $(this).val();
    if(!val_hprice.test($hprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_price_error').html("Invalid price");
      $('#hall_price_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_price_error').html("");
      $('#hall_price_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_description").focusout(function() {
    var val_hdescription= /^[^\*]{5,300}$/;
    $hdescription = $(this).val();
    if(!val_hdescription.test($hdescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_description_error').html("Invalid description");
      $('#hall_description_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_description_error').html("");
      $('#hall_description_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_edit_form").on("submit", function(){
    var val_hename= /^[A-Za-z0-9_.]{3,30}$/;
    var val_hedescription= /^[^\*]{5,300}$/;
    var val_heprice= /^[0-9.]{1,30}$/;
    var val_heimage=/\.(jpe?g|png|gif|bmp)$/i;
    $hename = $('#hall_editname').val();
    $hedescription = $('#hall_editdescription').val();
    $heprice= $('#hall_editprice').val();
    $heimage = $('#hall_editimage').val();
    if(!val_hename.test($hename)){
      $("#hall_editname").focusout();
      return false;
    }
    else if(!val_hedescription.test($hedescription)){
      $("#hall_editdescription").focusout();
      return false;
    }
    else if(!val_heprice.test($heprice)){
      $("#hall_editprice").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#hall_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#hall_eimage_error').html("");
      $('#hall_eimage_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#hall_eimage_error").html("Invalid image");
      $('#hall_eimage_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#hall_editname").focusout(function() {
    var val_hename=  /^[A-Za-z0-9_.]{3,30}$/;
    $hename = $(this).val();
    if(!val_hename.test($hename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_ename_error').html("Invalid name");
      $('#hall_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_ename_error').html("");
      $('#hall_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_editprice").focusout(function() {
    var val_heprice= /^[0-9.]{1,30}$/;
    $heprice = $(this).val();
    if(!val_heprice.test($heprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_eprice_error').html("Invalid price");
      $('#hall_eprice_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_eprice_error').html("");
      $('#hall_eprice_error').removeClass('is-visible');
      return true;
    }
  });
  $("#hall_editdescription").focusout(function() {
    var val_hedescription= /^[^\*]{5,300}$/;
    $hedescription = $(this).val();
    if(!val_hedescription.test($hedescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#hall_edescription_error').html("Invalid description");
      $('#hall_edescription_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#hall_edescription_error').html("");
      $('#hall_edescription_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_add_form").on("submit", function(){
    var val_fname= /^[^~]{3,30}$/;
    var val_fdescription= /^[^\*]{5,300}$/;
    var val_fprice= /^[0-9.]{1,30}$/;
    var val_ftype= /^[0-9]{1,2}$/;
    var val_fimage=/\.(jpe?g|png|gif|bmp)$/i;
    $fname = $('#food_name').val();
    $fdescription = $('#food_description').val();
    $fprice= $('#food_price').val();
    $ftype= $('#food_type').val();
    $fimage = $('#food_image').val();
    if(!val_fname.test($fname)){
      $("#food_name").focusout();
      return false;
    }
    else if(!val_ftype.test($ftype)){
      $("#food_type").focusout();
      return false;
    }
    else if(!val_fimage.test($fimage)){
      $("#food_image").focusout();
      return false;
    }
    else if(!val_fprice.test($fprice)){
      $("#food_price").focusout();
      return false;
    }
    else if(!val_fdescription.test($fdescription)){
      $("#food_description").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#food_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#food_image_error').html("");
      $('#food_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#food_image_error").html("Invalid image");
      $('#food_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#food_name").focusout(function() {
    var val_fname=  /^[^~]{3,30}$/;
    $fname = $(this).val();
    if(!val_fname.test($fname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_name_error').html("Invalid name");
      $('#food_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_name_error').html("");
      $('#food_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_price").focusout(function() {
    var val_fprice= /^[0-9.]{1,30}$/;
    $fprice = $(this).val();
    if(!val_fprice.test($fprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_price_error').html("Invalid price");
      $('#food_price_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_price_error').html("");
      $('#food_price_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_type").focusout(function() {
    var val_ftype= /^[1-9]{1,2}$/;
    $ftype = $(this).val();
    if(!val_ftype.test($ftype)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_type_error').html("Invalid type");
      $('#food_type_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_type_error').html("");
      $('#food_type_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_description").focusout(function() {
    var val_fdescription= /^[^\*]{5,300}$/;
    $fdescription = $(this).val();
    if(!val_fdescription.test($fdescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_description_error').html("Invalid description");
      $('#food_description_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_description_error').html("");
      $('#food_description_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_edit_form").on("submit", function(){
    var val_fename= /^[^~]{3,30}$/;
    var val_fedescription= /^[^\*]{5,300}$/;
    var val_feprice= /^[0-9.]{1,30}$/;
    var val_feimage=/\.(jpe?g|png|gif|bmp)$/i;
    $fename = $('#food_editname').val();
    $fedescription = $('#food_editdescription').val();
    $feprice= $('#food_editprice').val();
    $feimage = $('#food_editimage').val();
    if(!val_fename.test($fename)){
      $("#food_editname").focusout();
      return false;
    }
    else if(!val_fedescription.test($fedescription)){
      $("#food_editdescription").focusout();
      return false;
    }
    else if(!val_feprice.test($feprice)){
      $("#food_editprice").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#food_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#food_eimage_error').html("");
      $('#food_eimage_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#food_eimage_error").html("Invalid image");
      $('#food_eimage_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#food_editname").focusout(function() {
    var val_fename= /^[^~]{3,30}$/;
    $fename = $(this).val();
    if(!val_fename.test($fename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_ename_error').html("Invalid name");
      $('#food_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_ename_error').html("");
      $('#food_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_editprice").focusout(function() {
    var val_feprice= /^[0-9.]{1,30}$/;
    $feprice = $(this).val();
    if(!val_feprice.test($feprice)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_eprice_error').html("Invalid price");
      $('#food_eprice_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_eprice_error').html("");
      $('#food_eprice_error').removeClass('is-visible');
      return true;
    }
  });
  $("#food_editdescription").focusout(function() {
    var val_fedescription= /^[^\*]{5,300}$/;
    $fedescription = $(this).val();
    if(!val_fedescription.test($fedescription)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#food_edescription_error').html("Invalid description");
      $('#food_edescription_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#food_edescription_error').html("");
      $('#food_edescription_error').removeClass('is-visible');
      return true;
    }
  });
  $("#reset_password-form").on("submit", function(){
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $email = $('#reset-email').val();
    if(!val_email.test($email)){
      $("#reset-email").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#reset-email").focusout(function() {
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $email = $('#reset-email').val();
    if(!val_email.test($email)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#reset_password_error').html("Invalid Email Id");
      $('#reset_password_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#reset_password_error').html("");
      $('#reset_password_error').removeClass('is-visible');
      return true;
    }
  });
  $("#myform_cart").on("submit", function(){
    var val_phone= /^[0-9]{9,12}$/;
    var val_dateformat = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    var val_location = /^[^&]{3,30}$/;
    var val_venue=  /^[^&]{3,30}$/;
    $phone = $('#number').val();
    $dateformat = $('#date').val();
    $location= $('#location :selected').text();
    $venue= $('#venue').val();
    if(!val_phone.test($phone)){
      $("#number").focusout();
      return false;
    }
    else if(!val_dateformat .test($dateformat)){
      $("#date").focusout();
      return false;
    }
    else if(!val_location .test($location)){
      $("#location").focusout();
      return false;
    }
    else if(!val_venue.test($venue)){
      $("#venue").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#number").focusout(function() {
    var val_phone= /^[0-9]{9,12}$/;
    $phone = $(this).val();
    if(!val_phone.test($phone)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#number_error').html("Invalid phone number");
      $('#number_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#number_error').html("");
      $('#number_error').removeClass('is-visible');
      return true;
    }
  });
  $("#date").focusout(function() {
    var val_dateformat = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    $dateformat = $(this).val();
    $dt=new Date();
    var start= new Date($dateformat);
    var today= new Date($dt);
    if(!val_dateformat.test($dateformat)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#date_error').html("Invalid date");
      $('#date_error').addClass('is-visible');
      return false;
    }
    else if(start <= today){
      $(this).focus();
      $(this).css('border','1px solid blue');
      $('#date_error').html("Date must be later than today");
      $('#date_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#date_error').html("");
      $('#date_error').removeClass('is-visible');
      return true;
    }
  });
  $("#location").focusout(function() {
    var val_location= /^[A-Za-z.\s]{3,30}$/;
    $location=$('#location :selected').text();
    if(!val_location.test($location)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#location_error').html("Invalid location");
      $('#location_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#location_error').html("");
      $('#location_error').removeClass('is-visible');
      return true;
    }
  });
  $("#venue").focusout(function() {
    var val_venue= /^[A-Za-z.\s]{3,30}$/;
    $venue= $(this).val();
    if(!val_venue.test($venue)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#venue_error').html("Invalid venue");
      $('#venue_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#venue_error').html("");
      $('#venue_error').removeClass('is-visible');
      return true;
    }
  });
  $("#payment").on("submit", function(){
    var val_cardno=  /^[0-9]{16,18}$/;
    var val_cvv=  /^[0-9]{3}$/;
    var val_holdername=  /^[^&]{3,30}$/;
    var val_month=  /^[0-9]{1,2}$/;
    var val_year=  /^[0-9]{4}$/;
    $cardno= $('#cardno').val();
    $cvv= $('#cvv').val();
    $holdername= $('#holdername').val();
    $month= $('#month :selected').text();
    $year= $('#year :selected').text();
    $pay=$('#total_amount').val();
   if(! val_cardno.test($cardno)){
      $("#cardno").focusout();
      return false;
    }
    else if(!val_month.test($month)){
      $("#month").focusout();
      return false;
    }
    else if(!val_year.test($year)){
      $("#year").focusout();
      return false;
    }
    else if(!val_cvv.test($cvv)){
      $("#cvv").focusout();
      return false;
    }

    else if(!val_holdername.test($holdername)){
      $("#holdername").focusout();
      return false;
    }
    else {

      return true;
    }
  });
  $("#cardno").focusout(function() {
    var val_cardno= /^[0-9]{16,18}$/;
    $cardno = $(this).val();
    if(!val_cardno.test($cardno)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#cardno_error').html("Invalid card number");
      $('#cardno_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#cardno_error').html("");
      $('#cardno_error').removeClass('is-visible');
      return true;
    }
  });
  $("#month").focusout(function() {
    var val_month= /^[0-9]{1,2}$/;
    $month = $(this).val();
    if(!val_month.test($month)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#month_error').html("Invalid month");
      $('#month_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#month_error').html("");
      $('#month_error').removeClass('is-visible');
      return true;
    }
  });
  $("#year").focusout(function() {
    var val_year= /^[0-9]{4}$/;
    $year = $(this).val();
    if(!val_year.test($year)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#year_error').html("Invalid year");
      $('#year_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#year_error').html("");
      $('#year_error').removeClass('is-visible');
      return true;
    }
  });

  $("#cvv").focusout(function() {
    var val_cvv= /^[0-9]{3}$/;
    $cvv= $(this).val();
    if(!val_cvv.test($cvv)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#cvv_error').html("Invalid cvv");
      $('#cvv_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#cvv_error').html("");
      $('#cvv_error').removeClass('is-visible');
      return true;
    }
  });
  $("#holdername").focusout(function() {
    var val_holdername= /^[A-Za-z.\s]{3,30}$/;
    $holdername= $(this).val();
    if(!val_holdername.test($holdername)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#holdername_error').html("Invalid holdername");
      $('#holdername_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#holdername_error').html("");
      $('#holdername_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_add_form").on("submit", function(){
    var val_name= /^[A-Za-z0-9_.]{3,30}$/;
    var val_image=/\.(jpe?g|png|gif|bmp)$/i;
    var val_address= /^[^&]{10,300}$/;
    var val_website= /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}$/;
    var val_pin= /^[0-9]{1,6}$/;
    var val_phone= /^[0-9]{9,12}$/;
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $name = $('#photo_name').val();
    $image = $('#photo_image').val();
    $address= $('#photo_address').val();
    $website = $('#photo_website').val();
    $pin = $('#photo_pin').val();
    $phone = $('#photo_phone').val();
    $email = $('#photo_email').val();

    if(!val_name.test($name)){
      $("#photo_name").focusout();
      return false;
    }
    else if(!val_image.test($image)){
      $("#photo_image").focusout();
      return false;
    }
    else if(!val_address.test($address)){
      $("#photo_address").focusout();
      return false;
    }
    else if(!val_website.test($website)){
      $("#photo_website").focusout();
      return false;
    }
    else if(!val_pin.test($pin)){
      $("#photo_pin").focusout();
      return false;
    }
    else if(!val_phone.test($phone)){
      $("#photo_phone").focusout();
      return false;
    }
    else if(!val_email.test($email)){
      $("#photo_email").focusout();
      return false;
    }
    else {
      return true;
    }
  });

  $("#photo_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#photo_image_error').html("");
      $('#photo_image_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#photo_image_error").html("Invalid image");
      $('#photo_image_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#photo_name").focusout(function() {
    var val_name=  /^[A-Za-z0-9_.]{3,30}$/;
    $name = $(this).val();
    if(!val_name.test($name)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_name_error').html("Invalid name");
      $('#photo_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_name_error').html("");
      $('#photo_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_address").focusout(function() {
    var val_address=/^[^&]{10,300}$/;
    $address = $(this).val();
    if(!val_address.test($address)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_address_error').html("Invalid address");
      $('#photo_address_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_address_error').html("");
      $('#photo_address_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_website").focusout(function() {
    var val_website= /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}$/;
    $website = $(this).val();
    if(!val_website.test($website)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_website_error').html("Invalid website");
      $('#photo_website_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_website_error').html("");
      $('#photo_website_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_pin").focusout(function() {
    var val_pin= /^[0-9]{1,6}$/;
    $pin = $(this).val();
    if(!val_pin.test($pin)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_pin_error').html("Invalid pin");
      $('#photo_pin_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_pin_error').html("");
      $('#photo_pin_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_phone").focusout(function() {
    var val_phone=  /^[0-9]{9,12}$/;
    $phone = $(this).val();
    if(!val_phone.test($phone)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_phone_error').html("Invalid phone");
      $('#photo_phone_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_phone_error').html("");
      $('#photo_phone_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_email").focusout(function() {
    var val_email= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $email = $(this).val();
    if(!val_email.test($email)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_email_error').html("Invalid email");
      $('#photo_email_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_email_error').html("");
      $('#photo_email_error').removeClass('is-visible');
      return true;
    }
  });
   $("#photo_edit_form").on("submit", function(){
    var val_ename= /^[A-Za-z0-9_.]{3,30}$/;
    var val_eaddress= /^[^&]{10,300}$/;
    var val_ewebsite= /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}$/;
    var val_epin= /^[0-9]{1,6}$/;
    var val_ephone= /^[0-9]{9,12}$/;
    var val_eemail= /^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    var val_eimage=/\.(jpe?g|png|gif|bmp)$/i;
    $ename = $('#photo_editname').val();
    $eaddress = $('#photo_editaddress').val();
    $ewebsite= $('#photo_editwebsite').val();
    $epin= $('#photo_editpin').val();
    $ephone= $('#photo_editphone').val();
    $eemail= $('#photo_editemail').val();
    $eimage = $('#photo_editimage').val();
    if(!val_ename.test($ename)){
      $("#photo_editname").focusout();
      return false;
    }
    else if(!val_eaddress.test($eaddress)){
      $("#photo_editaddress").focusout();
      return false;
    }
    else if(!val_ewebsite.test($ewebsite)){
      $("#photo_editwebsite").focusout();
      return false;
    }
    else if(!val_epin.test($epin)){
      $("#photo_editpin").focusout();
      return false;
    }
    else if(!val_ephone.test($ephone)){
      $("#photo_editphone").focusout();
      return false;
    }
    else if(!val_eemail.test($eemail)){
      $("#photo_editemail").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#photo_editimage").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png':
      $('#photo_eimage_error').html("");
      $('#photo_eimage_error').removeClass('is-visible');
      return true;
      break;
      default:
      $("#photo_eimage_error").html("Invalid image");
      $('#photo_eimage_error').addClass('is-visible');
      return false;
      break;
    }
  });
  $("#photo_editname").focusout(function() {
    var val_ename=  /^[A-Za-z0-9_.]{3,30}$/;
    $ename = $(this).val();
    if(!val_ename.test($ename)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_ename_error').html("Invalid name");
      $('#photo_ename_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_ename_error').html("");
      $('#photo_ename_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_editaddress").focusout(function() {
    var val_eaddress=  /^[A-Za-z0-9_.]{3,30}$/;
    $eaddress = $(this).val();
    if(!val_eaddress.test($eaddress)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_eaddress_error').html("Invalid address");
      $('#photo_eaddress_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_eaddress_error').html("");
      $('#photo_eaddress_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_editpin").focusout(function() {
    var val_epin= /^[0-9]{1,6}$/;
    $epin = $(this).val();
    if(!val_epin.test($epin)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_epin_error').html("Invalid pin");
      $('#photo_epin_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_epin_error').html("");
      $('#photo_epin_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_editwebsite").focusout(function() {
    var val_ewebsite=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}$/;phone
    $ewebsite = $(this).val();
    if(!val_ewebsite.test($ewebsite)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_ewebsite_error').html("Invalid website");
      $('#photo_ewebsite_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_ewebsite_error').html("");
      $('#photo_ewebsite_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_editphone").focusout(function() {
    var val_ephone=/^[0-9]{9,12}$/;
    $ephone = $(this).val();
    if(!val_ephone.test($ephone)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_ephone_error').html("Invalid phone");
      $('#photo_ephone_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_ephone_error').html("");
      $('#photo_ephone_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_editemail").focusout(function() {
    var val_eemail=/^[A-Za-z0-9._]*\@[A-Za-z0-9._]*\.[A-Za-z]{2,5}$/;
    $eemail = $(this).val();
    if(!val_eemail.test($eemail)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#photo_eemail_error').html("Invalid email");
      $('#photo_eemail_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#photo_eemail_error').html("");
      $('#photo_eemail_error').removeClass('is-visible');
      return true;
    }
  });
  $("#media_add_form").on("submit", function(){
    var val_mname= /^[^~]{3,30}$/;
    var val_mtype= /^[0-9]{1,2}$/;
    var val_mimage=/\.(jpe?g|png|gif|bmp|mp4|3gp|avi)$/i;
    $mname = $('#photo_name').val();
    $mtype= $('#photo_type').val();
    $mimage = $('#photo_image').val();
    if(!val_mname.test($mname)){
      $("#photo_name").focusout();
      return false;
    }
    else if(!val_mtype.test($mtype)){
      $("#photo_type").focusout();
      return false;
    }
    else if(!val_mimage.test($mimage)){
      $("#photo_image").focusout();
      return false;
    }
    else {
      return true;
    }
  });
  $("#photo_image").change(function() {
    var val = $(this).val();
    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
      case 'gif': case 'jpg': case 'png': case 'mp4': case '3gp': case 'avi':
        $('#media_image_error').html("");
        $('#media_image_error').removeClass('is-visible');
        return true;
        break;
      default:
        $("#media_image_error").html("Invalid media file");
        $('#media_image_error').addClass('is-visible');
        return false;
        break;
    }
  });
  $("#photo_name").focusout(function() {
    var val_mname=  /^[^~]{3,30}$/;
    $mname = $(this).val();
    if(!val_mname.test($mname)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#media_name_error').html("Invalid name");
      $('#media_name_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#media_name_error').html("");
      $('#media_name_error').removeClass('is-visible');
      return true;
    }
  });
  $("#photo_type").focusout(function() {
    var val_mtype= /^[1-9]{1,2}$/;
    $mtype = $(this).val();
    if(!val_mtype.test($mtype)){
      $(this).focus();
      $(this).css('border','1px solid red');
      $('#media_type_error').html("Invalid type");
      $('#media_type_error').addClass('is-visible');
      return false;
    }
    else {
      $(this).css('border','1px solid #cccccc');
      $('#media_type_error').html("");
      $('#media_type_error').removeClass('is-visible');
      return true;
    }
  });
})
